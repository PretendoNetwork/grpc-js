/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface GetUserFriendPIDsRequest {
  pid: number;
}

export interface GetUserFriendPIDsResponse {
  pids: number[];
}

function createBaseGetUserFriendPIDsRequest(): GetUserFriendPIDsRequest {
  return { pid: 0 };
}

export const GetUserFriendPIDsRequest = {
  encode(message: GetUserFriendPIDsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserFriendPIDsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserFriendPIDsRequest();
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

  fromJSON(object: any): GetUserFriendPIDsRequest {
    return { pid: isSet(object.pid) ? Number(object.pid) : 0 };
  },

  toJSON(message: GetUserFriendPIDsRequest): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    return obj;
  },

  create(base?: DeepPartial<GetUserFriendPIDsRequest>): GetUserFriendPIDsRequest {
    return GetUserFriendPIDsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserFriendPIDsRequest>): GetUserFriendPIDsRequest {
    const message = createBaseGetUserFriendPIDsRequest();
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseGetUserFriendPIDsResponse(): GetUserFriendPIDsResponse {
  return { pids: [] };
}

export const GetUserFriendPIDsResponse = {
  encode(message: GetUserFriendPIDsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.pids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserFriendPIDsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserFriendPIDsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag == 8) {
            message.pids.push(reader.uint32());
            continue;
          }

          if (tag == 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pids.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserFriendPIDsResponse {
    return { pids: Array.isArray(object?.pids) ? object.pids.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: GetUserFriendPIDsResponse): unknown {
    const obj: any = {};
    if (message.pids) {
      obj.pids = message.pids.map((e) => Math.round(e));
    } else {
      obj.pids = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserFriendPIDsResponse>): GetUserFriendPIDsResponse {
    return GetUserFriendPIDsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserFriendPIDsResponse>): GetUserFriendPIDsResponse {
    const message = createBaseGetUserFriendPIDsResponse();
    message.pids = object.pids?.map((e) => e) || [];
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
