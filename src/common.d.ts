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
	type FN<P extends Array<any> = [], R = void> = (...args: P) => R;
	interface O<T = any> {
		[key: string]: T;
	}
	interface BaseResponse<T = any> {
		data: T;
		code: number;
		msg: string;
	}
	
	type PickKeys<S extends {}, T extends {} = {}> = keyof (S & T)
	
	/*type Merge<S extends {}, T extends {} = {}> = {
		[K in OmitKeys<S, T>]: K extends keyof T ? T[K] : S[K]
	}*/
	
	type ValueOf<T, K extends keyof T> = T[K]

	type Merge<S extends {}, T extends {} = {}> = S & T
	
	type CustomObject<V> = {[key: string]: V}
	
	type PartialPart<T, P extends keyof T> = Merge<Omit<T, P>, Partial<Pick<T, P>>>
	
	// type OmitKeys<S extends {}[]> = 
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
