/// <reference types="node" />
/// <reference types="axios" />
/// <reference types="react" />
/// <reference types="react-dom" />

import { ComponentClass, FC, ReactNode } from 'react';
import Axios, {AxiosInterceptorManager, AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios";

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'production' | 'test'
			readonly API_TIMEOUT: string;
			API_BASE: string;
			PORT: string;
			API_DOC_BASE_URL: string;
		}
	}

	type PropsWithChildren<P = {}> = P & { children?: ReactNode };
	type ReactComponent<Props = {}, State = any> = FC<Props> | ComponentClass<Props, State>;
	type RC<P extends {} = {}, S = any> = ReactComponent<P, S>;
}

declare module 'axios' {
	interface AxiosInstance {
		<R = undefined>(config: AxiosRequestConfig): Promise<R>;
		<R = undefined>(url: string, config?: AxiosRequestConfig): Promise<R>;
		defaults: AxiosRequestConfig;
		interceptors: {
			request: AxiosInterceptorManager<AxiosRequestConfig>;
			response: AxiosInterceptorManager<AxiosResponse>;
		};
		getUri(config?: AxiosRequestConfig): string;
		request<R = any> (config: AxiosRequestConfig): Promise<R>;
		get<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
		delete<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
		head<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
		post<R = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
		put<R = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
		patch<R = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
	}
}
