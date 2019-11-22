import React, { MouseEventHandler, useContext, useEffect, useState } from 'react';
import './style.scss';
import { CollapseBox } from 'sober_components';
import cs from 'classnames';
import menuCtx from '../../ctx/menu';
import apisCtx from '../../ctx/apis';
import { InterfaceItem } from '@jinyiao/awesome-api-tools';

function ModuleRow({
	name,
	num,
	selected = false,
	onClick
}: {
	name: string;
	num: number;
	selected?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div className={cs('menu-item-title', { 'menu-item-title--selected': selected })} onClick={onClick}>
			<i className="iconfont icon-api" />
			<span className="menu-item-title-name">{name}</span>
			<span className="menu-item-title-num">{num}</span>
		</div>
	);
}

function InterfaceRow({
	name,
	fnName,
	author,
	selected = false,
	onClick
}: {
	name: string;
	fnName: string;
	author: string;
	selected?: boolean;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div className={cs('menu-item-interface', { 'menu-item-interface--selected': selected })} onClick={onClick}>
			<i className="iconfont icon-function" />
			<div className="menu-item-interface-main">
				<div className="menu-item-interface-main__name">{name}</div>
				<div className="menu-item-interface-main__fn">{fnName}</div>
			</div>
			<div className="menu-item-interface-author">{author}</div>
		</div>
	);
}

function Item({
	id,
	name,
	className,
	author,
	interfaces,
	open,
	selectedId,
	onOpen,
	onSelect
}: {
	id: string;
	name: string;
	className: string;
	author: string;
	interfaces: InterfaceItem[];
	open: boolean;
	selectedId: string;
	onOpen: Function;
	onSelect: (interfaceItem: string) => void;
}) {
	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAnimated(true);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);
	return (
		<div className="menu-item">
			<ModuleRow name={name} num={interfaces.length} selected={open} onClick={() => onOpen(id)} />
			<CollapseBox show={open} animated={animated}>
				{interfaces.map(item => {
					return (
						<InterfaceRow
							key={item.name}
							selected={selectedId === item.id}
							name={item.name}
							fnName={item.fnName}
							author={item.author}
							onClick={() => onSelect(item.id)}
						/>
					);
				})}
			</CollapseBox>
		</div>
	);
}

function Menu() {
	const menuState = useContext(menuCtx);
	const apisState = useContext(apisCtx);
	const { apiDocs, Interfaces } = apisState;
	const { selectedInterface } = menuState;
	const [openKey, setOpenKey] = useState('');
	useEffect(() => {
		if (!selectedInterface || !apiDocs.length) {
			return;
		}
		const Interface = Interfaces[selectedInterface];
		if (!Interface) {
			return;
		}
		const shouldOpenKey = Interface.parentKey;
		if (shouldOpenKey && shouldOpenKey !== openKey) {
			setOpenKey(shouldOpenKey);
		}
	}, [selectedInterface, apiDocs]);
	return (
		<div className="doc-main-menu">
			{apiDocs.map(docJSON => {
				const { id, name, author, className, interfaces } = docJSON;
				return (
					<Item
						id={id}
						name={name}
						className={className}
						author={author}
						interfaces={interfaces}
						key={name}
						open={openKey === id}
						selectedId={selectedInterface}
						onOpen={() => setOpenKey(openKey === id ? '' : id)}
						onSelect={interfaceId => menuState.setSelectedInterface(interfaceId)}
					/>
				);
			})}
		</div>
	);
}

export default Menu;
