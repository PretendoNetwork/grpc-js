
const grpc = require('nice-grpc');
const grpcServices = require('../');

const { AccountDefinition } = grpcServices.account.service;

async function isBanned(request) {
	console.log(request);

	return {
		banned: false
	}
}

async function getBasicUserData(request) {
	console.log(request);

	return {
		username: 'Jon',
		access_level: 1,
		mii: {
			name: 'Jon Mii',
			data: 'Base64 Data',
			url: 'https://mii-image.com/mii.png'
		}
	}
}

async function registerPNID(request) {
	console.log(request);

	return {
		expires_in: 1000,
		token_type: 'Bearer',
		access_token: 'access token',
		refresh_token: 'refresh token'
	}
}

async function login(request) {
	console.log(request);

	return {
		expires_in: 1000,
		token_type: 'Bearer',
		access_token: 'access token',
		refresh_token: 'refresh token'
	}
}

const implementation = {
	isBanned,
	getBasicUserData,
	registerPNID,
	login
}

const server = grpc.createServer();

server.add(AccountDefinition, implementation);

server.listen('0.0.0.0:8080').then(() => {
	console.log('gRPC server started')
});