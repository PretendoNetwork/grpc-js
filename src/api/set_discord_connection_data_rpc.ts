/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface SetDiscordConnectionDataRequest {
  id: string;
}

function createBaseSetDiscordConnectionDataRequest(): SetDiscordConnectionDataRequest {
  return { id: "" };
}

export const SetDiscordConnectionDataRequest = {
  encode(message: SetDiscordConnectionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetDiscordConnectionDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetDiscordConnectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetDiscordConnectionDataRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: SetDiscordConnectionDataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<SetDiscordConnectionDataRequest>): SetDiscordConnectionDataRequest {
    return SetDiscordConnectionDataRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetDiscordConnectionDataRequest>): SetDiscordConnectionDataRequest {
    const message = createBaseSetDiscordConnectionDataRequest();
    message.id = object.id ?? "";
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
