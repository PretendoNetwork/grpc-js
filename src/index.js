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
			Mii: require('./account/mii')
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
			sendUserNotificationWiiU: require('./friends/send_user_notification_wiiu_rpc'),
			getUserFriendPIDs: require('./friends/get_user_friend_pids_rpc'),
			sendUserFriendRequest: require('./friends/send_user_friend_request_rpc'),
			getUserFriendRequestsIncoming: require('./friends/get_user_friend_requests_incoming_rpc'),
			acceptFriendRequest: require('./friends/accept_friend_request_rpc'),
			denyFriendRequest: require('./friends/deny_friend_request_rpc'),
		},
		types: {
			FriendRequest: require('./friends/friend_request')
		}
	},
	api: {
		service: require('./api/api_service'),
		rpc: {
			forgotPassword: require('./api/forgot_password_rpc'),
			getUserData: require('./api/get_user_data_rpc'),
			login: require('./api/login_rpc'),
			register: require('./api/register_rpc'),
			resetPassword: require('./api/reset_password_rpc'),
			setDiscordConnectionData: require('./api/set_discord_connection_data_rpc'),
			setStripeConnectionData: require('./api/set_stripe_connection_data_rpc'),
			updateUserData: require('./api/update_user_data_rpc'),
		},
		types: {
			Mii: require('./account/mii'),
			UserConnections: require('./api/user_connections'),
		}
	},
};

