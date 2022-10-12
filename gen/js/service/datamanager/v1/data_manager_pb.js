// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "service/datamanager/v1/data_manager.proto" (package "viam.service.datamanager.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "service/datamanager/v1/data_manager.proto" (package "viam.service.datamanager.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class SyncRequest$Type extends MessageType {
    constructor() {
        super("viam.service.datamanager.v1.SyncRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.datamanager.v1.SyncRequest
 */
export const SyncRequest = new SyncRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SyncResponse$Type extends MessageType {
    constructor() {
        super("viam.service.datamanager.v1.SyncResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.datamanager.v1.SyncResponse
 */
export const SyncResponse = new SyncResponse$Type();
/**
 * @generated ServiceType for protobuf service viam.service.datamanager.v1.DataManagerService
 */
export const DataManagerService = new ServiceType("viam.service.datamanager.v1.DataManagerService", [
    { name: "Sync", options: { "google.api.http": { post: "/viam/api/v1/service/datamanager/{name}/datasync" } }, I: SyncRequest, O: SyncResponse }
]);
