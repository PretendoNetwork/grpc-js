/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface ForgotPasswordRequest {
  emailAddressOrUsername: string;
}

function createBaseForgotPasswordRequest(): ForgotPasswordRequest {
  return { emailAddressOrUsername: "" };
}

export const ForgotPasswordRequest = {
  encode(message: ForgotPasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.emailAddressOrUsername !== "") {
      writer.uint32(10).string(message.emailAddressOrUsername);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForgotPasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForgotPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.emailAddressOrUsername = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ForgotPasswordRequest {
    return {
      emailAddressOrUsername: isSet(object.emailAddressOrUsername) ? String(object.emailAddressOrUsername) : "",
    };
  },

  toJSON(message: ForgotPasswordRequest): unknown {
    const obj: any = {};
    message.emailAddressOrUsername !== undefined && (obj.emailAddressOrUsername = message.emailAddressOrUsername);
    return obj;
  },

  create(base?: DeepPartial<ForgotPasswordRequest>): ForgotPasswordRequest {
    return ForgotPasswordRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ForgotPasswordRequest>): ForgotPasswordRequest {
    const message = createBaseForgotPasswordRequest();
    message.emailAddressOrUsername = object.emailAddressOrUsername ?? "";
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
