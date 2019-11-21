import axios, { AxiosRequestConfig, AxiosResponse, Canceler, Method } from 'axios';
import { UUID } from './index';

const timeout = Number(process.env.API_TIMEOUT) || 10000;
const baseURL = process.env.API_BASE || '';

const initConfig = {
	baseURL,
	timeout,
	withCredentials: true
};

const CancelToken = axios.CancelToken;

const service = axios.create(initConfig);

// 缓存cancel函数的容器，若request config传入pendingId，则以pendingId为key缓存本次请求的cancel函数
const cancelCache: O<Canceler> = {};

service.interceptors.request.use((config: AxiosRequestConfig) => {
	const pendingId = config.headers['X-PendingId'];
	if (pendingId) {
		// 如果存在pendingId，则代表该次请求可被终止
		// 创建用于中断的token
		const source = CancelToken.source();
		config.cancelToken = source.token;
		cancelCache[pendingId] = source.cancel;
	}
	return config;
});

type AxiosResponseWithCancel<T> = Merge<AxiosResponse<T>, { config: AxiosRequestConfig }>;

function isBaseResponse(data: any) {
	if (typeof data !== 'object') {
		return false;
	} else {
		const { code, data: d, msg } = data;
		return typeof code !== 'undefined' && typeof d !== 'undefined' && typeof msg !== 'undefined';
	}
}

let responseResolver: FN<[any], any>;
let responseRejector: FN<[any], any>;
export const Cancel_Msg = '请求被终止';
export const Network_Msg = '网络异常';

service.interceptors.response.use(
	(response: AxiosResponseWithCancel<any>) => {
		const { status, data, config } = response;
		const pendingId = config.headers['X-PendingId'];
		if (pendingId) {
			// 响应结束后，清除缓存的cancel
			Reflect.deleteProperty(cancelCache, pendingId);
		}
		if (status === 200) {
			return Promise.resolve(responseResolver ? responseResolver(data) : data)
		} else {
			return Promise.reject(responseRejector? responseRejector(data) : data)
		}
	},
	error => {
		if (axios.isCancel(error)) {
			console.error(Cancel_Msg);
			return Promise.reject(responseRejector ? responseRejector(Cancel_Msg) : Cancel_Msg)
		}
		console.error(Network_Msg, error);
		return Promise.reject(responseRejector ? responseRejector(Network_Msg) : Network_Msg)
	}
);

export type WithCancelResult<R = undefined> = {
	cancel: FN;
	pending: FN<[], Promise<R>>;
};

export function registerResponseResolver(resolver: FN<[any], any>) {
	responseResolver = resolver;
}
export function registerResponseRejector(rejector: FN<[any], any>) {
	responseRejector = rejector;
}

export function withCancel<R = undefined>(config: Merge<AxiosRequestConfig, { method: Method }>): WithCancelResult<R> {
	const pendingId = UUID();
	return {
		cancel() {
			const cancelFn = cancelCache[pendingId];
			if (cancelFn) {
				cancelFn();
				Reflect.deleteProperty(cancelCache, pendingId);
			} else {
				console.error('未找到cancel函数');
			}
		},
		pending() {
			return service<R>({
				...config,
				headers: {
					...config.headers,
					'X-PendingId': pendingId
				}
			});
		}
	};
}

export default service;
