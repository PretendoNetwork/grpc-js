/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { SMMRequestPostIdRequest, SMMRequestPostIdResponse } from "./smm_request_post_id_rpc";

export const protobufPackage = "miiverse";

export type MiiverseDefinition = typeof MiiverseDefinition;
export const MiiverseDefinition = {
  name: "Miiverse",
  fullName: "miiverse.Miiverse",
  methods: {
    /** Used by Super Mario Maker */
    sMMRequestPostId: {
      name: "SMMRequestPostId",
      requestType: SMMRequestPostIdRequest,
      requestStream: false,
      responseType: SMMRequestPostIdResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface MiiverseServiceImplementation<CallContextExt = {}> {
  /** Used by Super Mario Maker */
  sMMRequestPostId(
    request: SMMRequestPostIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SMMRequestPostIdResponse>>;
}

export interface MiiverseClient<CallOptionsExt = {}> {
  /** Used by Super Mario Maker */
  sMMRequestPostId(
    request: DeepPartial<SMMRequestPostIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SMMRequestPostIdResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
