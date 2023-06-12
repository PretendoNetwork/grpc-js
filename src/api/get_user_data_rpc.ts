/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Mii } from "./mii";
import { UserConnections } from "./user_connections";

export const protobufPackage = "api";

export interface GetUserDataResponse {
  deleted: boolean;
  creationDate: string;
  updatedDate: string;
  pid: number;
  username: string;
  accessLevel: number;
  serverAccessLevel: string;
  mii: Mii | undefined;
  birthday: string;
  gender: string;
  country: string;
  timezone: string;
  language: string;
  emailAddress: string;
  connections: UserConnections | undefined;
  marketingFlag: boolean;
}

function createBaseGetUserDataResponse(): GetUserDataResponse {
  return {
    deleted: false,
    creationDate: "",
    updatedDate: "",
    pid: 0,
    username: "",
    accessLevel: 0,
    serverAccessLevel: "",
    mii: undefined,
    birthday: "",
    gender: "",
    country: "",
    timezone: "",
    language: "",
    emailAddress: "",
    connections: undefined,
    marketingFlag: false,
  };
}

export const GetUserDataResponse = {
  encode(message: GetUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deleted === true) {
      writer.uint32(8).bool(message.deleted);
    }
    if (message.creationDate !== "") {
      writer.uint32(18).string(message.creationDate);
    }
    if (message.updatedDate !== "") {
      writer.uint32(26).string(message.updatedDate);
    }
    if (message.pid !== 0) {
      writer.uint32(32).uint32(message.pid);
    }
    if (message.username !== "") {
      writer.uint32(42).string(message.username);
    }
    if (message.accessLevel !== 0) {
      writer.uint32(48).uint32(message.accessLevel);
    }
    if (message.serverAccessLevel !== "") {
      writer.uint32(58).string(message.serverAccessLevel);
    }
    if (message.mii !== undefined) {
      Mii.encode(message.mii, writer.uint32(66).fork()).ldelim();
    }
    if (message.birthday !== "") {
      writer.uint32(74).string(message.birthday);
    }
    if (message.gender !== "") {
      writer.uint32(82).string(message.gender);
    }
    if (message.country !== "") {
      writer.uint32(90).string(message.country);
    }
    if (message.timezone !== "") {
      writer.uint32(98).string(message.timezone);
    }
    if (message.language !== "") {
      writer.uint32(106).string(message.language);
    }
    if (message.emailAddress !== "") {
      writer.uint32(114).string(message.emailAddress);
    }
    if (message.connections !== undefined) {
      UserConnections.encode(message.connections, writer.uint32(122).fork()).ldelim();
    }
    if (message.marketingFlag === true) {
      writer.uint32(128).bool(message.marketingFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.creationDate = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.updatedDate = reader.string();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.pid = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.username = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.accessLevel = reader.uint32();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.serverAccessLevel = reader.string();
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.mii = Mii.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.birthday = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.gender = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.country = reader.string();
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.timezone = reader.string();
          continue;
        case 13:
          if (tag != 106) {
            break;
          }

          message.language = reader.string();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        case 15:
          if (tag != 122) {
            break;
          }

          message.connections = UserConnections.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag != 128) {
            break;
          }

          message.marketingFlag = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserDataResponse {
    return {
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      creationDate: isSet(object.creationDate) ? String(object.creationDate) : "",
      updatedDate: isSet(object.updatedDate) ? String(object.updatedDate) : "",
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      username: isSet(object.username) ? String(object.username) : "",
      accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : 0,
      serverAccessLevel: isSet(object.serverAccessLevel) ? String(object.serverAccessLevel) : "",
      mii: isSet(object.mii) ? Mii.fromJSON(object.mii) : undefined,
      birthday: isSet(object.birthday) ? String(object.birthday) : "",
      gender: isSet(object.gender) ? String(object.gender) : "",
      country: isSet(object.country) ? String(object.country) : "",
      timezone: isSet(object.timezone) ? String(object.timezone) : "",
      language: isSet(object.language) ? String(object.language) : "",
      emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
      connections: isSet(object.connections) ? UserConnections.fromJSON(object.connections) : undefined,
      marketingFlag: isSet(object.marketingFlag) ? Boolean(object.marketingFlag) : false,
    };
  },

  toJSON(message: GetUserDataResponse): unknown {
    const obj: any = {};
    message.deleted !== undefined && (obj.deleted = message.deleted);
    message.creationDate !== undefined && (obj.creationDate = message.creationDate);
    message.updatedDate !== undefined && (obj.updatedDate = message.updatedDate);
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    message.username !== undefined && (obj.username = message.username);
    message.accessLevel !== undefined && (obj.accessLevel = Math.round(message.accessLevel));
    message.serverAccessLevel !== undefined && (obj.serverAccessLevel = message.serverAccessLevel);
    message.mii !== undefined && (obj.mii = message.mii ? Mii.toJSON(message.mii) : undefined);
    message.birthday !== undefined && (obj.birthday = message.birthday);
    message.gender !== undefined && (obj.gender = message.gender);
    message.country !== undefined && (obj.country = message.country);
    message.timezone !== undefined && (obj.timezone = message.timezone);
    message.language !== undefined && (obj.language = message.language);
    message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
    message.connections !== undefined &&
      (obj.connections = message.connections ? UserConnections.toJSON(message.connections) : undefined);
    message.marketingFlag !== undefined && (obj.marketingFlag = message.marketingFlag);
    return obj;
  },

  create(base?: DeepPartial<GetUserDataResponse>): GetUserDataResponse {
    return GetUserDataResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetUserDataResponse>): GetUserDataResponse {
    const message = createBaseGetUserDataResponse();
    message.deleted = object.deleted ?? false;
    message.creationDate = object.creationDate ?? "";
    message.updatedDate = object.updatedDate ?? "";
    message.pid = object.pid ?? 0;
    message.username = object.username ?? "";
    message.accessLevel = object.accessLevel ?? 0;
    message.serverAccessLevel = object.serverAccessLevel ?? "";
    message.mii = (object.mii !== undefined && object.mii !== null) ? Mii.fromPartial(object.mii) : undefined;
    message.birthday = object.birthday ?? "";
    message.gender = object.gender ?? "";
    message.country = object.country ?? "";
    message.timezone = object.timezone ?? "";
    message.language = object.language ?? "";
    message.emailAddress = object.emailAddress ?? "";
    message.connections = (object.connections !== undefined && object.connections !== null)
      ? UserConnections.fromPartial(object.connections)
      : undefined;
    message.marketingFlag = object.marketingFlag ?? false;
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
