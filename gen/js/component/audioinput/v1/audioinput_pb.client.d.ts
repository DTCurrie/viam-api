// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "component/audioinput/v1/audioinput.proto" (package "viam.component.audioinput.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { HttpBody } from "../../../google/api/httpbody_pb";
import type { RecordRequest } from "./audioinput_pb";
import type { PropertiesResponse } from "./audioinput_pb";
import type { PropertiesRequest } from "./audioinput_pb";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { ChunksResponse } from "./audioinput_pb";
import type { ChunksRequest } from "./audioinput_pb";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * An AudioInputService services all audio inputs associated with a robot
 *
 * @generated from protobuf service viam.component.audioinput.v1.AudioInputService
 */
export interface IAudioInputServiceClient {
    /**
     * Chunks returns audio chunks forever from an audio input of the underlying robot.
     *
     * @generated from protobuf rpc: Chunks(viam.component.audioinput.v1.ChunksRequest) returns (stream viam.component.audioinput.v1.ChunksResponse);
     */
    chunks(input: ChunksRequest, options?: RpcOptions): ServerStreamingCall<ChunksRequest, ChunksResponse>;
    /**
     * Properties returns properties of an audio input of the underlying robot.
     *
     * @generated from protobuf rpc: Properties(viam.component.audioinput.v1.PropertiesRequest) returns (viam.component.audioinput.v1.PropertiesResponse);
     */
    properties(input: PropertiesRequest, options?: RpcOptions): UnaryCall<PropertiesRequest, PropertiesResponse>;
    /**
     * Record records audio from an audio input of the underlying robot
     * to an HTTP response. A specific MIME type cannot be requested and may not necessarily
     * be the same one returned each time.
     *
     * @generated from protobuf rpc: Record(viam.component.audioinput.v1.RecordRequest) returns (google.api.HttpBody);
     */
    record(input: RecordRequest, options?: RpcOptions): UnaryCall<RecordRequest, HttpBody>;
}
/**
 * An AudioInputService services all audio inputs associated with a robot
 *
 * @generated from protobuf service viam.component.audioinput.v1.AudioInputService
 */
export declare class AudioInputServiceClient implements IAudioInputServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * Chunks returns audio chunks forever from an audio input of the underlying robot.
     *
     * @generated from protobuf rpc: Chunks(viam.component.audioinput.v1.ChunksRequest) returns (stream viam.component.audioinput.v1.ChunksResponse);
     */
    chunks(input: ChunksRequest, options?: RpcOptions): ServerStreamingCall<ChunksRequest, ChunksResponse>;
    /**
     * Properties returns properties of an audio input of the underlying robot.
     *
     * @generated from protobuf rpc: Properties(viam.component.audioinput.v1.PropertiesRequest) returns (viam.component.audioinput.v1.PropertiesResponse);
     */
    properties(input: PropertiesRequest, options?: RpcOptions): UnaryCall<PropertiesRequest, PropertiesResponse>;
    /**
     * Record records audio from an audio input of the underlying robot
     * to an HTTP response. A specific MIME type cannot be requested and may not necessarily
     * be the same one returned each time.
     *
     * @generated from protobuf rpc: Record(viam.component.audioinput.v1.RecordRequest) returns (google.api.HttpBody);
     */
    record(input: RecordRequest, options?: RpcOptions): UnaryCall<RecordRequest, HttpBody>;
}
