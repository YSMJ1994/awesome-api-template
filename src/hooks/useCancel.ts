import { useEffect, useRef, useCallback } from 'react';
import { WithCancelResult } from '../utils/fetch';
import { FN, ValueOf } from '@jinyiao/awesome-api-tools';

type ApiFn<P extends any[], R = undefined> = FN<P, WithCancelResult<R>>;

type Cancel<R = undefined> = ValueOf<WithCancelResult<R>, 'cancel'>;

export default function useCancel<P extends any[], R>(apiFn: ApiFn<P, R>) {
	const cancelRef = useRef<Cancel<R>>();
	return useCallback(
		function(...args: P) {
			cancelRef.current && cancelRef.current();
			const { cancel, pending } = apiFn.apply(null, args);
			cancelRef.current = cancel;
			return new Promise<R>((resolve, reject) => {
				pending()
					.then(res => {
						cancelRef.current = undefined;
						resolve(res);
					})
					.catch(e => {
						cancelRef.current = undefined;
						reject(e);
					});
			});
		},
		[apiFn]
	);
}
