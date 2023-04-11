/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "miiverse";

export interface SMMRequestPostIdRequest {
  /** TODO: Other course/user data? */
  courseId: number;
}

export interface SMMRequestPostIdResponse {
  postId: number;
}

function createBaseSMMRequestPostIdRequest(): SMMRequestPostIdRequest {
  return { courseId: 0 };
}

export const SMMRequestPostIdRequest = {
  encode(message: SMMRequestPostIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.courseId !== 0) {
      writer.uint32(8).uint64(message.courseId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMMRequestPostIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMMRequestPostIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.courseId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMMRequestPostIdRequest {
    return { courseId: isSet(object.courseId) ? Number(object.courseId) : 0 };
  },

  toJSON(message: SMMRequestPostIdRequest): unknown {
    const obj: any = {};
    message.courseId !== undefined && (obj.courseId = Math.round(message.courseId));
    return obj;
  },

  create(base?: DeepPartial<SMMRequestPostIdRequest>): SMMRequestPostIdRequest {
    return SMMRequestPostIdRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SMMRequestPostIdRequest>): SMMRequestPostIdRequest {
    const message = createBaseSMMRequestPostIdRequest();
    message.courseId = object.courseId ?? 0;
    return message;
  },
};

function createBaseSMMRequestPostIdResponse(): SMMRequestPostIdResponse {
  return { postId: 0 };
}

export const SMMRequestPostIdResponse = {
  encode(message: SMMRequestPostIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postId !== 0) {
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SMMRequestPostIdResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMMRequestPostIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.postId = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMMRequestPostIdResponse {
    return { postId: isSet(object.postId) ? Number(object.postId) : 0 };
  },

  toJSON(message: SMMRequestPostIdResponse): unknown {
    const obj: any = {};
    message.postId !== undefined && (obj.postId = Math.round(message.postId));
    return obj;
  },

  create(base?: DeepPartial<SMMRequestPostIdResponse>): SMMRequestPostIdResponse {
    return SMMRequestPostIdResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SMMRequestPostIdResponse>): SMMRequestPostIdResponse {
    const message = createBaseSMMRequestPostIdResponse();
    message.postId = object.postId ?? 0;
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
