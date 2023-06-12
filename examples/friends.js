
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
			'X-API-Key': 'xxx'
		})
	});

	console.log(response)
}

main();