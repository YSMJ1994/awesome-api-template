import { DocBase, ApiModule, ApiInterface, ApiParam, ApiMock } from '@jinyiao/awesome-api-tools';
import { withCancel } from '../utils/fetch';

export interface LoginParams {
	username: string; // 用户名
	password: string; // 密码
}

export interface LoginResult {
	ok: boolean;
}

@ApiModule('登录相关api', 0, '测试')
class TestModule extends DocBase {
	@ApiInterface({
		name: '登录接口',
		description: '根据用户名和密码登录用户',
		order: 0,
		result: '{cancel: () => void, pending: () => Promise<{ok: boolean}>}',
		author: '测试'
	})
	@ApiMock(
		{
			url: '/api/login',
			method: 'post',
			getTemplate({ username, password }) {
				return { ok: username === 'u' && password === 'p' };
			}
		},
		true
	)
	static login(
		@ApiParam({ paramName: 'params', name: '登录参数对象', type: '{username: string, password: string}' })
		params: LoginParams
	) {
		return withCancel<LoginResult>({
			method: 'post',
			url: '/api/login',
			data: params
		});
	}

	@ApiInterface({ name: '登出接口', order: 1, result: '无', author: '测试' })
	static logout() {
		return withCancel({
			method: 'get',
			url: '/api/logout'
		});
	}
}

export default TestModule;
