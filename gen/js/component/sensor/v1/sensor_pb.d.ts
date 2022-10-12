// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "component/sensor/v1/sensor.proto" (package "viam.component.sensor.v1", syntax proto3)
// tslint:disable
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
declare class GetReadingsRequest$Type extends MessageType<GetReadingsRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.component.sensor.v1.GetReadingsRequest
 */
export declare const GetReadingsRequest: GetReadingsRequest$Type;
declare class GetReadingsResponse$Type extends MessageType<GetReadingsResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message viam.component.sensor.v1.GetReadingsResponse
 */
export declare const GetReadingsResponse: GetReadingsResponse$Type;
/**
 * @generated ServiceType for protobuf service viam.component.sensor.v1.SensorService
 */
export declare const SensorService: any;
export {};
