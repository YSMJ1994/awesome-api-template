import Mock from "mockjs";
import { registryPort } from '../utils/paths';
import portSet from './portSet'

const isDev = process.env.NODE_ENV === 'development';

Mock.setup({ timeout: 1000 });
registryPort({
	bm: isDev ? portSet.bmPort.base : portSet.bmPort.target,
	market:  isDev ? portSet.marketPort.base : portSet.marketPort.target,
	login:  isDev ? portSet.loginPort.base : portSet.loginPort.target,
	api:  isDev ? portSet.apiPort.base : portSet.apiPort.target,
	pc:  isDev ? portSet.pcPort.base : portSet.pcPort.target,
	ocr:  isDev ? portSet.ocrPort.base : portSet.ocrPort.target,
	discount:  isDev ? portSet.discountPort.base : portSet.discountPort.target,
	assess:  isDev ? portSet.assessPort.base : portSet.assessPort.target,
	yiqian: isDev ? portSet.yiqianPort.base : portSet.yiqianPort.target,
});
