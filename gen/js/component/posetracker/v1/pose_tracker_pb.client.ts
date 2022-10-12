// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "component/posetracker/v1/pose_tracker.proto" (package "viam.component.posetracker.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { PoseTrackerService } from "./pose_tracker_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetPosesResponse } from "./pose_tracker_pb";
import type { GetPosesRequest } from "./pose_tracker_pb";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * A PoseTrackerService maintains all pose trackers associated with a robot
 *
 * @generated from protobuf service viam.component.posetracker.v1.PoseTrackerService
 */
export interface IPoseTrackerServiceClient {
    /**
     * GetPoses returns the current pose of each body tracked by the pose tracker
     *
     * @generated from protobuf rpc: GetPoses(viam.component.posetracker.v1.GetPosesRequest) returns (viam.component.posetracker.v1.GetPosesResponse);
     */
    getPoses(input: GetPosesRequest, options?: RpcOptions): UnaryCall<GetPosesRequest, GetPosesResponse>;
}
/**
 * A PoseTrackerService maintains all pose trackers associated with a robot
 *
 * @generated from protobuf service viam.component.posetracker.v1.PoseTrackerService
 */
export class PoseTrackerServiceClient implements IPoseTrackerServiceClient, ServiceInfo {
    typeName = PoseTrackerService.typeName;
    methods = PoseTrackerService.methods;
    options = PoseTrackerService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * GetPoses returns the current pose of each body tracked by the pose tracker
     *
     * @generated from protobuf rpc: GetPoses(viam.component.posetracker.v1.GetPosesRequest) returns (viam.component.posetracker.v1.GetPosesResponse);
     */
    getPoses(input: GetPosesRequest, options?: RpcOptions): UnaryCall<GetPosesRequest, GetPosesResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetPosesRequest, GetPosesResponse>("unary", this._transport, method, opt, input);
    }
}
