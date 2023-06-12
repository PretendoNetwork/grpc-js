"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetStripeConnectionDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "api";
function createBaseSetStripeConnectionDataRequest() {
    return {
        customerId: undefined,
        subscriptionId: undefined,
        priceId: undefined,
        tierLevel: undefined,
        tierName: undefined,
        timestamp: 0,
        accessLevel: undefined,
        serverAccessLevel: undefined,
    };
}
exports.SetStripeConnectionDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.customerId !== undefined) {
            writer.uint32(10).string(message.customerId);
        }
        if (message.subscriptionId !== undefined) {
            writer.uint32(18).string(message.subscriptionId);
        }
        if (message.priceId !== undefined) {
            writer.uint32(26).string(message.priceId);
        }
        if (message.tierLevel !== undefined) {
            writer.uint32(32).uint32(message.tierLevel);
        }
        if (message.tierName !== undefined) {
            writer.uint32(42).string(message.tierName);
        }
        if (message.timestamp !== 0) {
            writer.uint32(48).uint64(message.timestamp);
        }
        if (message.accessLevel !== undefined) {
            writer.uint32(56).uint32(message.accessLevel);
        }
        if (message.serverAccessLevel !== undefined) {
            writer.uint32(66).string(message.serverAccessLevel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetStripeConnectionDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.customerId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.subscriptionId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.priceId = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.tierLevel = reader.uint32();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.tierName = reader.string();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.timestamp = longToNumber(reader.uint64());
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.accessLevel = reader.uint32();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.serverAccessLevel = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            customerId: isSet(object.customerId) ? String(object.customerId) : undefined,
            subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : undefined,
            priceId: isSet(object.priceId) ? String(object.priceId) : undefined,
            tierLevel: isSet(object.tierLevel) ? Number(object.tierLevel) : undefined,
            tierName: isSet(object.tierName) ? String(object.tierName) : undefined,
            timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
            accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : undefined,
            serverAccessLevel: isSet(object.serverAccessLevel) ? String(object.serverAccessLevel) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
        message.priceId !== undefined && (obj.priceId = message.priceId);
        message.tierLevel !== undefined && (obj.tierLevel = Math.round(message.tierLevel));
        message.tierName !== undefined && (obj.tierName = message.tierName);
        message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
        message.accessLevel !== undefined && (obj.accessLevel = Math.round(message.accessLevel));
        message.serverAccessLevel !== undefined && (obj.serverAccessLevel = message.serverAccessLevel);
        return obj;
    },
    create(base) {
        return exports.SetStripeConnectionDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSetStripeConnectionDataRequest();
        message.customerId = object.customerId ?? undefined;
        message.subscriptionId = object.subscriptionId ?? undefined;
        message.priceId = object.priceId ?? undefined;
        message.tierLevel = object.tierLevel ?? undefined;
        message.tierName = object.tierName ?? undefined;
        message.timestamp = object.timestamp ?? 0;
        message.accessLevel = object.accessLevel ?? undefined;
        message.serverAccessLevel = object.serverAccessLevel ?? undefined;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
