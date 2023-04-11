/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "account";

export interface RegisterPNIDRequest {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
  hCaptchaResponse: string;
}

function createBaseRegisterPNIDRequest(): RegisterPNIDRequest {
  return { email: "", username: "", password: "", passwordConfirm: "", hCaptchaResponse: "" };
}

export const RegisterPNIDRequest = {
  encode(message: RegisterPNIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.passwordConfirm !== "") {
      writer.uint32(34).string(message.passwordConfirm);
    }
    if (message.hCaptchaResponse !== "") {
      writer.uint32(42).string(message.hCaptchaResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPNIDRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterPNIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.email = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.passwordConfirm = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.hCaptchaResponse = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterPNIDRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      passwordConfirm: isSet(object.passwordConfirm) ? String(object.passwordConfirm) : "",
      hCaptchaResponse: isSet(object.hCaptchaResponse) ? String(object.hCaptchaResponse) : "",
    };
  },

  toJSON(message: RegisterPNIDRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.passwordConfirm !== undefined && (obj.passwordConfirm = message.passwordConfirm);
    message.hCaptchaResponse !== undefined && (obj.hCaptchaResponse = message.hCaptchaResponse);
    return obj;
  },

  create(base?: DeepPartial<RegisterPNIDRequest>): RegisterPNIDRequest {
    return RegisterPNIDRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterPNIDRequest>): RegisterPNIDRequest {
    const message = createBaseRegisterPNIDRequest();
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.passwordConfirm = object.passwordConfirm ?? "";
    message.hCaptchaResponse = object.hCaptchaResponse ?? "";
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
