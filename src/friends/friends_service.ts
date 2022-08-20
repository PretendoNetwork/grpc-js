/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { SendUserNotificationWiiURequest } from "./send_user_notification_wiiu_rpc";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "friends";

export type FriendsDefinition = typeof FriendsDefinition;
export const FriendsDefinition = {
  name: "Friends",
  fullName: "friends.Friends",
  methods: {
    sendUserNotificationWiiU: {
      name: "SendUserNotificationWiiU",
      requestType: SendUserNotificationWiiURequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface FriendsServiceImplementation<CallContextExt = {}> {
  sendUserNotificationWiiU(
    request: SendUserNotificationWiiURequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<Empty>>;
}

export interface FriendsClient<CallOptionsExt = {}> {
  sendUserNotificationWiiU(
    request: DeepPartial<SendUserNotificationWiiURequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<Empty>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
