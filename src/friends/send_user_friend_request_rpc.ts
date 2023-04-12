/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface SendUserFriendRequestRequest {
  sender: number;
  recipient: number;
  message: string;
}

export interface SendUserFriendRequestResponse {
  success: boolean;
}

function createBaseSendUserFriendRequestRequest(): SendUserFriendRequestRequest {
  return { sender: 0, recipient: 0, message: "" };
}

export const SendUserFriendRequestRequest = {
  encode(message: SendUserFriendRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== 0) {
      writer.uint32(8).uint32(message.sender);
    }
    if (message.recipient !== 0) {
      writer.uint32(16).uint32(message.recipient);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendUserFriendRequestRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendUserFriendRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.sender = reader.uint32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.recipient = reader.uint32();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendUserFriendRequestRequest {
    return {
      sender: isSet(object.sender) ? Number(object.sender) : 0,
      recipient: isSet(object.recipient) ? Number(object.recipient) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: SendUserFriendRequestRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = Math.round(message.sender));
    message.recipient !== undefined && (obj.recipient = Math.round(message.recipient));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create(base?: DeepPartial<SendUserFriendRequestRequest>): SendUserFriendRequestRequest {
    return SendUserFriendRequestRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SendUserFriendRequestRequest>): SendUserFriendRequestRequest {
    const message = createBaseSendUserFriendRequestRequest();
    message.sender = object.sender ?? 0;
    message.recipient = object.recipient ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseSendUserFriendRequestResponse(): SendUserFriendRequestResponse {
  return { success: false };
}

export const SendUserFriendRequestResponse = {
  encode(message: SendUserFriendRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendUserFriendRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendUserFriendRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendUserFriendRequestResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: SendUserFriendRequestResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  create(base?: DeepPartial<SendUserFriendRequestResponse>): SendUserFriendRequestResponse {
    return SendUserFriendRequestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SendUserFriendRequestResponse>): SendUserFriendRequestResponse {
    const message = createBaseSendUserFriendRequestResponse();
    message.success = object.success ?? false;
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
