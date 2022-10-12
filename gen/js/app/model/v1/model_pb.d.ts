// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "app/model/v1/model.proto" (package "viam.app.model.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../../google/protobuf/timestamp_pb";
/**
 * @generated from protobuf message viam.app.model.v1.FileData
 */
export interface FileData {
    /**
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array;
}
/**
 * @generated from protobuf message viam.app.model.v1.UploadMetadata
 */
export interface UploadMetadata {
    /**
     * @generated from protobuf field: string org_id = 1;
     */
    orgId: string;
    /**
     * @generated from protobuf field: string model_name = 2;
     */
    modelName: string;
    /**
     * TODO: Determine the format of the associated dataset. Update when it's decided
     * whether it should be by ID or name.
     *
     * @generated from protobuf field: string associated_dataset = 3;
     */
    associatedDataset: string;
}
/**
 * @generated from protobuf message viam.app.model.v1.UploadRequest
 */
export interface UploadRequest {
    /**
     * @generated from protobuf oneof: upload_packet
     */
    uploadPacket: {
        oneofKind: "metadata";
        /**
         * @generated from protobuf field: viam.app.model.v1.UploadMetadata metadata = 1;
         */
        metadata: UploadMetadata;
    } | {
        oneofKind: "fileContents";
        /**
         * @generated from protobuf field: viam.app.model.v1.FileData file_contents = 2;
         */
        fileContents: FileData;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message viam.app.model.v1.DeleteMetadata
 */
export interface DeleteMetadata {
    /**
     * @generated from protobuf field: string org_id = 1;
     */
    orgId: string;
    /**
     * @generated from protobuf field: string model_name = 2;
     */
    modelName: string;
}
/**
 * @generated from protobuf message viam.app.model.v1.DeleteRequest
 */
export interface DeleteRequest {
    /**
     * @generated from protobuf field: viam.app.model.v1.DeleteMetadata metadata = 1;
     */
    metadata?: DeleteMetadata;
}
/**
 * @generated from protobuf message viam.app.model.v1.DeployMetadata
 */
export interface DeployMetadata {
    /**
     * @generated from protobuf field: string model_name = 1;
     */
    modelName: string;
}
/**
 * @generated from protobuf message viam.app.model.v1.DeployRequest
 */
export interface DeployRequest {
    /**
     * @generated from protobuf field: viam.app.model.v1.DeployMetadata metadata = 1;
     */
    metadata?: DeployMetadata;
}
/**
 * @generated from protobuf message viam.app.model.v1.UploadResponse
 */
export interface UploadResponse {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
    /**
     * @generated from protobuf field: viam.app.model.v1.Status status = 2;
     */
    status: Status;
}
/**
 * @generated from protobuf message viam.app.model.v1.DeleteResponse
 */
export interface DeleteResponse {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
    /**
     * @generated from protobuf field: viam.app.model.v1.Status status = 2;
     */
    status: Status;
}
/**
 * @generated from protobuf message viam.app.model.v1.DeployResponse
 */
export interface DeployResponse {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
    /**
     * @generated from protobuf field: viam.app.model.v1.Status status = 2;
     */
    status: Status;
}
/**
 * @generated from protobuf message viam.app.model.v1.SyncedModel
 */
export interface SyncedModel {
    /**
     * @generated from protobuf field: string org_id = 1;
     */
    orgId: string;
    /**
     * @generated from protobuf field: string model_name = 2;
     */
    modelName: string;
    /**
     * @generated from protobuf field: string associated_dataset = 3;
     */
    associatedDataset: string;
    /**
     * @generated from protobuf field: string blob_path = 4;
     */
    blobPath: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp sync_time = 5;
     */
    syncTime?: Timestamp;
}
/**
 * @generated from protobuf enum viam.app.model.v1.Status
 */
export declare enum Status {
    /**
     * buf:lint:ignore ENUM_VALUE_PREFIX
     * buf:lint:ignore ENUM_ZERO_VALUE_SUFFIX
     *
     * @generated from protobuf enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * buf:lint:ignore ENUM_VALUE_PREFIX
     *
     * @generated from protobuf enum value: FAIL = 1;
     */
    FAIL = 1,
    /**
     * buf:lint:ignore ENUM_VALUE_PREFIX
     *
     * @generated from protobuf enum value: OK = 2;
     */
    OK = 2
}
declare class FileData$Type extends MessageType<FileData> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.FileData
 */
export declare const FileData: FileData$Type;
declare class UploadMetadata$Type extends MessageType<UploadMetadata> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.UploadMetadata
 */
export declare const UploadMetadata: UploadMetadata$Type;
declare class UploadRequest$Type extends MessageType<UploadRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.UploadRequest
 */
export declare const UploadRequest: UploadRequest$Type;
declare class DeleteMetadata$Type extends MessageType<DeleteMetadata> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.DeleteMetadata
 */
export declare const DeleteMetadata: DeleteMetadata$Type;
declare class DeleteRequest$Type extends MessageType<DeleteRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.DeleteRequest
 */
export declare const DeleteRequest: DeleteRequest$Type;
declare class DeployMetadata$Type extends MessageType<DeployMetadata> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.DeployMetadata
 */
export declare const DeployMetadata: DeployMetadata$Type;
declare class DeployRequest$Type extends MessageType<DeployRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.DeployRequest
 */
export declare const DeployRequest: DeployRequest$Type;
declare class UploadResponse$Type extends MessageType<UploadResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.UploadResponse
 */
export declare const UploadResponse: UploadResponse$Type;
declare class DeleteResponse$Type extends MessageType<DeleteResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.DeleteResponse
 */
export declare const DeleteResponse: DeleteResponse$Type;
declare class DeployResponse$Type extends MessageType<DeployResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.DeployResponse
 */
export declare const DeployResponse: DeployResponse$Type;
declare class SyncedModel$Type extends MessageType<SyncedModel> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.app.model.v1.SyncedModel
 */
export declare const SyncedModel: SyncedModel$Type;
/**
 * @generated ServiceType for protobuf service viam.app.model.v1.ModelService
 */
export declare const ModelService: any;
export {};
