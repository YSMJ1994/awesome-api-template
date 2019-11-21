let port = '/';
let market = '/';
let loginport = '/';
let apiport = '/';
let pcHost = '/';
let ocrPort = '/';
let discountPort = '/';
let assessUrl = '/';
let yiqianUrl = '/';

function generatePaths() {
	return {
		//所有的url都列在这里
		login: loginport + 'bmlogin',
		logout: loginport + 'bmlogout',
		pclogout: loginport + 'pclogout',
		//检测是否已经登录
		checkPcSSO: loginport + 'checkWebSSO',
		//获取消息中心列表
		queryMessageCenterList: pcHost + 'message/queryMessageCenterList',

		//获取表单token防止多次点击多次调接口
		getFormToken: pcHost + 'repeatToken/getToken',
		//权限管理
		//返回所有权限菜单
		getAllMenu: port + 'permission/allPrivileges',
		//添加权限
		addpermission: port + 'permission/add',

		//返回用户的权限菜单

		getUserAllMenu: port + 'permission/findPrivilegesByRoleId',
		//返回用户所有权限字符串code
		getUserAllCode: port + 'permission/getPrivilegesByUserId',

		//用户相关接口

		findPrivileges: port + 'permission/findPrivilegesByUserId',
		ueserresetPwd: port + 'user/resetPwd',

		//获取图片上传阿里云需要的数据(pc)
		getOssTicketSignpcHost: pcHost + 'oss/getOssSTSPackageTicketSign',
		//角色管理
		//部门设置
		addCompanyDepartment: port + 'companyDepartment/addCompanyDepartment',
		enableOrDisable: port + 'companyDepartment/enableOrDisable',
		getAllCompanyDepartment: port + 'companyDepartment/getAllCompanyDepartment',
		getAllCompanyDepartmentTree: port + 'companyDepartment/getAllCompanyDepartmentTree',
		companysort: port + 'companyDepartment/sort',
		upDateCompanyDepartment: port + 'companyDepartment/upDateCompanyDepartment',

		//角色管理
		addRole: port + 'role/addRole',
		deleteRole: port + 'role/deleteRole',
		getAll: port + 'role/getAll',
		// getAllRole: port + "role/getAllRole",
		getPermissionOfRole: port + 'role/getPermissionOfRole',
		modifyRole: port + 'role/modifyRole',
		//管理员设置
		addRoleToUser: port + 'admin/addRoleToUser',
		addUser: port + 'admin/addUser',
		getallUsers: port + 'admin/allUsers',
		forbidUserById: port + 'admin/forbidUserById',
		modifyUser: port + 'admin/modifyUser',
		resetPwd: port + 'admin/resetPwd',

		//权限管理
		findPrivilegesByUserId: port + 'bm/permission/findPrivilegesByUserId',

		//员工添加
		newEmployee: port + 'bm/companyEmployee/add/newEmployee',
		//查看是否有企业邀请用户加入
		IsInvited: port + 'bm/companyEmployee/check/IsInvited',
		//弹窗二次确认
		reConfirm: port + 'bm/companyEmployee/check/reConfirm',
		//员工离职
		demission: port + 'bm/companyEmployee/delete/demission',
		//撤销
		rollBackInvite: port + 'bm/companyEmployee/delete/rollBackInvite',
		//根据经理人获取员工树形结构
		getCompanyEmployeeTreeByRoleId: port + 'bm/companyEmployee/getCompanyEmployeeTreeByRoleId',
		//根据角色大类获取在职员工树结构
		queryEmployeeTreeByRole: port + 'bm/companyEmployee/queryEmployeeTreeByRole',
		//公司员工分页查询
		listCompanyEmployeeByPage: port + 'bm/companyEmployee/search/listCompanyEmployeeByPage',
		//确认邀请
		confirmInvite: port + 'bm/companyEmployee/update/confirmInvite',

		//员工更新
		employeeInfo: port + 'bm/companyEmployee/update/employeeInfo',

		//再次加入
		joinAgain: port + 'bm/companyEmployee/update/joinAgain',

		//获取角色所拥有的权限字符串
		listPermissionStringOfRole: port + 'role/getPermissionOfRole',
		//分页返回所有角色列表
		listRoleByPage: port + 'sys/role/list',
		//角色 修改
		updateRoleInfo: port + 'sys/role/add',
		//添加角色
		addRoleInfo: port + 'sys/role/add',
		//删除角色
		deleteRoleById: port + 'sys/role/delete',
		// 为角色分配权限
		grantPermissionForRole: port + 'sys/role/grantPermission',
		// 角色详情
		roleDetailById: port + '/sys/role/detail',
		//员工管理获取所有角色 不包含角色：root用户
		getAllRole4Employee: port + 'sys/role/listOfGrant',

		//获取公司信息
		getByCompanyId: port + 'simpleCompany/myDetail',

		//修改密码
		updateBmPwd: loginport + 'updateBmPwd',

		//钱海添加
		queryTradeOrder: port + 'digitalBillOrder/queryTradeOrder',

		confirmSign: port + 'digitalBillOrder/confirmSign',

		confirmPay: port + 'digitalBillOrder/confirmPay',

		getTradeOrderDetail: port + 'digitalBillOrder/getTradeOrderDetail',

		confirmRecite: port + 'digitalBillOrder/confirmRecite',

		updateCompany: port + 'company/updateCompany',

		//获取订单交易动态
		queryTradeOrderOrbit: port + 'digitalBillOrder/queryTradeOrderOrbit',

		//获取当前用户一周库存和平台一周库存信息--折线图
		getUserAndAllRepertory: port + 'billRepertory/statistics/getUserAndAllRepertory',
		//获取用户昨日交易信息汇总数据（个人、个人/企业）--饼图
		getTransMessageByUser: market + 'billTradeMessage/getTransMessageByUser',

		//更新公司完整信息
		updateCompanyInfo: port + '/simpleCompany/edit',

		//银行操作相关接口
		//(万商汇1.0)编辑银行特价分类
		updateBankCategorySpecialPrice: port + 'categoryBank/updateBankCategorySpecialPrice',
		//(万商汇1.0)根据银行名查询列表
		getSolrListByBankName: port + 'categoryBank/getSolrListByBankName',

		//获取表单提交token
		getToken: port + 'bmRepeatToken/getToken',

		//获取服务器时间接口
		getServerCurrentTime: port + 'util/getServerCurrentTime',

		//获取发起交易订单详情接口
		getInitiateTradeOrderDetail: port + 'billTrade/getInitiateTradeOrderDetail',

		//pc的最简版库存p2票据识别
		//票据识别出错记录入库
		addErrorRecord: pcHost + 'ocrBank/addErrorRecord',
		//新的票据识别出错记录入库
		addTicketFail: ocrPort + 'ocr/ticket/fail',
		//识别票据
		allrecoginze: ocrPort + 'ocr/ticket',

		//最简版库存p2简化版库存相关接口
		//PC返回简版库存分享URL
		getSimpleBillRepertory4ShareForPC: pcHost + 'getSimpleBillRepertory4ShareForPC',
		//查看票面
		simpleBillGetPic: port + 'simpleBillPic/getPic',
		//票面上传
		simpleBillPicUpload: port + 'simpleBillPic/upload',
		//查询可出库数量
		canOutStockNum: port + 'simpleBillRepertory/canOutStockNum',
		//简版库存详情
		simpleBillRepertoryDetail: port + 'simpleBillRepertory/detail',
		//我的库存-拟售价批量编辑
		updatePlannedPrice: port + 'billRepertory/updatePlannedPrice',
		//返回简版库存图片分享url
		getShareStockUrl: pcHost + 'simpleBillRepertory/getShareStockUrl',
		//库存批量导入
		importBatch: port + 'simpleBillRepertory/importBatch',
		//简化版票据入库(单次)
		insertOrUpdate: port + 'simpleBillRepertory/insertOrUpdate',
		//简版库存列表查询
		simpleListByPage: port + 'simpleBillRepertory/listByPage',
		//简化版票据出库(单次)
		simpleOutStock: port + 'simpleBillRepertory/outStock',
		//根据承兑人全程获取承兑人简称
		queryBankShortNameByBankName: port + 'simpleBillRepertory/queryBankShortNameByBankName',
		//上传简版库存到库存平台
		simpleBillUpload: pcHost + 'simpleBillRepertory/upload',
		//最简版库存p2简化版库存预定接口
		//新增预定（库存字段beforeVersion=1 使用）
		simpleAddReserve: port + 'simpleBillReserve/addReserveList',
		//撤销预定
		simpleCancelReserve: port + 'simpleBillReserve/cancelReserve',
		//撤销预定时的交易户查询
		simpleBillReserveListTradingHousehold: port + 'simpleBillReserve/listTradingHousehold',

		//简版库存预定列表查询
		simpleBillReserveList: port + 'simpleBillReserve/list',

		//申请开通最简版企业
		simpleCompanyApplyAdd: pcHost + 'simpleCompany/applyAdd',
		//删除申请企业认证成功后，首次进入我的库存弹窗提醒
		delApplySuccessToast: port + 'company/certification/delApplySuccessToast',
		//库存相关接口
		//手动添加库存
		stockAdd: port + 'stock/add',
		//excel导入库存
		stockImport: port + 'stock/import',
		//编辑库存
		stockModify: port + 'stock/modify',
		//上传到云库存
		stockPublishMarket: port + 'stock/publishMarket',
		//库存的票号列表；（库存列表使用查看票号列表）
		stockTicketNumberList: port + 'stock/ticketNumber/list',
		//查询已到期票据
		stockGetOverDueTicket: port + 'stock/getOverDueTicket',

		//获取交易户list 不分页
		listTradingHouseholdsNoPage: port + 'tradingHouseholds/listTradingHouseholdsNoPage',
		//根据绑定的id获取票号集合（预订和待出库使用查看票号列表）
		listTicketNoByBindingId: port + 'ticketNumber/listTicketNoByBindingId',
		//获取该出库人这条库存可出库票号集合（出库列表打开可选票号列表）
		listTicketNoByRepertoryId: port + 'ticketNumber/listTicketNoByRepertoryId',
		//获取该条库存可预订票号集合
		listTicketNoForReserve: port + 'ticketNumber/listTicketNoForReserve',
		//简版库存待出库/出库/预订（库存字段beforeVersion=0 使用）
		addReserveAndWait: port + 'simpleBillReserve/addReserveAndWait',

		//修改企业
		simpleCompanyEdit: pcHost + 'simpleCompany/edit',
		//当前用户开通的简版企业详情
		simpleCompanyMyDetail: pcHost + 'simpleCompany/myDetail',
		//个人头像上传签名 公司logo
		getOssSTSHeaderPicSign1: pcHost + 'oss/getOssSTSHeaderSign',
		//图片上传签名 通用接口
		getOssSTSSign: port + 'oss/getSTSSign',
		//个人微信二维码图片上传签名 微信二维码
		getOssSTSWeChatQRCodesSign: port + 'oss/getOssSTSWeChatQRCodesSign',

		//简化版库存相关接口
		//简版库存进销存导出
		simpleBillRepertoryExportInOutLog: pcHost + 'simpleBillRepertory/exportInOutLog',
		//获取简版库存批量出库列表
		simpleBillRepertoryGetOutStockList: port + 'simpleBillRepertory/getOutStockList',
		//简化版票据出库(批量)
		simpleBillRepertoryOutStockList: pcHost + 'simpleBillRepertory/outStockList',
		//检测用户是否是简版公司员工
		simpleCompanyIsEmployee: pcHost + 'simpleCompany/isEmployee',
		//自动带出购入人/出库人姓名
		autoReturnEmployeeNameByPhone: port + 'simpleBillRepertory/listEmployeeNameByUserId',

		//新的简版库存进销存导出
		simpleExportInOutLog: pcHost + 'simpleBillRepertory/exportInOutLog',
		//简版库存 进销存每日统计
		queryInOutPerDay: pcHost + 'simpleBillRepertory/queryInOutPerDay',
		//简版库存 进销存今日统计
		queryInOutToday: pcHost + 'simpleBillRepertory/queryInOutToday',
		//简版库存解锁
		openBillLock: port + 'simpleBillRepertory/openBillLock',
		//pc新的图片上传
		openGetOssSTSBillShareSign: pcHost + 'oss/getOssSTSBillShareSign',
		//新增缺失银行
		addLoseBank: port + 'simpleBillRepertory/addLoseBank',
		//查询剩余天数
		getRemainDays: port + 'simpleBillRepertory/getRemainDays',

		//获取简版库存图片图片的接口
		simpleGetPic: port + 'simpleBillPic/getPic',

		//获取简版库存图片上传所需oss字段

		getOssSTSHeaderSign: pcHost + 'oss/getOssSTSTicketSign',

		//发布票据接口
		saveBillForPc: market + 'pc/billOrder/saveBillForPc',
		//消息列表
		queryMessageList: pcHost + 'message/queryMessageList',
		//标记消息为已读
		signMessageToRead: pcHost + 'message/signMessageToRead',

		//获取企业状态信息
		getWFAuth: pcHost + 'personalCenter/getWFAuth',
		//账户认账状态
		getPackHouseInfo: pcHost + 'personalCenter/getPackHouseInfo',
		//获取对外公司信息
		getCompanyTradeHouseInfoIsOpen: port + 'companyCaApply/getCompanyCaApplyIsOpen',
		//获取待开账户列表

		getCompanyCaApplyList: pcHost + 'personalCenter/getCompanyCaApplyList',
		//设置对外公司
		setIsOpen: port + 'companyCaApply/setIsOpen',
		//查看是否有企业邀请用户加入
		getJoinInfo: pcHost + 'personalCenter/getJoinInfo',
		//企业认证步骤（提交数据）
		//第一步
		companyCaStep1ApplyNext: pcHost + 'companyCaApply/companyCaStep1ApplyNext',
		//第二步
		companyCaStep2ApplyNext: pcHost + 'companyCaApply/companyCaStep2ApplyNext',
		//第三步
		companyCaStep3ApplyNext: pcHost + 'companyCaApply/companyCaStep3ApplyNext',
		//企业认证步骤（获取数据）
		//第一步
		getCompanyCaStep1Applyinfo: pcHost + 'companyCaApply/getCompanyCaStep1Applyinfo',
		//第二步
		getCompanyCaStep2Applyinfo: pcHost + 'companyCaApply/getCompanyCaStep2Applyinfo',
		//第三步
		getCompanyCaStep3Applyinfo: pcHost + 'companyCaApply/getCompanyCaStep3Applyinfo',
		//查看合同（企业签署授权协议）
		companyAuthorization: pcHost + 'companyCaApply/companyAuthorization',

		//获取（更换经办人手机号码）验证码
		sendPcChangeHandlerPhoneCode: loginport + 'sendPcChangeHandlerPhoneCode',
		//更换经办人手机号码
		updateHandlerPhone: port + 'companyCaApply/updateHandlerPhone',
		//获取修改密码短信验证码接口
		sendPcUpdatePwdCode: loginport + 'sendPcUpdatePwdCode',
		//pc端修改密码接口
		updatePcPwd: loginport + 'updatePcPwd',
		//修改用户号
		modifyAccount: loginport + 'sso/modifyAccount',

		// 获取（更换绑定手机）验证码
		sendPcChangeBundlePhoneCode: loginport + 'sso/sendSmsCode4ModifyMobile',
		modifyMobile: loginport + 'sso/modifyMobile',
		//图片验证码
		verifyCode: loginport + 'verifyCode',
		//获取图形验证码的token
		isVerifyCode: loginport + 'isVerifyCode',

		//获取兴业执剑人代管系统url
		getYtjLoginUrl: pcHost + 'personalCenter/getYtjLoginUrl',

		//我的卖票列表
		// listMyBillTicket: market + 'billOrder/listMyBillTicket',
		listMyBillTicket: market + 'billOrder/listMyBillTicketV286',

		//获取发布信息详情
		// getBillTicket: market + 'billOrder/getBillTicketV282',
		getBillTicket: market + 'billOrder/getBillTicketV286',
		//订单管理-审核不过状态修改订单-获取修改状态
		getUpdateStatus: market + 'billOrder/checkFailureOrder/getUpdateStatus',
		//订单管理-交易失败(手动取消、自动过期、交易失败)订单发布-获取可操作状态
		getPublishStatus: market + 'billOrder/tradeFailureOrder/getPublishStatus',

		//获取当前是否有交易户
		checkTradeHouse: port + 'companyCaApply/checkTradeHouse',
		//pc端获取我的卖票历史记录
		listMyHistoryBillTicketForPc: market + 'pc/billOrder/listMyHistoryBillTicketForPc',

		//手动将发布信息置为交易完成状态
		finishBill: market + 'billOrder/finishBill',
		//手动将发布信息置为交易失效状态
		cancelBill: market + 'billOrder/cancelBill',

		//不修改重新发布
		billPublish: market + 'billOrder/billPublish',
		//修改发布票据的交易方式
		updateBillWithTransDetails: market + 'billOrder/updateBillWithTransDetails',
		//修改交易失败的票据并重新发布
		updateBillAndPublish: market + 'billOrder/updateBillAndPublish',
		//修改审核失败的票据
		updateBillWithCheckFailure: market + 'billOrder/updateBillWithCheckFailure',

		//交易订单相关接口
		//同意交易接口
		agreeBillTrade: market + 'billTrade/agreeBillTrade',
		//买卖双方取消交易/拒绝交易接口
		cancelTradeOrder: market + 'billTrade/cancelTradeOrder',
		//获取交易订单详情接口
		getBillTrade: market + 'billTrade/getBillTradeV286',
		//票据的交易订单付款链接url查询接口
		getBillTradePayUrl: market + 'billTrade/getBillTradePayUrl',
		//获取发起交易订单详情接口  废弃
		getInitiateBillTradeDetail: market + 'billTrade/getInitiateBillTradeDetailV282',
		//获取电票交易电子协议url
		getTradeAgreementUrl: market + 'billTrade/getTradeAgreementUrlV282',
		//新增交易订单接口
		insertBillTrade: market + 'billTrade/insertBillTrade',
		//获取电票交易订单状态轨迹接口
		// listBillTradeOrbit: market + 'billTrade/listBillTradeOrbit',
		listBillTradeOrbit: market + 'billTrade/listBillTradeOrbit',
		//买方确认付款接口
		confirmPayForPc: market + 'pc/billTrade/confirmPayForPc',
		//确认背书接口
		confirmReciteForPc: market + 'pc/billTrade/confirmReciteForPc',
		//买方确认签收接口
		confirmSignForPc: market + 'pc/billTrade/confirmSignForPc',
		//获取我的交易订单列表接口
		listTradeOrderForPc: market + 'pc/billTrade/listTradeOrderForPc',

		//报价信息相关接口
		//获取报价订单详情接口
		// getBillQuote: market + 'billQuote/getBillQuote',
		getBillQuote: market + 'billQuote/getBillQuoteV286',
		//获取我的报价接口
		// listMyBillQuote: market + 'billQuote/listMyBillQuote',
		listMyBillQuote: market + 'billQuote/listMyBillQuoteV286',
		//修改报价信息接口
		updateBillQuote: market + 'billQuote/updateBillQuoteV282',

		//获取报价历史接口
		listMyHistoryBillQuoteForPc: market + 'pc/billQuote/listMyHistoryBillQuoteForPc',

		//个人中心基本信息
		getUserInfoPc: apiport + 'personalCenter/getUserInfo',
		//基本信息-保存交一偏好
		updateUserLabel: apiport + 'userInfo/updateUserLabel',
		//简版企业详情
		simpleCompanyDetail: pcHost + 'simpleCompany/detail',

		//获取红点未读消息列表
		pcgetWaitHandleStatus: pcHost + 'personalCenter/getWaitHandleStatus',

		//获取卖票和报价数量
		getBillOrderAndQuoteNum: market + 'billOrder/getBillOrderAndQuoteNum',
		//获取兴业账户列表
		getCompanyTradeHouseList: pcHost + 'personalCenter/getCompanyTradeHouseList',

		//判断当前登录用户是否简版员工
		checkEmployeeType: port + 'bm/companyEmployee/check/EmployeeType',
		//获取服务器时间
		// getServerTime:market+"util/getServerTime"

		//易签相关接口
		//易签导出到Excel
		exportListTicketAssignByPage: yiqianUrl + 'ticketAssign/exportListTicketAssignByPage',
		//查询
		ticketAssignListTicket: yiqianUrl + 'ticketAssign/listTicket',
		//删除
		ticketAssignDel: yiqianUrl + 'ticketSign/delBill',
		//批量删除
		ticketAssignBatchDel: yiqianUrl + 'ticketSign/batchDelTicketAssigns',
		//查询异常数据
		queryExceptionTicket: yiqianUrl + 'ticketAssign/queryExceptionTicket',
		//没有检查函数的查询易签银行
		getAllTicketBankInfos: yiqianUrl + 'ticketBank/getAllTicketBankInfos',
		//易签的下载
		upgradeInfo: yiqianUrl + 'system/upgradeInfo',
		//分页查询黑名单企业平台
		queryBlackCompanyPlatforms: yiqianUrl + 'blackCompany/queryBlackCompanyPlatforms',
		// 入库接口
		yiqianInStorage: yiqianUrl + 'ticketSign/submitBill',

		//添加黑名单企业
		addBlackCompany: yiqianUrl + 'blackCompany/addBlackCompany',
		//删除黑名单企业
		deleteBlackCompany: yiqianUrl + 'blackCompany/deleteBlackCompany',
		//分页查询黑名单企业
		queryBlackCompanys: yiqianUrl + 'blackCompany/queryBlackCompanys',

		//添加拦截的票号
		addInterceptTicket: yiqianUrl + 'interceptTicket/addInterceptTicket',
		//删除拦截的票号
		deleteInterceptTicket: yiqianUrl + 'interceptTicket/deleteInterceptTicket',
		//分页查询拦截票
		queryInterceptTicket: yiqianUrl + 'interceptTicket/queryInterceptTicket',

		//添加敏感行业
		addSensitiveIndustry: yiqianUrl + 'sensitiveIndustry/addSensitiveIndustry',
		//删除敏感行业
		deleteSensitiveIndustry: yiqianUrl + 'sensitiveIndustry/deleteSensitiveIndustry',
		//分页查询敏感行业
		querySensitiveIndustry: yiqianUrl + 'sensitiveIndustry/querySensitiveIndustry',

		//添加本公司交易用户
		addTradeCompany: yiqianUrl + 'tradeCompany/addTradeCompany',
		//删除本公司交易用户
		deleteTradeCompany: yiqianUrl + 'tradeCompany/deleteTradeCompany',
		//分页查询本公司交易用户
		queryTradeCompanys: yiqianUrl + 'tradeCompany/queryTradeCompanys',

		//添加黑名单银行
		addBlackBank: yiqianUrl + 'blackBank/addBlackBank',
		//删除黑名单银行
		deleteBlackBank: yiqianUrl + 'blackBank/deleteBlackBank',
		//分页查询黑名单银行
		queryBlackBanks: yiqianUrl + 'blackBank/queryBlackBanks',

		//待出库完成出库
		waitOutComplete: port + 'simpleBillReserve/waitOutComplete',

		//获取当前用户的认证类型
		basicStatusInfo: port + 'user/basicStatusInfo',
		//企业认证申请提交资料
		submitInfo: port + 'company/certification/submitInfo',
		//电子开户提交资料
		electronicSubmitInfo: port + 'company/electronicAccount/submitInfo',
		//交易账户列表
		getCompanyCaApplyInfoList: port + 'companyCaApply/listCompanyCaApply',
		//查看合同（企业签署授权协议）
		electronicAuthorization: port + 'company/electronicAccount/companyAuthorization',
		//小款验证
		smallAmountVal: port + 'company/electronicAccount/smallAmountVal',
		// 根据开户行全称模糊查询匹配的开户支行行号列表
		queryBankLineNoByBankName: port + 'listAcceptHouseNo',
		// 获取众邦打款码
		getPaymentCode: port + 'company/paymentCode',
		getPaymentCodeInfo: port + 'company/transferAccountInfo',

		//估价相关
		//报价企业管理接口
		//根据id删除企业
		delQuoteCompany: assessUrl + 'quoteCompany/del',
		///新增报价企业
		insertQuoteCompany: assessUrl + 'quoteCompany/insert',
		//查询报价企业列表
		listQuoteCompany: assessUrl + 'quoteCompany/list',
		//修改报价企业
		updateQuoteCompany: assessUrl + 'quoteCompany/update',

		//瑕疵信息接口
		//根据id删除瑕疵
		delflaw: assessUrl + 'flaw/del',
		//新增瑕疵信息和明细
		insertflaw: assessUrl + 'flaw/insert',
		//根据id查询瑕疵及其明细
		selectflaw: assessUrl + 'flaw/select',
		//根据瑕疵id更新瑕疵信息及其明细
		updateflaw: assessUrl + 'flaw/update',

		//删除承兑类别
		deleteAsAcceptItem: assessUrl + 'acceptItem/deleteAsAcceptItem',
		//根据承兑类别名称id展示全部的承兑类型明细（国股，大商等）
		listAsAcceptItemsAcceptTypes: assessUrl + 'acceptItem/listAsAcceptItemsAcceptTypes',
		//选择银行-展示相应承兑类别下银行明细
		listPreSelectedAsAcceptItemBanks: assessUrl + 'acceptItem/listPreSelectedAsAcceptItemBanks',
		///新增承兑类别
		saveAsAcceptItem: assessUrl + 'acceptItem/saveAsAcceptItems',

		//删除承兑类别名称
		deleteAsAcceptType: assessUrl + 'acceptType/deleteAsAcceptType',
		//查询全部承兑类别名称
		listAsAcceptType: assessUrl + 'acceptType/listAsAcceptType',
		//新增承兑类别名称
		saveAsAcceptType: assessUrl + 'acceptType/saveAsAcceptType',
		//更新承兑类别名称
		updateAsAcceptType: assessUrl + 'acceptType/updateAsAcceptType',

		//返回承兑银行
		queryAllAsCategoryBankBasis: assessUrl + 'bank/queryAllAsCategoryBankBasis',
		//返回承兑银行
		queryAllAsCategoryBankCustoms: assessUrl + 'bank/queryAllAsCategoryBankCustoms',
		//更新承兑银行
		updateAsCategoryBankCustom: assessUrl + 'bank/updateAsCategoryBankCustom',

		//返回全部承兑类型
		listAllAsCategoryBasics: assessUrl + 'category/listAllAsCategoryBasics',

		//利率价和货款价表头/上传记录相关接口
		//删除表头
		deletecollectRecord: assessUrl + 'collectRecord/delete',
		//获取表头详情
		getcollectRecord: assessUrl + 'collectRecord/get',

		//根据记录表头id得到货款票详情
		getAsGoodsQuoteDetail: assessUrl + 'collectRecord/getAsGoodsQuoteDetail',
		//添加表头
		insertcollectRecord: assessUrl + 'collectRecord/insert',
		//启用、停用功能
		isEnabledcollectRecord: assessUrl + 'collectRecord/isEnabled',

		//查询表头/上传记录 列表
		listcollectRecord: assessUrl + 'collectRecord/list',
		//启查询上传人列表
		listEmpcollectRecord: assessUrl + 'collectRecord/listEmp',
		///编辑表头
		updatecollectRecord: assessUrl + 'collectRecord/update',

		//利率价上传相关接口
		//根据主键id删除利率报价记录
		interestQuoteDeleteList: assessUrl + 'interestQuote/deleteList',
		//新增，更新利率价前调用，利率价上传判断重复记录
		interestQuoteForIsRepeat: assessUrl + 'interestQuote/forIsRepeat',
		//新增/更新时，去查看重复报价详情
		getRepeatDetails: assessUrl + 'interestQuote/getRepeatDetails',
		//添加单笔利率价
		insertinterestQuote: assessUrl + 'interestQuote/insert',
		//添加利率价表（多笔）
		insertListinterestQuote: assessUrl + 'interestQuote/insertList',
		//查询利率报价
		listinterestQuote: assessUrl + 'interestQuote/list',
		//新增/更新时，去查看重复报价
		listRepeatinterestQuote: assessUrl + 'interestQuote/listRepeat',
		//修改利率报价
		updateinterestQuote: assessUrl + 'interestQuote/update',
		//修改利率报价表
		updateListinterestQuote: assessUrl + 'interestQuote/updateList',

		//估价基础价格上传记录信息接口
		//新增/修改 估价基础价格上传记录信息
		insertAndUpdate: assessUrl + 'basisPriceCollectRecord/insertAndUpdate',
		//根据主键id启用/停用基础标价表
		isEnabled: assessUrl + 'basisPriceCollectRecord/isEnabled',
		//根据主键id添加/修改备注
		basisPriceCollectRecordUpdateComments: assessUrl + 'basisPriceCollectRecord/updateComments',
		//报价配置-货款价相关接口
		//根据主键id删除报价配置-货款价记录
		basisPriceGoodsDeleteList: assessUrl + 'basisPriceGoods/deleteList',
		//查询报价配置-货款价表
		basisPriceGoodslist: assessUrl + 'basisPriceGoods/list',
		//修改报价配置-货款价表
		basisPriceGoodsSaveList: assessUrl + 'basisPriceGoods/saveList',
		//查询报价配置表头信息
		getbasisRecord: assessUrl + 'basisPriceCollectRecord/selectByOwnerId',
		//货款票基础价格表启用、停用功能
		enabledBasisPriceGoodscollectRecord: assessUrl + 'basisPriceCollectRecord/isEnabled',
		// 货款票表头信息获取
		basisPriceGoodscollectRecord: assessUrl + 'basisPriceCollectRecord/selectByOwnerId',

		//基础利率价信息相关接口
		//根据主键id删除基础利率报价记录
		basisPriceInterestDeleteList: assessUrl + 'basisPriceInterest/deleteList',
		//添加基础利率价表
		basisPriceInterestinsert: assessUrl + 'basisPriceInterest/insert',
		//查询基础利率
		basisPriceInterestlist: assessUrl + 'basisPriceInterest/list',
		//修改基础利率
		basisPriceInterestupdate: assessUrl + 'basisPriceInterest/update',

		//票据询价相关接口
		//获取询价结果详情接口
		getBillAssessDetail: assessUrl + 'assess/billAssess/getBillAssessDetail',
		//获取询价结果h5分享详情接口
		getBillAssessShareDetail: assessUrl + 'assess/billAssess/getBillAssessShareDetail',
		//获取询价结果列表接口
		listBillAssess: assessUrl + 'assess/billAssess/listBillAssess',
		//询价相关举报相关接口
		//新增举报信息
		insertReportRecord: assessUrl + 'category/insertReportRecord',
		//获取货款票详情
		getAsGoodQuoteDetailById: assessUrl + 'goodsQuote/getAsGoodQuoteDetailById',
		//上传记录统计详情列表
		listDetailscollectRecord: assessUrl + 'collectRecord/listDetails',
		//上传记录统计
		listtotalcollectRecord: assessUrl + 'collectRecord/listtotal',

		//根据承兑类别名称id展示全部（国股，大商等）id集合
		listFirstCategoryNumberByAcceptTypeId: assessUrl + 'acceptItem/listFirstCategoryNumberByAcceptTypeId',
		//根据承兑人名称id与承兑类型id查看承兑人明细
		listAsAcceptItemsAcceptTypeBanks: assessUrl + 'acceptItem/listAsAcceptItemsAcceptTypeBanks',
		//返回反选银行
		banklistByBankId: assessUrl + 'bank/listByBankId',

		//更新承兑类别-单笔报价
		updateAsAcceptItemSingle: assessUrl + 'acceptItem/updateAsAcceptItemSingle',
		//新增承兑类别-单笔报价
		saveAsAcceptItemSingle: assessUrl + 'acceptItem/saveAsAcceptItemSingle',

		//simon 添加
		//货款价上传查询接口
		collectRecordList: assessUrl + 'collectRecord/list',
		//添加货款票
		insertAsCollectRecordForAsGoodsQuote: assessUrl + 'collectRecord/insertAsCollectRecordForAsGoodsQuote',
		//根据id查询货款票
		getAsGoodsQuoteDetails: assessUrl + 'collectRecord/getAsGoodsQuoteDetails',
		//新增货款票判重
		judgeInsertAsCollectRecordForAsGoodsQuote:
			assessUrl + 'collectRecord/judgeInsertAsCollectRecordForAsGoodsQuote',
		//修改货款票判重
		judgeupdateAsCollectRecord: assessUrl + 'collectRecord/judgeupdateAsCollectRecord',
		//修改货款票
		updateAsCollectRecord: assessUrl + 'collectRecord/updateAsCollectRecord',
		//停启用货款票
		isollectRecordEnabled: assessUrl + 'collectRecord/isEnabled',
		//删除
		deleteCollectRecord: assessUrl + 'collectRecord/delete',
		//新增承兑类别-多笔报价
		saveAsAcceptItemMany: assessUrl + 'acceptItem/saveAsAcceptItemMany',
		//查询报价配置-动态获取货款票标准金额价格表的票面金额列表
		listBasisPriceGoodsAmountLimit: assessUrl + 'basisPriceGoods/listBasisPriceGoodsAmountLimit',
		//默认得到全部承兑类型
		saveDefaltCategories: assessUrl + 'acceptItem/saveDefaltCategories',
		//新的根据承兑人名称获取相关信息
		getListByBankNameWithToken: assessUrl + 'assess/billAssess/getListByBankNameWithToken',
		//检查企业是否被锁定
		checkBillLock: port + 'simpleCompany/checkBillLock',
		//检测购入价是否被修改，如修改并且已有出库记录给出提示
		checkBuyValueModified: port + 'simpleBillRepertory/checkBuyValueModified',
		//编辑承兑类别对应的银行
		updateAsAcceptItem: assessUrl + 'acceptItem/updateAsAcceptItem',

		//承兑类别模版相关操作接口
		//获取承兑类别模版列表接口
		listAcceptTemplate: assessUrl + 'acceptTemplate/listAcceptTemplate',
		//获取承兑类别的承兑人明细-承兑类别查看
		templateListAsAcceptItemSelected: assessUrl + 'template/listAsAcceptItemSelected',
		//根据承兑类别名称id展示全部（国股，大商等）id集合
		listFirstCategoryNumberBytemplateId: assessUrl + 'template/listFirstCategoryNumberBytemplateId',
		//编辑模板承兑类别对应的银行
		updateTemplateItem: assessUrl + 'template/updateTemplateItem',
		//根据id删除瑕疵
		delTemplate: assessUrl + 'template/delTemplate',
		//模板选择银行-展示相应模板下银行明细
		listPreSelectedAsTemplateBanks: assessUrl + 'template/listPreSelectedAsTemplateBanks',
		//将模板中的信息添加到类别表中
		saveTemplateForAcceptType: assessUrl + 'template/saveTemplateForAcceptType',
		//模板返回反选银行
		templateListByBankId: assessUrl + 'template/listByBankId',
		//新增复制的上传报价
		insertCopyRecord: assessUrl + 'collectRecord/insertCopyRecord',
		//询价联系相关接口
		//查询询价联系人
		selectContactRecord: assessUrl + 'contactRecord/select',
		//修改询价联系人
		updateContactRecord: assessUrl + 'contactRecord/update',

		//询价权限接口
		checkAssessEmployeeStatus: assessUrl + 'assess/billAssess/checkAssessEmployeeStatus',

		//进销存相关
		//客户管理相关接口
		//客户管理--新增/编辑客户
		addOrUpdateCustomer: port + 'billCustomerManagement/addOrUpdateCustomer',
		//客户管理--批量修改归属客户
		batchUpdateCustomerAscription: port + 'billCustomerManagement/batchUpdateCustomerAscription',
		//客户管理--合并客户
		customerMerge: port + 'billCustomerManagement/customerMerge',
		//客户管理--获取本公司所有正常客户列表（未分页）归属公司查询
		getCustomerList: port + 'billCustomerManagement/getCustomerList',
		//客户管理--通过id列表批量获取客户
		getCustomerListByIds: port + 'billCustomerManagement/getCustomerListByIds',
		//客户管理--分页获取本公司所有客户列表
		getCustomerListWithPage: port + 'billCustomerManagement/getCustomerListWithPage',
		//客户管理--按条件分页获取本公司所有客户列表
		getCustomerListByQueryWithPage: port + 'billCustomerManagement/getCustomerListByQueryWithPage',

		//客户管理--验证导出客户报表
		customerExportCheck: port + 'billCustomerManagement/customerExportCheck',
		//客户管理--导出客户报表
		customerExport: port + 'billCustomerManagement/customerExport',

		//报价使用率相关接口
		//查询使用率大于0的利率价
		getInterestQuoteByusageRate: assessUrl + 'interestQuote/getInterestQuoteByusageRate',
		//查询使用率大于0的货款价
		getGoodsQuoteByusageRate: assessUrl + 'goodsQuote/getGoodsQuoteByusageRate',

		/* 交易户管理 */
		// 获取交易户管理页面列表
		getAccountList: port + 'tradingHouseholds/listTradingHouseholds',
		// 新增or编辑交易户基本信息
		insertOrUpdateAccount: port + 'tradingHouseholds/addAndUpdate',
		// 获取交易户管理页面具体开户列表
		getAccountTargetList: port + 'tradingHouseholds/listApplyInfo',
		// 获取交易户详情
		getAccountInfo: port + 'tradingHouseholds/getTradingHousehold',
		// 获取申请详情（可以调此接口获取申请的交易户详情）
		getAccountTargetInfo: port + 'tradingHouseholds/getApplyinfo',
		// 京东开户前账号注册
		registerJd: port + 'certificationJD/register',
		// 查询京东是否授权
		queryJdAuthReady: port + 'companyCaApplyBankInfo/queryAccountAuth',
		// 重新发起京东打款申请
		applyReValidBank: port + 'company/jdCardBind/reVerifyBankAccount4JD',
		// 删除交易户
		deleteAccount: port + 'tradingHouseholds/deleteById',
		// 获取是否可以前往开户
		getCanGoOpenAccount: port + 'tradingHouseholds/checkOpenAccount',

		// 多账户相关
		// 交易户停用启用
		stopOrOpenTradeHouse: port + 'companyCaApply/stopOrOpenTradeHouse',
		// 交易户余额查询
		getRemainMoney: port + 'companyCaApply/getTradeHouseBalanceEnquiry',
		// 获取该银行账号的余额
		getBankRemainMoney: port + 'company/balanceEnquiry',
		// 获取交易户银行卡信息
		getApplyBankInfo: port + 'companyCaApplyBankInfo/list',
		// 获取指定交易户可交易的银行卡列表
		getCanDealBankList: port + 'companyCaApplyBankInfo/bankAccountOpenedList',
		// 查询交易户是否可以添加银行卡
		queryCanAddBank: port + 'companyCaApplyBankInfo/preAdd',
		// 更新银行卡
		updateBankInfo: port + 'company/multiAccount/updateBankInfoType',
		// 重新提交银行卡
		reopenBank: port + 'company/multiAccount/reOpenAccount',
		// 添加银行卡
		insertBankInfo: port + 'company/multiAccount/submitInfo',
		// 多账户xy小额验证
		multiAccountSmallPriceVaild: port + 'company/multiAccount/smallAmountVal',
		// 多账户jd小额验证
		multiAccountSmallPriceVaildJD: port + 'company/jdCardBind/smallAmountVal',
		// 获取已开户的交易户列表
		getCanDealTradeHouse: port + '/companyCaApply/listCaApplyBank',
		// 获取银行账号详情
		getBankInfo: port + 'companyCaApplyBankInfo/bankNoDetail',
		getBankApplyInfo: port + 'company/multiAccount/detail',

		//获取当天所有未读消息
		getDayMessageList: port + 'message/node/list',

		//进销存相关api
		//进销存数据分表初始化
		simpleBillRepertoryInit: port + 'simpleBillRepertory/init',
		//进销存查询 入库 出库 全部
		simpleBillRepertoryListByScreening: port + 'billInOut/listByScreening',
		//进销存 我的预订，我的待出库查询
		simpleBillReserveListByScreening: port + 'simpleBillReserve/listByScreening',
		//获取操作人员列表
		listEmpForInOutLog: port + 'billInOut/listEmpForInOutLog',
		//进销存 每日统计，包含时段库存、时点库存
		simpleBillQueryInOutPerDay: port + 'billInOut/queryInOutPerDay',
		//进销存 今日统计
		simpleBillQueryInOutToday: port + 'simpleBillRepertory/queryInOutToday',
		//进销存我的入库编辑
		updateSimpleBillInLog: port + 'billInOut/updateSimpleBillInLog',
		//进销存我的出库编辑
		updateSimpleBillOutLog: port + 'billInOut/updateSimpleBillOutLog',
		//时段库存明细列表查询
		listRepertoryForTimePeriod: port + 'billInOut/listRepertoryForTimePeriod',
		//时段库存明细 详情
		repertoryDetailForTimePeriod: port + 'billInOut/repertoryDetailForTimePeriod',
		//时段库存查看票面
		getPic4InOut: port + 'simpleBillPic/getPic4InOut',

		//各种报表导出相关接口

		//验证进销存查询报表导出

		exportByTypeCheck: port + 'billInOutExport/exportByTypeCheck',
		//进销存查询报表导出
		billInOutExportExportByType: port + 'billInOutExport/exportByType',

		//导出我的库存报表
		billInOutExportExportCurrentRepertory: port + 'billInOutExport/exportCurrentRepertory',

		//库存分享配置相关api
		//获取库存配置，没有时新增一条默认值
		getRepertoryConfigure: port + 'billRepertory/configure',
		//更新库存配置
		updateRepertoryConfigure: port + 'billRepertory/configure/update',

		//京东开户相关api
		//京东开户 获取京东钱包协议url
		getJDWalletAgreement: port + 'certificationJD/getJDWalletAgreement',
		//京东开户 根据支付工具查询渠道发卡机构列表,目前默认传 03
		queryAllByPI: port + 'certificationJD/queryAllByPI',
		//京东开户 根据城市id、银行编码和银行简码查询联行信息
		queryByCityAndBank: port + 'certificationJD/queryByCityAndBank',
		//京东开户 根据省份id查询城市信息
		queryCityByProvince: port + 'certificationJD/queryCityByProvince',
		//京东开户 全量查询省份信息
		queryProvince: port + 'certificationJD/queryProvince',
		//京东开户前账号注册
		realNamePayCheckMoney: port + 'certificationJD/realNamePayCheckMoney',
		//京东开户资料提交
		certificationJDSubmitInfo: port + 'certificationJD/submitInfo',
		//查询是否同意协议
		queryIsApply: port + 'certificationJD/queryIsApply',
		//ocr图片识别接口
		//证件类图片识别接口
		recognizeCompany: ocrPort + 'ocr/company',

		// 获取云库存详情
		// getCloudStockDetail: port + 'cloudStock/detail',
		getCloudStockDetail: market + 'billOrder/getBillTicketV286',
		// 获取交易户
		getTradeCompanys: port + 'simpleBillReserve/getTradeCompanys',

		//询价查询云库存
		//询价结果为空时, 获取推荐企业
		listAssessViewCompany: assessUrl + 'assess/billAssess/listAssessViewCompany',
		//插入云库存（task任务）
		addCloudStock: assessUrl + 'assess/cloudStock/addCloudStock',
		//导出云库存询价信息
		exportCloudStockInfo: assessUrl + 'assess/cloudStock/exportCloudStockInfo',
		//获取云库图片存询价分享url
		getCloudStockImgByShareUrl: assessUrl + 'assess/cloudStock/getCloudStockImgByShareUrl',
		//获取云库存文字询价分享url
		getCloudStockTxtByShareUrl: assessUrl + 'assess/cloudStock/getCloudStockTxtByShareUrl',
		//获取分享后的信息
		getcloudStockShare: assessUrl + 'assess/cloudStock/getcloudStockShare',
		//查询云库存询价结果
		selectcloudStock: assessUrl + 'assess/cloudStock/select',
		//查询task状态
		selectStauts: assessUrl + 'assess/cloudStock/selectStauts',

		// 财务日报相关接口
		//获取银行存款、库存明细
		getAccountAmountList: port + 'financialAccountAmount/list',

		//新增财务报表
		addFinancialDailyLog: port + 'financialDailyLog/addFinancialDailyLog',
		//新增期初数据
		addInitialData: port + 'financialDailyLog/addInitialData',
		//根据操作员工和时间统计进销存记录
		countInOut: port + 'financialDailyLog/countInOut',
		//导出指定财务日报报表（导出）
		exportDailyLog: port + 'financialDailyLog/exportDailyLog',
		//查看财务日报详情（编辑）
		getDailyLogDetail: port + 'financialDailyLog/getDailyLogDetail',
		// 查看月汇总
		getMonthRecord: port + 'financialDailyLog/getMonthCount',
		// 月汇总-查看本月利润统计明细
		getMonthProfitDetail: port + 'financialDailyLog/getMonthProfitDetail',
		//查看本公司财务日报期初数据（开账数据）
		getPrimData: port + 'financialDailyLog/getPrimData',
		//获取不平账原因
		getUnbalancedReason: port + 'financialDailyLog/getUnbalancedReason',
		//分页查询财务日报记录
		listFinancialDailyLogByQuery: port + 'financialDailyLog/listFinancialDailyLogByQuery',
		//添加日报时投资款项-编辑明细
		listInvestmentFunds: port + 'financialDailyLog/listInvestmentFunds',
		//截止昨日累计利润查看明细
		listdailyProfit: port + 'financialDailyLog/listdailyProfit',
		//截止昨日累计其他利润-查看明细
		otherProfitDetails: port + 'financialDailyLog/otherProfitDetails',
		//根据新增时日报日期获取新增需要的相关数据
		queryDailyDataForAdd: port + 'financialDailyLog/queryDailyDataForAdd',
		//重新记账
		dailyReBooking: port + 'financialDailyLog/reBooking',
		//编辑财务报表
		updateFinancialDailyLog: port + 'financialDailyLog/updateFinancialDailyLog',
		// 获取所有有财务日报的月份列表
		getLogMonths: port + 'financialDailyLog/getLogMonths',

		// 分页查询财务日报中各个其他款项列表
		getListFinancialOtherFund: port + 'financialOtherFund/listFinancialOtherFund',
		//新增财务日报的时候银行存款编辑明细查询
		getQueryDailyDataForAdd: port + 'financialDailyLog/queryDailyDataForAdd',

		// 添加日报时投资款项-编辑明细
		getListInvestmentFunds: port + 'financialDailyLog/listInvestmentFunds',
		/*权限重构相关*/
		// 获取所有权限列表
		getAllPermission: port + 'sys/permission/list',
		// 获取用户权限列表
		getUserPermission: port + 'sys/permission/listByUser',

		//秒贴相关接口
		// 获取秒贴企业列表
		getBankDiscount: discountPort + 'bankDiscount/companyBaseInfoPage',
		// 根据id查询开户企业、高管、受益人、股东信息
		selectByIdBankDiscount: discountPort + 'bankDiscount/selectById',
		// 修改银行开户信息
		updateCompanyInfoBankDiscount: discountPort + 'bankDiscount/updateCompanyInfo',
		//秒贴省市区信息相关接口
		//根据code查询所有城市列表
		selectAreaByCodeBankDiscount: discountPort + 'bankDiscount/selectAreaByCode',
		//查询所有等级为4的市区
		selectAllCityBankDiscount: discountPort + 'bankDiscount/selectAllCity',
		//根据上级查询区
		selectDistrictBankDiscount: discountPort + 'bankDiscount/selectDistrict',
		//查询上级查询市
		selectCityBankDiscount: discountPort + 'bankDiscount/selectCity',
		//查询所有省
		selectProvinceBankDiscount: discountPort + 'bankDiscount/selectProvince',
		// 模糊查询国际行业分类根据code查询名称
		getIndustryValByCode: discountPort + 'category/selectNameByCode',
		// 查询行业类别信息
		getIndustry: discountPort + 'category/selectAllIndustry',
		//删除当前企业缓存
		deleteRedisBankDiscount: discountPort + 'bankDiscount/deleteRedis',

		// 获取秒贴订单列表
		getOrderInfo: discountPort + 'orderInfo/list',
		// 获取秒贴订单列表详情
		getOrderInfoDetail: discountPort + 'orderInfo/getOrderInfo',
		// 获取打印凭证
		getDiscountVoucher: discountPort + 'orderInfo/getDiscountVoucher',
		// 是否是Root账户
		getIsRoot: discountPort + 'bankDiscount/isRoot',
		// 是否是Root账户
		getApplyStepInfo: discountPort + 'bankDiscount/getApplyStepInfo',
		// 重新提交
		getUpdate: discountPort + 'bankDiscount/update',

		// 获取余额
		getCompanyBalanceEnquiry: port + 'company/balanceEnquiry',
		// 获取京东交易户账户的余额url
		getJdAccountRemainMoneyUrl: port + 'company/checkJdBalance',
		// 解绑银行卡账号
		disableBankCard: port + 'company/disableAccountApply',
		// 取消京东证件过期或账户冻结提醒
		cancelWarnMsg: port + 'certificationJD/cancelWarnMsg',
		// 获取京东账户过期｜冻结提醒
		getJdApplyWarnMsg: port + 'certificationJD/listApplyInfoMessage',
		// 查询某交易户下无正在交易的订单
		haventTradingOrder: port + 'certificationJD/isExistTradingOrder'
	};
}

let paths = generatePaths();

export interface portConfig {
	bm?: string;
	market?: string;
	login?: string;
	api?: string;
	pc?: string;
	ocr?: string;
	discount?: string;
	assess?: string;
	yiqian?: string;
}

function resolveUrl(url: string) {
	if (!/\/$/.test(url)) {
		url = `${url}/`;
	}
	if (!/^(\/|https?:\/\/)/.test(url)) {
		url = `/${url}`;
	}
	return url;
}

export function registryPort({
	bm = '/',
	market: marketPort = '/',
	login = '/',
	api = '/',
	pc = '/',
	ocr = '/',
	discount = '/',
	assess = '/',
	yiqian = '/'
}: portConfig) {
	port = resolveUrl(bm);
	market = resolveUrl(marketPort);
	loginport = resolveUrl(login);
	apiport = resolveUrl(api);
	pcHost = resolveUrl(pc);
	ocrPort = resolveUrl(ocr);
	discountPort = resolveUrl(discount);
	assessUrl = resolveUrl(assess);
	yiqianUrl = resolveUrl(yiqian);
	const newPaths = generatePaths();
	Object.keys(newPaths).forEach(key => {
		(paths as any)[key] = (newPaths as any)[key]
	});
}

export default paths;
