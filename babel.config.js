module.exports = {
	plugins: [
		[
			'import',
			{
				libraryName: 'sober_components',
				camel2DashComponentName: false,
				libraryDirectory: 'es',
				style: 'css'
			},
			'babel-import-for-sober_components'
		]
	]
};
