/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface AcceptFriendRequestRequest {
  friendRequestId: number;
}

export interface AcceptFriendRequestResponse {
  success: boolean;
}

function createBaseAcceptFriendRequestRequest(): AcceptFriendRequestRequest {
  return { friendRequestId: 0 };
}

export const AcceptFriendRequestRequest = {
  encode(message: AcceptFriendRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.friendRequestId !== 0) {
      writer.uint32(8).uint64(message.friendRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptFriendRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptFriendRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.friendRequestId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptFriendRequestRequest {
    return { friendRequestId: isSet(object.friendRequestId) ? Number(object.friendRequestId) : 0 };
  },

  toJSON(message: AcceptFriendRequestRequest): unknown {
    const obj: any = {};
    message.friendRequestId !== undefined && (obj.friendRequestId = Math.round(message.friendRequestId));
    return obj;
  },

  create(base?: DeepPartial<AcceptFriendRequestRequest>): AcceptFriendRequestRequest {
    return AcceptFriendRequestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AcceptFriendRequestRequest>): AcceptFriendRequestRequest {
    const message = createBaseAcceptFriendRequestRequest();
    message.friendRequestId = object.friendRequestId ?? 0;
    return message;
  },
};

function createBaseAcceptFriendRequestResponse(): AcceptFriendRequestResponse {
  return { success: false };
}

export const AcceptFriendRequestResponse = {
  encode(message: AcceptFriendRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptFriendRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptFriendRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AcceptFriendRequestResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: AcceptFriendRequestResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<AcceptFriendRequestResponse>): AcceptFriendRequestResponse {
    return AcceptFriendRequestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AcceptFriendRequestResponse>): AcceptFriendRequestResponse {
    const message = createBaseAcceptFriendRequestResponse();
    message.success = object.success ?? false;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
