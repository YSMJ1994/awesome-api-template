import {config, PermissionModule} from '../src';

config({
	portConfig: {
		bm: process.env.api_port
	}
})

console.log('process.env', process.env)
test('sum test', () => {
	return PermissionModule.getUserPermission().then(result => {
		console.log('result', result);
		
	})
});
