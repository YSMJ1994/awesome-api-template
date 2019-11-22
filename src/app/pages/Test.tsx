import React from 'react';
import apiModules from '../../index';
import useCancel from '../../hooks/useCancel';

const Test = () => {
	const login = useCancel(apiModules.TestModule.login);
	return (
		<div>
			<button
				onClick={() => {
					login({ username: 'u', password: 'p' })
						.then(res => {
							console.log('login success', res.ok);
						})
						.catch(error => {
							console.log('login failed', error);
						});
				}}
			>
				登陆
			</button>
		</div>
	);
};

export default Test;
