module.exports = {
	account: {
		service: require('./account/account_service'),
		rpc: {
			getBasicUserData: require('./account/get_basic_user_data_rpc'),
			isBanned: require('./account/is_banned_rpc'),
			login: require('./account/login_rpc'),
			registerPNID: require('./account/register_pnid_rpc'),
		},
		types: {
			mii: require('./account/mii')
		}
	},
	miiverse: {
		service: require('./miiverse/miiverse_service'),
		rpc: {
			smmRequestPostID: require('./miiverse/smm_request_post_id_rpc.js')
		},
		types: {}
	},
	friends: {
		service: require('./friends/friends_service'),
		rpc: {
			sendUserNotificationWiiU: require('./friends/send_user_notification_wiiu_rpc')
		},
		types: {}
	},
};

