/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { ForgotPasswordRequest } from "./forgot_password_rpc";
import { GetUserDataResponse } from "./get_user_data_rpc";
import { Empty } from "./google/protobuf/empty";
import { LoginRequest, LoginResponse } from "./login_rpc";
import { RegisterRequest } from "./register_rpc";
import { ResetPasswordRequest } from "./reset_password_rpc";
import { SetDiscordConnectionDataRequest } from "./set_discord_connection_data_rpc";
import { SetStripeConnectionDataRequest } from "./set_stripe_connection_data_rpc";
import { UpdateUserDataRequest } from "./update_user_data_rpc";

export const protobufPackage = "api";

export type APIDefinition = typeof APIDefinition;
export const APIDefinition = {
  name: "API",
  fullName: "api.API",
  methods: {
    register: {
      name: "Register",
      requestType: RegisterRequest,
      requestStream: false,
      responseType: LoginResponse,
      responseStream: false,
      options: {},
    },
    login: {
      name: "Login",
      requestType: LoginRequest,
      requestStream: false,
      responseType: LoginResponse,
      responseStream: false,
      options: {},
    },
    getUserData: {
      name: "GetUserData",
      requestType: Empty,
      requestStream: false,
      responseType: GetUserDataResponse,
      responseStream: false,
      options: {},
    },
    updateUserData: {
      name: "UpdateUserData",
      requestType: UpdateUserDataRequest,
      requestStream: false,
      responseType: GetUserDataResponse,
      responseStream: false,
      options: {},
    },
    forgotPassword: {
      name: "ForgotPassword",
      requestType: ForgotPasswordRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    resetPassword: {
      name: "ResetPassword",
      requestType: ResetPasswordRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    setDiscordConnectionData: {
      name: "SetDiscordConnectionData",
      requestType: SetDiscordConnectionDataRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    setStripeConnectionData: {
      name: "SetStripeConnectionData",
      requestType: SetStripeConnectionDataRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface APIServiceImplementation<CallContextExt = {}> {
  register(request: RegisterRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
  login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
  getUserData(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
  updateUserData(
    request: UpdateUserDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserDataResponse>>;
  forgotPassword(request: ForgotPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  resetPassword(request: ResetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  setDiscordConnectionData(
    request: SetDiscordConnectionDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  setStripeConnectionData(
    request: SetStripeConnectionDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
}

export interface APIClient<CallOptionsExt = {}> {
  register(request: DeepPartial<RegisterRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
  login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
  getUserData(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
  updateUserData(
    request: DeepPartial<UpdateUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserDataResponse>;
  forgotPassword(request: DeepPartial<ForgotPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  resetPassword(request: DeepPartial<ResetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  setDiscordConnectionData(
    request: DeepPartial<SetDiscordConnectionDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  setStripeConnectionData(
    request: DeepPartial<SetStripeConnectionDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
