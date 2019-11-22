import React, { createContext, FC, useEffect, useState } from 'react';
import { apiList } from '../../api';
import { DocJSON, InterfaceItem, DocBaseConstructor } from '@jinyiao/awesome-api-tools';

interface ModulesMap {
	[id: string]: DocJSON | undefined;
}

interface InterfacesMap {
	[id: string]: InterfaceItem | undefined;
}

interface State {
	Modules: ModulesMap;
	Interfaces: InterfacesMap;
	apiDocs: DocJSON[];
	apis: DocBaseConstructor[];
}

const initState: State = {
	Modules: {},
	Interfaces: {},
	apiDocs: [],
	apis: []
};

const ctx = createContext<State>(initState);

export const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [state, setState] = useState<State>(initState);
	const P = ctx.Provider;
	useEffect(() => {
		const apisDoc = apiList
			.sort((a, b) => a.__api_modules__.order - b.__api_modules__.order)
			.map(t => t.toDocJSON());
		setState({
			Modules: apisDoc.reduce<ModulesMap>((pre, item) => {
				const { id } = item;
				pre[id] = item;
				return pre;
			}, {}),
			Interfaces: apisDoc.reduce<InterfacesMap>((pre, item) => {
				const { interfaces } = item;
				interfaces.forEach(t => {
					pre[t.id] = t;
				});
				return pre;
			}, {}),
			apiDocs: apisDoc,
			apis: apiList
		});
	}, [apiList]);

	return <P value={state}>{children}</P>;
};

export default ctx;
