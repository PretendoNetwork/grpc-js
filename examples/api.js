
const grpc = require('nice-grpc');
const grpcServices = require('../');

const { APIDefinition } = grpcServices.api.service;

async function main() {
	const channel = grpc.createChannel('127.0.0.1:443');
	const client = grpc.createClient(APIDefinition, channel);

	const response = await client.login({
		username: 'xxx',
		password: 'xxx?',
		grantType: 'password'
	}, {
		metadata: grpc.Metadata({
			'X-API-Key': 'xxx'
		})
	});

	console.log(response)
}

main();