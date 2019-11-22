import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import localCache from '../../utils/localCache';

interface State {
	selectedInterface: string;
	setSelectedInterface(value: string): void;
}

const cacheKey = '__last_selectedInterface_';

const initState = {
	selectedInterface: ''
};

const actionState = {
	setSelectedInterface() {}
};

const ctx = createContext<State>({
	...initState,
	...actionState
});

export const Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [selectedInterface, setSelectedInterface] = useState<string>(localCache.get(cacheKey) || '');
	const P = ctx.Provider;
	const value = {
		selectedInterface,
		setSelectedInterface(v: string) {
			setSelectedInterface(v);
			localCache.set(cacheKey, v);
		}
	};
	return <P value={value}>{children}</P>;
};

export default ctx;
