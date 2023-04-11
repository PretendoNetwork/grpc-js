
const grpc = require('nice-grpc');
const grpcServices = require('../');

const { FriendsDefinition } = grpcServices.friends.service;

async function main() {
	const channel = grpc.createChannel('127.0.0.1:50051');
	const client = grpc.createClient(FriendsDefinition, channel);

	const response = await client.getUserFriendPIDs({
		pid: 12345
	}, {
		metadata: grpc.Metadata({
			'X-API-Key': 'KEY HERE'
		})
	});

	console.log(response)
}

main();