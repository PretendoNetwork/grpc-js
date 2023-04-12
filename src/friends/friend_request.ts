/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface FriendRequest {
  id: number;
  sender: number;
  recipient: number;
  sent: number;
  expires: number;
  message: string;
}

function createBaseFriendRequest(): FriendRequest {
  return { id: 0, sender: 0, recipient: 0, sent: 0, expires: 0, message: "" };
}

export const FriendRequest = {
  encode(message: FriendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== 0) {
      writer.uint32(16).uint32(message.sender);
    }
    if (message.recipient !== 0) {
      writer.uint32(24).uint32(message.recipient);
    }
    if (message.sent !== 0) {
      writer.uint32(32).uint64(message.sent);
    }
    if (message.expires !== 0) {
      writer.uint32(40).uint64(message.expires);
    }
    if (message.message !== "") {
      writer.uint32(50).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FriendRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.sender = reader.uint32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.recipient = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.sent = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.expires = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FriendRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      sender: isSet(object.sender) ? Number(object.sender) : 0,
      recipient: isSet(object.recipient) ? Number(object.recipient) : 0,
      sent: isSet(object.sent) ? Number(object.sent) : 0,
      expires: isSet(object.expires) ? Number(object.expires) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: FriendRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.sender !== undefined && (obj.sender = Math.round(message.sender));
    message.recipient !== undefined && (obj.recipient = Math.round(message.recipient));
    message.sent !== undefined && (obj.sent = Math.round(message.sent));
    message.expires !== undefined && (obj.expires = Math.round(message.expires));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<FriendRequest>): FriendRequest {
    return FriendRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<FriendRequest>): FriendRequest {
    const message = createBaseFriendRequest();
    message.id = object.id ?? 0;
    message.sender = object.sender ?? 0;
    message.recipient = object.recipient ?? 0;
    message.sent = object.sent ?? 0;
    message.expires = object.expires ?? 0;
    message.message = object.message ?? "";
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
