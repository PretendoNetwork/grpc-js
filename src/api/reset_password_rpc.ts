/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface ResetPasswordRequest {
  password: string;
  passwordConfirm: string;
  token: string;
}

function createBaseResetPasswordRequest(): ResetPasswordRequest {
  return { password: "", passwordConfirm: "", token: "" };
}

export const ResetPasswordRequest = {
  encode(message: ResetPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.passwordConfirm !== "") {
      writer.uint32(18).string(message.passwordConfirm);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResetPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.password = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.passwordConfirm = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResetPasswordRequest {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      passwordConfirm: isSet(object.passwordConfirm) ? String(object.passwordConfirm) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: ResetPasswordRequest): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.passwordConfirm !== undefined && (obj.passwordConfirm = message.passwordConfirm);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<ResetPasswordRequest>): ResetPasswordRequest {
    return ResetPasswordRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResetPasswordRequest>): ResetPasswordRequest {
    const message = createBaseResetPasswordRequest();
    message.password = object.password ?? "";
    message.passwordConfirm = object.passwordConfirm ?? "";
    message.token = object.token ?? "";
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
