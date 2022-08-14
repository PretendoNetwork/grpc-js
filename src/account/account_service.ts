/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { IsBannedRequest, IsBannedResponse } from "./is_banned_rpc";
import {
  GetBasicUserDataRequest,
  GetBasicUserDataResponse,
} from "./get_basic_user_data_rpc";
import { RegisterPNIDRequest } from "./register_pnid_rpc";
import { LoginResponse, LoginRequest } from "./login_rpc";

export const protobufPackage = "account";

export type AccountDefinition = typeof AccountDefinition;
export const AccountDefinition = {
  name: "Account",
  fullName: "account.Account",
  methods: {
    /** Used by Juxt */
    isBanned: {
      name: "IsBanned",
      requestType: IsBannedRequest,
      requestStream: false,
      responseType: IsBannedResponse,
      responseStream: false,
      options: {},
    },
    getBasicUserData: {
      name: "GetBasicUserData",
      requestType: GetBasicUserDataRequest,
      requestStream: false,
      responseType: GetBasicUserDataResponse,
      responseStream: false,
      options: {},
    },
    /** Used by website */
    registerPNID: {
      name: "RegisterPNID",
      requestType: RegisterPNIDRequest,
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
  },
} as const;

export interface AccountServiceImplementation<CallContextExt = {}> {
  /** Used by Juxt */
  isBanned(
    request: IsBannedRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<IsBannedResponse>>;
  getBasicUserData(
    request: GetBasicUserDataRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<GetBasicUserDataResponse>>;
  /** Used by website */
  registerPNID(
    request: RegisterPNIDRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<LoginResponse>>;
  login(
    request: LoginRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<LoginResponse>>;
}

export interface AccountClient<CallOptionsExt = {}> {
  /** Used by Juxt */
  isBanned(
    request: DeepPartial<IsBannedRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<IsBannedResponse>;
  getBasicUserData(
    request: DeepPartial<GetBasicUserDataRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetBasicUserDataResponse>;
  /** Used by website */
  registerPNID(
    request: DeepPartial<RegisterPNIDRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<LoginResponse>;
  login(
    request: DeepPartial<LoginRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<LoginResponse>;
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
