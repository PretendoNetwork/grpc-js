/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface LoginRequest {
  grantType: string;
  username?: string | undefined;
  password?: string | undefined;
  refreshToken?: string | undefined;
}

export interface LoginResponse {
  expiresIn: number;
  tokenType: string;
  accessToken: string;
  refreshToken: string;
}

function createBaseLoginRequest(): LoginRequest {
  return { grantType: "", username: undefined, password: undefined, refreshToken: undefined };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantType !== "") {
      writer.uint32(10).string(message.grantType);
    }
    if (message.username !== undefined) {
      writer.uint32(18).string(message.username);
    }
    if (message.password !== undefined) {
      writer.uint32(26).string(message.password);
    }
    if (message.refreshToken !== undefined) {
      writer.uint32(34).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.grantType = reader.string();
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

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      grantType: isSet(object.grantType) ? String(object.grantType) : "",
      username: isSet(object.username) ? String(object.username) : undefined,
      password: isSet(object.password) ? String(object.password) : undefined,
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : undefined,
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.grantType !== undefined && (obj.grantType = message.grantType);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  create(base?: DeepPartial<LoginRequest>): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = createBaseLoginRequest();
    message.grantType = object.grantType ?? "";
    message.username = object.username ?? undefined;
    message.password = object.password ?? undefined;
    message.refreshToken = object.refreshToken ?? undefined;
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { expiresIn: 0, tokenType: "", accessToken: "", refreshToken: "" };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expiresIn !== 0) {
      writer.uint32(8).uint32(message.expiresIn);
    }
    if (message.tokenType !== "") {
      writer.uint32(18).string(message.tokenType);
    }
    if (message.accessToken !== "") {
      writer.uint32(26).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(34).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.expiresIn = reader.uint32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tokenType = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return {
      expiresIn: isSet(object.expiresIn) ? Number(object.expiresIn) : 0,
      tokenType: isSet(object.tokenType) ? String(object.tokenType) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    message.expiresIn !== undefined && (obj.expiresIn = Math.round(message.expiresIn));
    message.tokenType !== undefined && (obj.tokenType = message.tokenType);
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
    return obj;
  },

  create(base?: DeepPartial<LoginResponse>): LoginResponse {
    return LoginResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginResponse>): LoginResponse {
    const message = createBaseLoginResponse();
    message.expiresIn = object.expiresIn ?? 0;
    message.tokenType = object.tokenType ?? "";
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
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
