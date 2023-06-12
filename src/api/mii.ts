/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "api";

export interface Mii {
  name: string;
  data: string;
  url: string;
}

function createBaseMii(): Mii {
  return { name: "", data: "", url: "" };
}

export const Mii = {
  encode(message: Mii, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mii {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMii();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.data = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Mii {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      data: isSet(object.data) ? String(object.data) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: Mii): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.data !== undefined && (obj.data = message.data);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create(base?: DeepPartial<Mii>): Mii {
    return Mii.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Mii>): Mii {
    const message = createBaseMii();
    message.name = object.name ?? "";
    message.data = object.data ?? "";
    message.url = object.url ?? "";
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
