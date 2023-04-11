
const grpc = require('nice-grpc');
const grpcServices = require('../');

const { FriendsDefinition } = grpcServices.friends.service;

async function main() {
	const channel = grpc.createChannel('159.203.102.56:50051');
	const client = grpc.createClient(FriendsDefinition, channel);

	const response = await client.getUserFriendPIDs({
		pid: 1098860494
	}, {
		metadata: grpc.Metadata({
			'X-API-Key': 'f94fa5c39e094f468486784d7af82d8b'
		})
	});

	console.log(response)
}

main();