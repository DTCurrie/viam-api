// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "service/navigation/v1/navigation.proto" (package "viam.service.navigation.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "service/navigation/v1/navigation.proto" (package "viam.service.navigation.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { GeoPoint } from "../../../common/v1/common_pb";
/**
 * @generated from protobuf enum viam.service.navigation.v1.Mode
 */
export var Mode;
(function (Mode) {
    /**
     * @generated from protobuf enum value: MODE_UNSPECIFIED = 0;
     */
    Mode[Mode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: MODE_MANUAL = 1;
     */
    Mode[Mode["MANUAL"] = 1] = "MANUAL";
    /**
     * @generated from protobuf enum value: MODE_WAYPOINT = 2;
     */
    Mode[Mode["WAYPOINT"] = 2] = "WAYPOINT";
})(Mode || (Mode = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetModeRequest$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.GetModeRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.GetModeRequest
 */
export const GetModeRequest = new GetModeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetModeResponse$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.GetModeResponse", [
            { no: 1, name: "mode", kind: "enum", T: () => ["viam.service.navigation.v1.Mode", Mode, "MODE_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.GetModeResponse
 */
export const GetModeResponse = new GetModeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetModeRequest$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.SetModeRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "mode", kind: "enum", T: () => ["viam.service.navigation.v1.Mode", Mode, "MODE_"] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.SetModeRequest
 */
export const SetModeRequest = new SetModeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetModeResponse$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.SetModeResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.SetModeResponse
 */
export const SetModeResponse = new SetModeResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Waypoint$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.Waypoint", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "location", kind: "message", T: () => GeoPoint }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.Waypoint
 */
export const Waypoint = new Waypoint$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetLocationRequest$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.GetLocationRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.GetLocationRequest
 */
export const GetLocationRequest = new GetLocationRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetLocationResponse$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.GetLocationResponse", [
            { no: 1, name: "location", kind: "message", T: () => GeoPoint }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.GetLocationResponse
 */
export const GetLocationResponse = new GetLocationResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetWaypointsRequest$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.GetWaypointsRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.GetWaypointsRequest
 */
export const GetWaypointsRequest = new GetWaypointsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetWaypointsResponse$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.GetWaypointsResponse", [
            { no: 1, name: "waypoints", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Waypoint }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.GetWaypointsResponse
 */
export const GetWaypointsResponse = new GetWaypointsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddWaypointRequest$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.AddWaypointRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "location", kind: "message", T: () => GeoPoint }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.AddWaypointRequest
 */
export const AddWaypointRequest = new AddWaypointRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddWaypointResponse$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.AddWaypointResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.AddWaypointResponse
 */
export const AddWaypointResponse = new AddWaypointResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveWaypointRequest$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.RemoveWaypointRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.RemoveWaypointRequest
 */
export const RemoveWaypointRequest = new RemoveWaypointRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveWaypointResponse$Type extends MessageType {
    constructor() {
        super("viam.service.navigation.v1.RemoveWaypointResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.navigation.v1.RemoveWaypointResponse
 */
export const RemoveWaypointResponse = new RemoveWaypointResponse$Type();
/**
 * @generated ServiceType for protobuf service viam.service.navigation.v1.NavigationService
 */
export const NavigationService = new ServiceType("viam.service.navigation.v1.NavigationService", [
    { name: "GetMode", options: { "google.api.http": { get: "/viam/api/v1/service/navigation/{name}/mode" } }, I: GetModeRequest, O: GetModeResponse },
    { name: "SetMode", options: { "google.api.http": { put: "/viam/api/v1/service/navigation/{name}/mode" } }, I: SetModeRequest, O: SetModeResponse },
    { name: "GetLocation", options: { "google.api.http": { get: "/viam/api/v1/service/navigation/{name}/location" } }, I: GetLocationRequest, O: GetLocationResponse },
    { name: "GetWaypoints", options: { "google.api.http": { get: "/viam/api/v1/service/navigation/{name}/waypoints" } }, I: GetWaypointsRequest, O: GetWaypointsResponse },
    { name: "AddWaypoint", options: { "google.api.http": { post: "/viam/api/v1/service/navigation/{name}/waypoints" } }, I: AddWaypointRequest, O: AddWaypointResponse },
    { name: "RemoveWaypoint", options: { "google.api.http": { delete: "/viam/api/v1/service/navigation/{name}/waypoints/{id}" } }, I: RemoveWaypointRequest, O: RemoveWaypointResponse }
]);
