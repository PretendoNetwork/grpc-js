/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface RegisterRequest {
  email: string;
  username: string;
  miiName: string;
  password: string;
  passwordConfirm: string;
  captchaResponse?: string | undefined;
}

function createBaseRegisterRequest(): RegisterRequest {
  return { email: "", username: "", miiName: "", password: "", passwordConfirm: "", captchaResponse: undefined };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.miiName !== "") {
      writer.uint32(26).string(message.miiName);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    if (message.passwordConfirm !== "") {
      writer.uint32(42).string(message.passwordConfirm);
    }
    if (message.captchaResponse !== undefined) {
      writer.uint32(50).string(message.captchaResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
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

          message.miiName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.passwordConfirm = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.captchaResponse = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      username: isSet(object.username) ? String(object.username) : "",
      miiName: isSet(object.miiName) ? String(object.miiName) : "",
      password: isSet(object.password) ? String(object.password) : "",
      passwordConfirm: isSet(object.passwordConfirm) ? String(object.passwordConfirm) : "",
      captchaResponse: isSet(object.captchaResponse) ? String(object.captchaResponse) : undefined,
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.username !== undefined && (obj.username = message.username);
    message.miiName !== undefined && (obj.miiName = message.miiName);
    message.password !== undefined && (obj.password = message.password);
    message.passwordConfirm !== undefined && (obj.passwordConfirm = message.passwordConfirm);
    message.captchaResponse !== undefined && (obj.captchaResponse = message.captchaResponse);
    return obj;
  },

  create(base?: DeepPartial<RegisterRequest>): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterRequest>): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.miiName = object.miiName ?? "";
    message.password = object.password ?? "";
    message.passwordConfirm = object.passwordConfirm ?? "";
    message.captchaResponse = object.captchaResponse ?? undefined;
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
