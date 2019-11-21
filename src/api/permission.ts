import fetch from '../utils/fetch';
import DocBase from '../model/DocBase';
import paths from '../utils/paths';
import {ApiInterface, ApiMock, ApiModule, ApiParam} from '../annotation';

interface MenuItem {
	children: null;
	code: string;
	createTime: null;
	defaultStatus: '0' | '1';
	effectStatus: '0' | '1';
	grantLevel: '0' | '1';
	icon: string;
	id: number;
	name: string;
	orderNum: number;
	parCode: string;
	showStatus: '0' | '1';
	type: '0' | '1' | '2' | '9';
	updateTime: null;
	url: string;
}

declare class PermissionModuleType extends DocBase {
	static getUserPermission(): Promise<MenuItem[]>;
	static getAllPermission(): Promise<MenuItem[]>;
}

const result = `{
\tchildren: null;
\tcode: string;     // 权限code值
\tcreateTime: null;
\tdefaultStatus: '0' | '1';
\teffectStatus: '0' | '1';
\tgrantLevel: '0' | '1';
\ticon: string;
\tid: number;
\tname: string;
\torderNum: number;
\tparCode: string;
\tshowStatus: '0' | '1';
\ttype: '0' | '1' | '2' | '9';
\tupdateTime: null;
\turl: string;
}[]`

@ApiModule('权限模块', 1, '赵鹏程')
export default class PermissionModule extends DocBase {
	@ApiInterface({
		name: '获取用户的权限',
		author: '赵鹏程',
		order: 0,
		description: '获取当前登录用户所拥有的权限配置',
		result
	})
	@ApiMock({
		url: paths.getUserPermission,
		method: 'get',
		template: []
	}, false)
	static getUserPermission() {
		return fetch<MenuItem[]>({
			url: paths.getUserPermission,
			params: { isTree: 0 }
		});
	}
	@ApiInterface({
		name: '获取所有权限列表',
		author: '赵鹏程',
		order: 1,
		description: '获取系统所有权限列表',
		result
	})
	static getAllPermission() {
		return fetch<MenuItem[]>({
			url: paths.getAllPermission,
			params: { isTree: 0 }
		});
	}
}
