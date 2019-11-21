/*
------------------------------------------------------------
	author: zhaopengcheng
	create: 2019-08-09 12:22:31
	description: devServer api代理设置
------------------------------------------------------------
*/

const proxy = require('http-proxy-middleware');
const { portArr } = require('./portSet');

module.exports = function(app) {
	portArr.forEach(({ base, target }) => {
		app.use(
			proxy(base, {
				target,
				changeOrigin: true,
				pathRewrite: {
					[`^${base}`]: ''
				},
				logLevel: 'warn'
			})
		);
	});
};
