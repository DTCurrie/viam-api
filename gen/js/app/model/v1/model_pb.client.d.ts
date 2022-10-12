// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "app/model/v1/model.proto" (package "viam.app.model.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { DeployResponse } from "./model_pb";
import type { DeployRequest } from "./model_pb";
import type { DeleteResponse } from "./model_pb";
import type { DeleteRequest } from "./model_pb";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { UploadResponse } from "./model_pb";
import type { UploadRequest } from "./model_pb";
import type { ClientStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service viam.app.model.v1.ModelService
 */
export interface IModelServiceClient {
    /**
     * @generated from protobuf rpc: Upload(stream viam.app.model.v1.UploadRequest) returns (viam.app.model.v1.UploadResponse);
     */
    upload(options?: RpcOptions): ClientStreamingCall<UploadRequest, UploadResponse>;
    /**
     * @generated from protobuf rpc: Delete(viam.app.model.v1.DeleteRequest) returns (viam.app.model.v1.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
    /**
     * @generated from protobuf rpc: Deploy(viam.app.model.v1.DeployRequest) returns (viam.app.model.v1.DeployResponse);
     */
    deploy(input: DeployRequest, options?: RpcOptions): UnaryCall<DeployRequest, DeployResponse>;
}
/**
 * @generated from protobuf service viam.app.model.v1.ModelService
 */
export declare class ModelServiceClient implements IModelServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: Upload(stream viam.app.model.v1.UploadRequest) returns (viam.app.model.v1.UploadResponse);
     */
    upload(options?: RpcOptions): ClientStreamingCall<UploadRequest, UploadResponse>;
    /**
     * @generated from protobuf rpc: Delete(viam.app.model.v1.DeleteRequest) returns (viam.app.model.v1.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
    /**
     * @generated from protobuf rpc: Deploy(viam.app.model.v1.DeployRequest) returns (viam.app.model.v1.DeployResponse);
     */
    deploy(input: DeployRequest, options?: RpcOptions): UnaryCall<DeployRequest, DeployResponse>;
}
