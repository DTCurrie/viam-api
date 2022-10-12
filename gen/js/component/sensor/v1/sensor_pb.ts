// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "component/sensor/v1/sensor.proto" (package "viam.component.sensor.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { Value } from "../../../google/protobuf/struct_pb";
/**
 * @generated from protobuf message viam.component.sensor.v1.GetReadingsRequest
 */
export interface GetReadingsRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message viam.component.sensor.v1.GetReadingsResponse
 */
export interface GetReadingsResponse {
    /**
     * @generated from protobuf field: map<string, google.protobuf.Value> readings = 1;
     */
    readings: {
        [key: string]: Value;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GetReadingsRequest$Type extends MessageType<GetReadingsRequest> {
    constructor() {
        super("viam.component.sensor.v1.GetReadingsRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.sensor.v1.GetReadingsRequest
 */
export const GetReadingsRequest = new GetReadingsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetReadingsResponse$Type extends MessageType<GetReadingsResponse> {
    constructor() {
        super("viam.component.sensor.v1.GetReadingsResponse", [
            { no: 1, name: "readings", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => Value } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.component.sensor.v1.GetReadingsResponse
 */
export const GetReadingsResponse = new GetReadingsResponse$Type();
/**
 * @generated ServiceType for protobuf service viam.component.sensor.v1.SensorService
 */
export const SensorService = new ServiceType("viam.component.sensor.v1.SensorService", [
    { name: "GetReadings", options: { "google.api.http": { get: "/viam/api/v1/component/sensor/{name}/readings" } }, I: GetReadingsRequest, O: GetReadingsResponse }
]);
