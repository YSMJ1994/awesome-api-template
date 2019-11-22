/// <reference types="./common" />

export * from './api';
import ApiModule from './api';
import { registerResponseResolver, registerResponseRejector, Cancel_Msg, Network_Msg } from './utils/fetch';
import { FN } from '@jinyiao/awesome-api-tools';

function config({
	responseResolver,
	responseRejector
}: {
	responseResolver?: FN<[any], any>;
	responseRejector?: FN<[any], any>;
}) {
	responseResolver && registerResponseResolver(responseResolver);
	responseRejector && registerResponseRejector(responseRejector);
}

export { Cancel_Msg, Network_Msg, config };

export default ApiModule;
