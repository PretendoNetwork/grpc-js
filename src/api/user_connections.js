"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConnections = exports.StripeConnection = exports.DiscordConnection = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "api";
function createBaseDiscordConnection() {
    return { id: "" };
}
exports.DiscordConnection = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDiscordConnection();
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
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.DiscordConnection.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDiscordConnection();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseStripeConnection() {
    return {
        customerId: undefined,
        subscriptionId: undefined,
        priceId: undefined,
        tierLevel: undefined,
        tierName: undefined,
        latestWebhookTimestamp: 0,
    };
}
exports.StripeConnection = {
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
        if (message.latestWebhookTimestamp !== 0) {
            writer.uint32(48).uint64(message.latestWebhookTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStripeConnection();
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
                    message.latestWebhookTimestamp = longToNumber(reader.uint64());
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
            latestWebhookTimestamp: isSet(object.latestWebhookTimestamp) ? Number(object.latestWebhookTimestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.customerId !== undefined && (obj.customerId = message.customerId);
        message.subscriptionId !== undefined && (obj.subscriptionId = message.subscriptionId);
        message.priceId !== undefined && (obj.priceId = message.priceId);
        message.tierLevel !== undefined && (obj.tierLevel = Math.round(message.tierLevel));
        message.tierName !== undefined && (obj.tierName = message.tierName);
        message.latestWebhookTimestamp !== undefined &&
            (obj.latestWebhookTimestamp = Math.round(message.latestWebhookTimestamp));
        return obj;
    },
    create(base) {
        return exports.StripeConnection.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStripeConnection();
        message.customerId = object.customerId ?? undefined;
        message.subscriptionId = object.subscriptionId ?? undefined;
        message.priceId = object.priceId ?? undefined;
        message.tierLevel = object.tierLevel ?? undefined;
        message.tierName = object.tierName ?? undefined;
        message.latestWebhookTimestamp = object.latestWebhookTimestamp ?? 0;
        return message;
    },
};
function createBaseUserConnections() {
    return { discord: undefined, stripe: undefined };
}
exports.UserConnections = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.discord !== undefined) {
            exports.DiscordConnection.encode(message.discord, writer.uint32(10).fork()).ldelim();
        }
        if (message.stripe !== undefined) {
            exports.StripeConnection.encode(message.stripe, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserConnections();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.discord = exports.DiscordConnection.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.stripe = exports.StripeConnection.decode(reader, reader.uint32());
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
            discord: isSet(object.discord) ? exports.DiscordConnection.fromJSON(object.discord) : undefined,
            stripe: isSet(object.stripe) ? exports.StripeConnection.fromJSON(object.stripe) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.discord !== undefined &&
            (obj.discord = message.discord ? exports.DiscordConnection.toJSON(message.discord) : undefined);
        message.stripe !== undefined && (obj.stripe = message.stripe ? exports.StripeConnection.toJSON(message.stripe) : undefined);
        return obj;
    },
    create(base) {
        return exports.UserConnections.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserConnections();
        message.discord = (object.discord !== undefined && object.discord !== null)
            ? exports.DiscordConnection.fromPartial(object.discord)
            : undefined;
        message.stripe = (object.stripe !== undefined && object.stripe !== null)
            ? exports.StripeConnection.fromPartial(object.stripe)
            : undefined;
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
