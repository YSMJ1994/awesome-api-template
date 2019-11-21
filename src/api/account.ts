import DocBase from '../model/DocBase';
import { ApiInterface, ApiModule, ApiParam } from '../annotation';
export interface UserInfo {
	id: string | number;
	name: string;
	age: number | '';
	sex: '男' | '女' | '';
	email: string;
}

type GetUserInfo = () => Promise<UserInfo>;

export let getUserInfo: GetUserInfo;

@ApiModule('账户模块api')
class AccountModule extends DocBase {
	@ApiInterface({ name: '获取用户信息', result: '1' })
	static getUserInfo(@ApiParam({ paramName: 'id', name: '用户id', type: 'string' }) id: string) {
		return 1;
	}
}

export default AccountModule;