// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "service/slam/v1/slam.proto" (package "viam.service.slam.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "service/slam/v1/slam.proto" (package "viam.service.slam.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { PointCloudObject } from "../../../common/v1/common_pb";
import { Pose } from "../../../common/v1/common_pb";
import { Struct } from "../../../google/protobuf/struct_pb";
import { PoseInFrame } from "../../../common/v1/common_pb";
// @generated message type with reflection information, may provide speed optimized methods
class GetPositionRequest$Type extends MessageType {
    constructor() {
        super("viam.service.slam.v1.GetPositionRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.slam.v1.GetPositionRequest
 */
export const GetPositionRequest = new GetPositionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPositionResponse$Type extends MessageType {
    constructor() {
        super("viam.service.slam.v1.GetPositionResponse", [
            { no: 1, name: "pose", kind: "message", T: () => PoseInFrame },
            { no: 99, name: "extra", kind: "message", T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.slam.v1.GetPositionResponse
 */
export const GetPositionResponse = new GetPositionResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMapRequest$Type extends MessageType {
    constructor() {
        super("viam.service.slam.v1.GetMapRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "mime_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "camera_position", kind: "message", T: () => Pose },
            { no: 4, name: "include_robot_marker", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.slam.v1.GetMapRequest
 */
export const GetMapRequest = new GetMapRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMapResponse$Type extends MessageType {
    constructor() {
        super("viam.service.slam.v1.GetMapResponse", [
            { no: 1, name: "point_cloud", kind: "message", oneof: "map", T: () => PointCloudObject },
            { no: 2, name: "image", kind: "scalar", oneof: "map", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "mime_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.slam.v1.GetMapResponse
 */
export const GetMapResponse = new GetMapResponse$Type();
/**
 * @generated ServiceType for protobuf service viam.service.slam.v1.SLAMService
 */
export const SLAMService = new ServiceType("viam.service.slam.v1.SLAMService", [
    { name: "GetPosition", options: { "google.api.http": { get: "/viam/api/v1/service/slam/{name}/position" } }, I: GetPositionRequest, O: GetPositionResponse },
    { name: "GetMap", options: { "google.api.http": { get: "/viam/api/v1/service/slam/{name}/map" } }, I: GetMapRequest, O: GetMapResponse }
]);
