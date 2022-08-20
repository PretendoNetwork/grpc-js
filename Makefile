NODE_BIN=./node_modules/.bin

build: pull npm account miiverse friends transpile

pull:
	git submodule init
	git submodule update --remote --merge

npm:
	test -d node_modules || npm i

account:
	mkdir -p src/account

	$(NODE_BIN)/grpc_tools_node_protoc \
	--plugin=protoc-gen-ts_proto=$(NODE_BIN)/protoc-gen-ts_proto \
	--ts_proto_out=src/account \
	--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
	--proto_path=grpc-protobufs/account \
	grpc-protobufs/account/*.proto

miiverse:
	mkdir -p src/miiverse

	$(NODE_BIN)/grpc_tools_node_protoc \
	--plugin=protoc-gen-ts_proto=$(NODE_BIN)/protoc-gen-ts_proto \
	--ts_proto_out=src/miiverse \
	--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
	--proto_path=grpc-protobufs/miiverse \
	grpc-protobufs/miiverse/*.proto

friends:
	mkdir -p src/friends

	$(NODE_BIN)/grpc_tools_node_protoc \
	--plugin=protoc-gen-ts_proto=$(NODE_BIN)/protoc-gen-ts_proto \
	--ts_proto_out=src/friends \
	--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,esModuleInterop=true \
	--proto_path=grpc-protobufs/friends \
	grpc-protobufs/friends/*.proto

transpile:
	tsc

.PHONY: pull npm account miiverse friends transpile