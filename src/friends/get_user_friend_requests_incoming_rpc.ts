/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FriendRequest } from "./friend_request";

export const protobufPackage = "friends";

export interface GetUserFriendRequestsIncomingRequest {
  pid: number;
}

export interface GetUserFriendRequestsIncomingResponse {
  friendRequests: FriendRequest[];
}

function createBaseGetUserFriendRequestsIncomingRequest(): GetUserFriendRequestsIncomingRequest {
  return { pid: 0 };
}

export const GetUserFriendRequestsIncomingRequest = {
  encode(message: GetUserFriendRequestsIncomingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserFriendRequestsIncomingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserFriendRequestsIncomingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.pid = reader.uint32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserFriendRequestsIncomingRequest {
    return { pid: isSet(object.pid) ? Number(object.pid) : 0 };
  },

  toJSON(message: GetUserFriendRequestsIncomingRequest): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    return obj;
  },

  create(base?: DeepPartial<GetUserFriendRequestsIncomingRequest>): GetUserFriendRequestsIncomingRequest {
    return GetUserFriendRequestsIncomingRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserFriendRequestsIncomingRequest>): GetUserFriendRequestsIncomingRequest {
    const message = createBaseGetUserFriendRequestsIncomingRequest();
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseGetUserFriendRequestsIncomingResponse(): GetUserFriendRequestsIncomingResponse {
  return { friendRequests: [] };
}

export const GetUserFriendRequestsIncomingResponse = {
  encode(message: GetUserFriendRequestsIncomingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.friendRequests) {
      FriendRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserFriendRequestsIncomingResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserFriendRequestsIncomingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.friendRequests.push(FriendRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserFriendRequestsIncomingResponse {
    return {
      friendRequests: Array.isArray(object?.friendRequests)
        ? object.friendRequests.map((e: any) => FriendRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUserFriendRequestsIncomingResponse): unknown {
    const obj: any = {};
    if (message.friendRequests) {
      obj.friendRequests = message.friendRequests.map((e) => e ? FriendRequest.toJSON(e) : undefined);
    } else {
      obj.friendRequests = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserFriendRequestsIncomingResponse>): GetUserFriendRequestsIncomingResponse {
    return GetUserFriendRequestsIncomingResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserFriendRequestsIncomingResponse>): GetUserFriendRequestsIncomingResponse {
    const message = createBaseGetUserFriendRequestsIncomingResponse();
    message.friendRequests = object.friendRequests?.map((e) => FriendRequest.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
