const bmPort = {
	base: '/bmport',
	target: process.env.api_port
}

const marketPort = {
	base: '/marketport',
	target: process.env.api_market
}

const loginPort = {
	base: '/loginport',
	target: process.env.api_loginport
}

const apiPort = {
	base: '/apiport',
	target: process.env.api_apiport
}

const pcPort = {
	base: '/pcport',
	target: process.env.api_pcHost
}

const ocrPort = {
	base: '/ocrport',
	target: process.env.api_ocrPort
}

const discountPort = {
	base: '/discountport',
	target: process.env.api_discountPort
}

const yiqianPort = {
	base: '/yiqian',
	target: process.env.api_yiqianUrl
}

const assessPort = {
	base: '/assess',
	target: process.env.api_assessUrl
}

const portArr = [
	bmPort,
	marketPort,
	loginPort,
	apiPort,
	pcPort,
	ocrPort,
	discountPort,
	yiqianPort,
	assessPort
]

module.exports = {
	portArr,
	bmPort,
	marketPort,
	loginPort,
	apiPort,
	pcPort,
	ocrPort,
	discountPort,
	yiqianPort,
	assessPort
}

