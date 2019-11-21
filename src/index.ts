/// <reference types="./common" />

import * as ApiModule from './api';
import { registerResponseResolver, registerResponseRejector, Cancel_Msg, Network_Msg } from './utils/fetch';
import { registryPort, portConfig } from './utils/paths';

function config({
	responseResolver,
	responseRejector,
	portConfig
}: {
	responseResolver?: FN<[any], any>;
	responseRejector?: FN<[any], any>;
	portConfig?: portConfig;
}) {
	responseResolver && registerResponseResolver(responseResolver);
	responseRejector && registerResponseRejector(responseRejector);
	portConfig && registryPort(portConfig);
}

const { default: apisSorted, AccountModule, LoginModule, PermissionModule } = ApiModule;

export { Cancel_Msg, Network_Msg, apisSorted, config, AccountModule, LoginModule, PermissionModule };

export default ApiModule;
