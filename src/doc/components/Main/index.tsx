import React, { useContext } from 'react';
import './style.scss';
import menuCtx from '../../ctx/menu';
import apisCtx from '../../ctx/apis';

function MainBlank() {
	// todo: 空白main内容
	return null;
}

function Row({ label, children }: PropsWithChildren<{ label: string }>) {
	return (
		<h4>
			{label}： <span className="doc-main-body-desc">{children}</span>
		</h4>
	);
}

function Main() {
	const menuState = useContext(menuCtx);
	const apisState = useContext(apisCtx);
	const { selectedInterface } = menuState;
	if (!selectedInterface) {
		return <MainBlank />;
	}
	const Interface = apisState.Interfaces[selectedInterface];
	if (!Interface) {
		return <MainBlank />;
	}
	const { name, description, fnName, parameters, result, author, parentKey } = Interface;
	const Module = apisState.Modules[parentKey];
	const { name: moduleName = '', className: moduleClassName = '' } = Module || {};
	return (
		<div className="doc-main-body">
			<h2>{name}</h2>
			<Row label="模块">
				{moduleClassName} {moduleName}
			</Row>
			<Row label="描述">{description || '无'}</Row>
			<Row label="作者">{author}</Row>
			<Row label="函数名称">{fnName}</Row>
			<Row label="参数列表" />
			{parameters.length ? (
				<table className="doc-main-body-parameters-table">
					<thead>
						<tr>
							<th>index</th>
							<th>变量</th>
							<th>参数名</th>
							<th>描述</th>
							<th>类型</th>
						</tr>
					</thead>
					<tbody>
						{parameters.map(item => {
							const { id, name, order, type, paramName, description } = item;
							return (
								<tr key={id}>
									<td>{order}</td>
									<td>{paramName}</td>
									<td>{name}</td>
									<td>{description}</td>
									<td><pre>{type}</pre></td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<p>无参数</p>
			)}
			<Row label="返回值" />
			<pre>{result}</pre>
		</div>
	);
}

export default Main;
