/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Mii } from "./mii";

export const protobufPackage = "account";

export interface GetBasicUserDataRequest {
  username: string;
}

export interface GetBasicUserDataResponse {
  username: string;
  accessLevel: number;
  mii: Mii | undefined;
}

function createBaseGetBasicUserDataRequest(): GetBasicUserDataRequest {
  return { username: "" };
}

export const GetBasicUserDataRequest = {
  encode(message: GetBasicUserDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBasicUserDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBasicUserDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.username = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBasicUserDataRequest {
    return { username: isSet(object.username) ? String(object.username) : "" };
  },

  toJSON(message: GetBasicUserDataRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  create(base?: DeepPartial<GetBasicUserDataRequest>): GetBasicUserDataRequest {
    return GetBasicUserDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetBasicUserDataRequest>): GetBasicUserDataRequest {
    const message = createBaseGetBasicUserDataRequest();
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseGetBasicUserDataResponse(): GetBasicUserDataResponse {
  return { username: "", accessLevel: 0, mii: undefined };
}

export const GetBasicUserDataResponse = {
  encode(message: GetBasicUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.accessLevel !== 0) {
      writer.uint32(16).sint32(message.accessLevel);
    }
    if (message.mii !== undefined) {
      Mii.encode(message.mii, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBasicUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBasicUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.accessLevel = reader.sint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.mii = Mii.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBasicUserDataResponse {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : 0,
      mii: isSet(object.mii) ? Mii.fromJSON(object.mii) : undefined,
    };
  },

  toJSON(message: GetBasicUserDataResponse): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    message.accessLevel !== undefined && (obj.accessLevel = Math.round(message.accessLevel));
    message.mii !== undefined && (obj.mii = message.mii ? Mii.toJSON(message.mii) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetBasicUserDataResponse>): GetBasicUserDataResponse {
    return GetBasicUserDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetBasicUserDataResponse>): GetBasicUserDataResponse {
    const message = createBaseGetBasicUserDataResponse();
    message.username = object.username ?? "";
    message.accessLevel = object.accessLevel ?? 0;
    message.mii = (object.mii !== undefined && object.mii !== null) ? Mii.fromPartial(object.mii) : undefined;
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
