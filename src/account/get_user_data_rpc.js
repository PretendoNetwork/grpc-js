"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDataResponse = exports.GetUserDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const mii_1 = require("./mii");
exports.protobufPackage = "account";
function createBaseGetUserDataRequest() {
    return { pid: 0 };
}
exports.GetUserDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pid !== 0) {
            writer.uint32(8).uint32(message.pid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.pid = reader.uint32();
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
        return { pid: isSet(object.pid) ? Number(object.pid) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.pid !== undefined && (obj.pid = Math.round(message.pid));
        return obj;
    },
    create(base) {
        return exports.GetUserDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserDataRequest();
        message.pid = object.pid ?? 0;
        return message;
    },
};
function createBaseGetUserDataResponse() {
    return {
        deleted: false,
        pid: 0,
        username: "",
        accessLevel: 0,
        serverAccessLevel: "",
        mii: undefined,
        creationDate: "",
        birthdate: "",
        gender: "",
        country: "",
        language: "",
        emailAddress: "",
        tierName: "",
    };
}
exports.GetUserDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deleted === true) {
            writer.uint32(8).bool(message.deleted);
        }
        if (message.pid !== 0) {
            writer.uint32(16).uint32(message.pid);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        if (message.accessLevel !== 0) {
            writer.uint32(32).uint32(message.accessLevel);
        }
        if (message.serverAccessLevel !== "") {
            writer.uint32(42).string(message.serverAccessLevel);
        }
        if (message.mii !== undefined) {
            mii_1.Mii.encode(message.mii, writer.uint32(50).fork()).ldelim();
        }
        if (message.creationDate !== "") {
            writer.uint32(58).string(message.creationDate);
        }
        if (message.birthdate !== "") {
            writer.uint32(66).string(message.birthdate);
        }
        if (message.gender !== "") {
            writer.uint32(74).string(message.gender);
        }
        if (message.country !== "") {
            writer.uint32(82).string(message.country);
        }
        if (message.language !== "") {
            writer.uint32(90).string(message.language);
        }
        if (message.emailAddress !== "") {
            writer.uint32(98).string(message.emailAddress);
        }
        if (message.tierName !== "") {
            writer.uint32(106).string(message.tierName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    if (tag != 16) {
                        break;
                    }
                    message.pid = reader.uint32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.accessLevel = reader.uint32();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.serverAccessLevel = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.mii = mii_1.Mii.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.creationDate = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.birthdate = reader.string();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.gender = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.country = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.emailAddress = reader.string();
                    continue;
                case 13:
                    if (tag != 106) {
                        break;
                    }
                    message.tierName = reader.string();
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
            deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
            pid: isSet(object.pid) ? Number(object.pid) : 0,
            username: isSet(object.username) ? String(object.username) : "",
            accessLevel: isSet(object.accessLevel) ? Number(object.accessLevel) : 0,
            serverAccessLevel: isSet(object.serverAccessLevel) ? String(object.serverAccessLevel) : "",
            mii: isSet(object.mii) ? mii_1.Mii.fromJSON(object.mii) : undefined,
            creationDate: isSet(object.creationDate) ? String(object.creationDate) : "",
            birthdate: isSet(object.birthdate) ? String(object.birthdate) : "",
            gender: isSet(object.gender) ? String(object.gender) : "",
            country: isSet(object.country) ? String(object.country) : "",
            language: isSet(object.language) ? String(object.language) : "",
            emailAddress: isSet(object.emailAddress) ? String(object.emailAddress) : "",
            tierName: isSet(object.tierName) ? String(object.tierName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.deleted !== undefined && (obj.deleted = message.deleted);
        message.pid !== undefined && (obj.pid = Math.round(message.pid));
        message.username !== undefined && (obj.username = message.username);
        message.accessLevel !== undefined && (obj.accessLevel = Math.round(message.accessLevel));
        message.serverAccessLevel !== undefined && (obj.serverAccessLevel = message.serverAccessLevel);
        message.mii !== undefined && (obj.mii = message.mii ? mii_1.Mii.toJSON(message.mii) : undefined);
        message.creationDate !== undefined && (obj.creationDate = message.creationDate);
        message.birthdate !== undefined && (obj.birthdate = message.birthdate);
        message.gender !== undefined && (obj.gender = message.gender);
        message.country !== undefined && (obj.country = message.country);
        message.language !== undefined && (obj.language = message.language);
        message.emailAddress !== undefined && (obj.emailAddress = message.emailAddress);
        message.tierName !== undefined && (obj.tierName = message.tierName);
        return obj;
    },
    create(base) {
        return exports.GetUserDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserDataResponse();
        message.deleted = object.deleted ?? false;
        message.pid = object.pid ?? 0;
        message.username = object.username ?? "";
        message.accessLevel = object.accessLevel ?? 0;
        message.serverAccessLevel = object.serverAccessLevel ?? "";
        message.mii = (object.mii !== undefined && object.mii !== null) ? mii_1.Mii.fromPartial(object.mii) : undefined;
        message.creationDate = object.creationDate ?? "";
        message.birthdate = object.birthdate ?? "";
        message.gender = object.gender ?? "";
        message.country = object.country ?? "";
        message.language = object.language ?? "";
        message.emailAddress = object.emailAddress ?? "";
        message.tierName = object.tierName ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
