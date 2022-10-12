// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "component/posetracker/v1/pose_tracker.proto" (package "viam.component.posetracker.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { PoseInFrame } from "../../../common/v1/common_pb";
/**
 * @generated from protobuf message viam.component.posetracker.v1.GetPosesRequest
 */
export interface GetPosesRequest {
    /**
     * Name of the pose tracker
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Names of the bodies whose poses are being requested. In the event
     * this parameter is not supplied or is an empty list, all available
     * poses are returned
     *
     * @generated from protobuf field: repeated string body_names = 2;
     */
    bodyNames: string[];
}
/**
 * @generated from protobuf message viam.component.posetracker.v1.GetPosesResponse
 */
export interface GetPosesResponse {
    /**
     * Mapping of each body name to the pose representing the center of the body.
     *
     * @generated from protobuf field: map<string, viam.common.v1.PoseInFrame> body_poses = 1;
     */
    bodyPoses: {
        [key: string]: PoseInFrame;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GetPosesRequest$Type extends MessageType<GetPosesRequest> {
    constructor() {
        super("viam.component.posetracker.v1.GetPosesRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "body_names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.posetracker.v1.GetPosesRequest
 */
export const GetPosesRequest = new GetPosesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPosesResponse$Type extends MessageType<GetPosesResponse> {
    constructor() {
        super("viam.component.posetracker.v1.GetPosesResponse", [
            { no: 1, name: "body_poses", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => PoseInFrame } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.posetracker.v1.GetPosesResponse
 */
export const GetPosesResponse = new GetPosesResponse$Type();
/**
 * @generated ServiceType for protobuf service viam.component.posetracker.v1.PoseTrackerService
 */
export const PoseTrackerService = new ServiceType("viam.component.posetracker.v1.PoseTrackerService", [
    { name: "GetPoses", options: { "google.api.http": { get: "/viam/api/v1/component/pose_tracker/{name}/poses" } }, I: GetPosesRequest, O: GetPosesResponse }
]);
