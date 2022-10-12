// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "component/servo/v1/servo.proto" (package "viam.component.servo.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "component/servo/v1/servo.proto" (package "viam.component.servo.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class MoveRequest$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.MoveRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "angle_deg", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.MoveRequest
 */
export const MoveRequest = new MoveRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MoveResponse$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.MoveResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.MoveResponse
 */
export const MoveResponse = new MoveResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPositionRequest$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.GetPositionRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.GetPositionRequest
 */
export const GetPositionRequest = new GetPositionRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPositionResponse$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.GetPositionResponse", [
            { no: 1, name: "position_deg", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.GetPositionResponse
 */
export const GetPositionResponse = new GetPositionResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StopRequest$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.StopRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.StopRequest
 */
export const StopRequest = new StopRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StopResponse$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.StopResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.StopResponse
 */
export const StopResponse = new StopResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Status$Type extends MessageType {
    constructor() {
        super("viam.component.servo.v1.Status", [
            { no: 1, name: "position_deg", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_moving", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.servo.v1.Status
 */
export const Status = new Status$Type();
/**
 * @generated ServiceType for protobuf service viam.component.servo.v1.ServoService
 */
export const ServoService = new ServiceType("viam.component.servo.v1.ServoService", [
    { name: "Move", options: { "google.api.http": { put: "/viam/api/v1/component/servo/{name}/move" } }, I: MoveRequest, O: MoveResponse },
    { name: "GetPosition", options: { "google.api.http": { get: "/viam/api/v1/component/servo/{name}/position" } }, I: GetPositionRequest, O: GetPositionResponse },
    { name: "Stop", options: { "google.api.http": { post: "/viam/api/v1/component/servo/{name}/stop" } }, I: StopRequest, O: StopResponse }
]);
