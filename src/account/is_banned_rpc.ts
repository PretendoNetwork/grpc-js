/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "account";

export interface IsBannedRequest {
  username: string;
}

export interface IsBannedResponse {
  banned: boolean;
}

function createBaseIsBannedRequest(): IsBannedRequest {
  return { username: "" };
}

export const IsBannedRequest = {
  encode(
    message: IsBannedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsBannedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsBannedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsBannedRequest {
    return {
      username: isSet(object.username) ? String(object.username) : "",
    };
  },

  toJSON(message: IsBannedRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial(object: DeepPartial<IsBannedRequest>): IsBannedRequest {
    const message = createBaseIsBannedRequest();
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseIsBannedResponse(): IsBannedResponse {
  return { banned: false };
}

export const IsBannedResponse = {
  encode(
    message: IsBannedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.banned === true) {
      writer.uint32(8).bool(message.banned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsBannedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsBannedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.banned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsBannedResponse {
    return {
      banned: isSet(object.banned) ? Boolean(object.banned) : false,
    };
  },

  toJSON(message: IsBannedResponse): unknown {
    const obj: any = {};
    message.banned !== undefined && (obj.banned = message.banned);
    return obj;
  },

  fromPartial(object: DeepPartial<IsBannedResponse>): IsBannedResponse {
    const message = createBaseIsBannedResponse();
    message.banned = object.banned ?? false;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
