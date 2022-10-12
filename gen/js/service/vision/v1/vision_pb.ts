// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "service/vision/v1/vision.proto" (package "viam.service.vision.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { PointCloudObject } from "../../../common/v1/common_pb";
import { Struct } from "../../../google/protobuf/struct_pb";
/**
 * @generated from protobuf message viam.service.vision.v1.GetModelParameterSchemaRequest
 */
export interface GetModelParameterSchemaRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of the type of vision model
     *
     * @generated from protobuf field: string model_type = 2;
     */
    modelType: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetModelParameterSchemaResponse
 */
export interface GetModelParameterSchemaResponse {
    /**
     * the parameters as JSON bytes of a jsonschema.Schema
     *
     * @generated from protobuf field: bytes model_parameter_schema = 1;
     */
    modelParameterSchema: Uint8Array;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetDetectorNamesRequest
 */
export interface GetDetectorNamesRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetDetectorNamesResponse
 */
export interface GetDetectorNamesResponse {
    /**
     * detectors in the registry
     *
     * @generated from protobuf field: repeated string detector_names = 1;
     */
    detectorNames: string[];
}
/**
 * @generated from protobuf message viam.service.vision.v1.AddDetectorRequest
 */
export interface AddDetectorRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string detector_name = 2;
     */
    detectorName: string;
    /**
     * @generated from protobuf field: string detector_model_type = 3;
     */
    detectorModelType: string;
    /**
     * @generated from protobuf field: google.protobuf.Struct detector_parameters = 4;
     */
    detectorParameters?: Struct;
}
/**
 * @generated from protobuf message viam.service.vision.v1.AddDetectorResponse
 */
export interface AddDetectorResponse {
}
/**
 * @generated from protobuf message viam.service.vision.v1.RemoveDetectorRequest
 */
export interface RemoveDetectorRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of detector in registry
     *
     * @generated from protobuf field: string detector_name = 2;
     */
    detectorName: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.RemoveDetectorResponse
 */
export interface RemoveDetectorResponse {
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetDetectionsRequest
 */
export interface GetDetectionsRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * the image, encoded as bytes
     *
     * @generated from protobuf field: bytes image = 2;
     */
    image: Uint8Array;
    /**
     * the width of the image
     *
     * @generated from protobuf field: int64 width = 3;
     */
    width: string;
    /**
     * the height of the image
     *
     * @generated from protobuf field: int64 height = 4;
     */
    height: string;
    /**
     * the actual MIME type of image
     *
     * @generated from protobuf field: string mime_type = 5;
     */
    mimeType: string;
    /**
     * name of the registered detector to use
     *
     * @generated from protobuf field: string detector_name = 6;
     */
    detectorName: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetDetectionsResponse
 */
export interface GetDetectionsResponse {
    /**
     * the bounding boxes and labels
     *
     * @generated from protobuf field: repeated viam.service.vision.v1.Detection detections = 1;
     */
    detections: Detection[];
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetDetectionsFromCameraRequest
 */
export interface GetDetectionsFromCameraRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of camera source to use as input
     *
     * @generated from protobuf field: string camera_name = 2;
     */
    cameraName: string;
    /**
     * name of the registered detector to use
     *
     * @generated from protobuf field: string detector_name = 3;
     */
    detectorName: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetDetectionsFromCameraResponse
 */
export interface GetDetectionsFromCameraResponse {
    /**
     * the bounding boxes and labels
     *
     * @generated from protobuf field: repeated viam.service.vision.v1.Detection detections = 1;
     */
    detections: Detection[];
}
/**
 * @generated from protobuf message viam.service.vision.v1.Detection
 */
export interface Detection {
    /**
     * the four corners of the box
     *
     * @generated from protobuf field: optional int64 x_min = 1;
     */
    xMin?: string;
    /**
     * @generated from protobuf field: optional int64 y_min = 2;
     */
    yMin?: string;
    /**
     * @generated from protobuf field: optional int64 x_max = 3;
     */
    xMax?: string;
    /**
     * @generated from protobuf field: optional int64 y_max = 4;
     */
    yMax?: string;
    /**
     * the confidence of the detection
     *
     * @generated from protobuf field: double confidence = 5;
     */
    confidence: number;
    /**
     * label associated with the detected object
     *
     * @generated from protobuf field: string class_name = 6;
     */
    className: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetClassifierNamesRequest
 */
export interface GetClassifierNamesRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetClassifierNamesResponse
 */
export interface GetClassifierNamesResponse {
    /**
     * @generated from protobuf field: repeated string classifier_names = 1;
     */
    classifierNames: string[];
}
/**
 * @generated from protobuf message viam.service.vision.v1.AddClassifierRequest
 */
export interface AddClassifierRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of classifier to add to registry
     *
     * @generated from protobuf field: string classifier_name = 2;
     */
    classifierName: string;
    /**
     * the type of classifier
     *
     * @generated from protobuf field: string classifier_model_type = 3;
     */
    classifierModelType: string;
    /**
     * additional parameters
     *
     * @generated from protobuf field: google.protobuf.Struct classifier_parameters = 4;
     */
    classifierParameters?: Struct;
}
/**
 * @generated from protobuf message viam.service.vision.v1.AddClassifierResponse
 */
export interface AddClassifierResponse {
}
/**
 * @generated from protobuf message viam.service.vision.v1.RemoveClassifierRequest
 */
export interface RemoveClassifierRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of the classifier in registry
     *
     * @generated from protobuf field: string classifier_name = 2;
     */
    classifierName: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.RemoveClassifierResponse
 */
export interface RemoveClassifierResponse {
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetClassificationsRequest
 */
export interface GetClassificationsRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * the image encoded as bytes
     *
     * @generated from protobuf field: bytes image = 2;
     */
    image: Uint8Array;
    /**
     * the width of the image
     *
     * @generated from protobuf field: int32 width = 3;
     */
    width: number;
    /**
     * the height of the image
     *
     * @generated from protobuf field: int32 height = 4;
     */
    height: number;
    /**
     * the actual MIME type of image
     *
     * @generated from protobuf field: string mime_type = 5;
     */
    mimeType: string;
    /**
     * the name of the registered classifier
     *
     * @generated from protobuf field: string classifier_name = 6;
     */
    classifierName: string;
    /**
     * the number of classifications desired
     *
     * @generated from protobuf field: int32 n = 7;
     */
    n: number;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetClassificationsResponse
 */
export interface GetClassificationsResponse {
    /**
     * @generated from protobuf field: repeated viam.service.vision.v1.Classification classifications = 1;
     */
    classifications: Classification[];
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetClassificationsFromCameraRequest
 */
export interface GetClassificationsFromCameraRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * the image encoded as bytes
     *
     * @generated from protobuf field: string camera_name = 2;
     */
    cameraName: string;
    /**
     * the name of the registered classifier
     *
     * @generated from protobuf field: string classifier_name = 3;
     */
    classifierName: string;
    /**
     * the number of classifications desired
     *
     * @generated from protobuf field: int32 n = 4;
     */
    n: number;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetClassificationsFromCameraResponse
 */
export interface GetClassificationsFromCameraResponse {
    /**
     * @generated from protobuf field: repeated viam.service.vision.v1.Classification classifications = 1;
     */
    classifications: Classification[];
}
/**
 * the general form of the output from a classifier
 *
 * @generated from protobuf message viam.service.vision.v1.Classification
 */
export interface Classification {
    /**
     * the class name
     *
     * @generated from protobuf field: string class_name = 1;
     */
    className: string;
    /**
     * the confidence score of the classification
     *
     * @generated from protobuf field: double confidence = 2;
     */
    confidence: number;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetSegmenterNamesRequest
 */
export interface GetSegmenterNamesRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetSegmenterNamesResponse
 */
export interface GetSegmenterNamesResponse {
    /**
     * segmenters in the registry
     *
     * @generated from protobuf field: repeated string segmenter_names = 1;
     */
    segmenterNames: string[];
}
/**
 * @generated from protobuf message viam.service.vision.v1.AddSegmenterRequest
 */
export interface AddSegmenterRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of the segmenter
     *
     * @generated from protobuf field: string segmenter_name = 2;
     */
    segmenterName: string;
    /**
     * name of the segmenter model
     *
     * @generated from protobuf field: string segmenter_model_type = 3;
     */
    segmenterModelType: string;
    /**
     * parameters of the segmenter model
     *
     * @generated from protobuf field: google.protobuf.Struct segmenter_parameters = 4;
     */
    segmenterParameters?: Struct;
}
/**
 * @generated from protobuf message viam.service.vision.v1.AddSegmenterResponse
 */
export interface AddSegmenterResponse {
}
/**
 * @generated from protobuf message viam.service.vision.v1.RemoveSegmenterRequest
 */
export interface RemoveSegmenterRequest {
    /**
     * name of the vision service
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * name of segmenter in registry
     *
     * @generated from protobuf field: string segmenter_name = 2;
     */
    segmenterName: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.RemoveSegmenterResponse
 */
export interface RemoveSegmenterResponse {
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetObjectPointCloudsRequest
 */
export interface GetObjectPointCloudsRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Name of a camera
     *
     * @generated from protobuf field: string camera_name = 2;
     */
    cameraName: string;
    /**
     * Name of the segmentation algorithm
     *
     * @generated from protobuf field: string segmenter_name = 3;
     */
    segmenterName: string;
    /**
     * Requested MIME type of response
     *
     * @generated from protobuf field: string mime_type = 4;
     */
    mimeType: string;
}
/**
 * @generated from protobuf message viam.service.vision.v1.GetObjectPointCloudsResponse
 */
export interface GetObjectPointCloudsResponse {
    /**
     * Actual MIME type of response
     *
     * @generated from protobuf field: string mime_type = 1;
     */
    mimeType: string;
    /**
     * List of objects in the scene
     *
     * @generated from protobuf field: repeated viam.common.v1.PointCloudObject objects = 2;
     */
    objects: PointCloudObject[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GetModelParameterSchemaRequest$Type extends MessageType<GetModelParameterSchemaRequest> {
    constructor() {
        super("viam.service.vision.v1.GetModelParameterSchemaRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "model_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetModelParameterSchemaRequest
 */
export const GetModelParameterSchemaRequest = new GetModelParameterSchemaRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetModelParameterSchemaResponse$Type extends MessageType<GetModelParameterSchemaResponse> {
    constructor() {
        super("viam.service.vision.v1.GetModelParameterSchemaResponse", [
            { no: 1, name: "model_parameter_schema", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetModelParameterSchemaResponse
 */
export const GetModelParameterSchemaResponse = new GetModelParameterSchemaResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDetectorNamesRequest$Type extends MessageType<GetDetectorNamesRequest> {
    constructor() {
        super("viam.service.vision.v1.GetDetectorNamesRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetDetectorNamesRequest
 */
export const GetDetectorNamesRequest = new GetDetectorNamesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDetectorNamesResponse$Type extends MessageType<GetDetectorNamesResponse> {
    constructor() {
        super("viam.service.vision.v1.GetDetectorNamesResponse", [
            { no: 1, name: "detector_names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetDetectorNamesResponse
 */
export const GetDetectorNamesResponse = new GetDetectorNamesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddDetectorRequest$Type extends MessageType<AddDetectorRequest> {
    constructor() {
        super("viam.service.vision.v1.AddDetectorRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "detector_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "detector_model_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "detector_parameters", kind: "message", T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.AddDetectorRequest
 */
export const AddDetectorRequest = new AddDetectorRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddDetectorResponse$Type extends MessageType<AddDetectorResponse> {
    constructor() {
        super("viam.service.vision.v1.AddDetectorResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.AddDetectorResponse
 */
export const AddDetectorResponse = new AddDetectorResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveDetectorRequest$Type extends MessageType<RemoveDetectorRequest> {
    constructor() {
        super("viam.service.vision.v1.RemoveDetectorRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "detector_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.RemoveDetectorRequest
 */
export const RemoveDetectorRequest = new RemoveDetectorRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveDetectorResponse$Type extends MessageType<RemoveDetectorResponse> {
    constructor() {
        super("viam.service.vision.v1.RemoveDetectorResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.RemoveDetectorResponse
 */
export const RemoveDetectorResponse = new RemoveDetectorResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDetectionsRequest$Type extends MessageType<GetDetectionsRequest> {
    constructor() {
        super("viam.service.vision.v1.GetDetectionsRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "image", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "width", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "height", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "mime_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "detector_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetDetectionsRequest
 */
export const GetDetectionsRequest = new GetDetectionsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDetectionsResponse$Type extends MessageType<GetDetectionsResponse> {
    constructor() {
        super("viam.service.vision.v1.GetDetectionsResponse", [
            { no: 1, name: "detections", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Detection }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetDetectionsResponse
 */
export const GetDetectionsResponse = new GetDetectionsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDetectionsFromCameraRequest$Type extends MessageType<GetDetectionsFromCameraRequest> {
    constructor() {
        super("viam.service.vision.v1.GetDetectionsFromCameraRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "camera_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "detector_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetDetectionsFromCameraRequest
 */
export const GetDetectionsFromCameraRequest = new GetDetectionsFromCameraRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDetectionsFromCameraResponse$Type extends MessageType<GetDetectionsFromCameraResponse> {
    constructor() {
        super("viam.service.vision.v1.GetDetectionsFromCameraResponse", [
            { no: 1, name: "detections", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Detection }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetDetectionsFromCameraResponse
 */
export const GetDetectionsFromCameraResponse = new GetDetectionsFromCameraResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Detection$Type extends MessageType<Detection> {
    constructor() {
        super("viam.service.vision.v1.Detection", [
            { no: 1, name: "x_min", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "y_min", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "x_max", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "y_max", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "confidence", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "class_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.Detection
 */
export const Detection = new Detection$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetClassifierNamesRequest$Type extends MessageType<GetClassifierNamesRequest> {
    constructor() {
        super("viam.service.vision.v1.GetClassifierNamesRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetClassifierNamesRequest
 */
export const GetClassifierNamesRequest = new GetClassifierNamesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetClassifierNamesResponse$Type extends MessageType<GetClassifierNamesResponse> {
    constructor() {
        super("viam.service.vision.v1.GetClassifierNamesResponse", [
            { no: 1, name: "classifier_names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetClassifierNamesResponse
 */
export const GetClassifierNamesResponse = new GetClassifierNamesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddClassifierRequest$Type extends MessageType<AddClassifierRequest> {
    constructor() {
        super("viam.service.vision.v1.AddClassifierRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "classifier_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "classifier_model_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "classifier_parameters", kind: "message", T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.AddClassifierRequest
 */
export const AddClassifierRequest = new AddClassifierRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddClassifierResponse$Type extends MessageType<AddClassifierResponse> {
    constructor() {
        super("viam.service.vision.v1.AddClassifierResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.AddClassifierResponse
 */
export const AddClassifierResponse = new AddClassifierResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveClassifierRequest$Type extends MessageType<RemoveClassifierRequest> {
    constructor() {
        super("viam.service.vision.v1.RemoveClassifierRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "classifier_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.RemoveClassifierRequest
 */
export const RemoveClassifierRequest = new RemoveClassifierRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveClassifierResponse$Type extends MessageType<RemoveClassifierResponse> {
    constructor() {
        super("viam.service.vision.v1.RemoveClassifierResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.RemoveClassifierResponse
 */
export const RemoveClassifierResponse = new RemoveClassifierResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetClassificationsRequest$Type extends MessageType<GetClassificationsRequest> {
    constructor() {
        super("viam.service.vision.v1.GetClassificationsRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "image", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "width", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "height", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "mime_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "classifier_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "n", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetClassificationsRequest
 */
export const GetClassificationsRequest = new GetClassificationsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetClassificationsResponse$Type extends MessageType<GetClassificationsResponse> {
    constructor() {
        super("viam.service.vision.v1.GetClassificationsResponse", [
            { no: 1, name: "classifications", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Classification }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetClassificationsResponse
 */
export const GetClassificationsResponse = new GetClassificationsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetClassificationsFromCameraRequest$Type extends MessageType<GetClassificationsFromCameraRequest> {
    constructor() {
        super("viam.service.vision.v1.GetClassificationsFromCameraRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "camera_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "classifier_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "n", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetClassificationsFromCameraRequest
 */
export const GetClassificationsFromCameraRequest = new GetClassificationsFromCameraRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetClassificationsFromCameraResponse$Type extends MessageType<GetClassificationsFromCameraResponse> {
    constructor() {
        super("viam.service.vision.v1.GetClassificationsFromCameraResponse", [
            { no: 1, name: "classifications", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Classification }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetClassificationsFromCameraResponse
 */
export const GetClassificationsFromCameraResponse = new GetClassificationsFromCameraResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Classification$Type extends MessageType<Classification> {
    constructor() {
        super("viam.service.vision.v1.Classification", [
            { no: 1, name: "class_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "confidence", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.Classification
 */
export const Classification = new Classification$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSegmenterNamesRequest$Type extends MessageType<GetSegmenterNamesRequest> {
    constructor() {
        super("viam.service.vision.v1.GetSegmenterNamesRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetSegmenterNamesRequest
 */
export const GetSegmenterNamesRequest = new GetSegmenterNamesRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSegmenterNamesResponse$Type extends MessageType<GetSegmenterNamesResponse> {
    constructor() {
        super("viam.service.vision.v1.GetSegmenterNamesResponse", [
            { no: 1, name: "segmenter_names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetSegmenterNamesResponse
 */
export const GetSegmenterNamesResponse = new GetSegmenterNamesResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddSegmenterRequest$Type extends MessageType<AddSegmenterRequest> {
    constructor() {
        super("viam.service.vision.v1.AddSegmenterRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "segmenter_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "segmenter_model_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "segmenter_parameters", kind: "message", T: () => Struct }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.AddSegmenterRequest
 */
export const AddSegmenterRequest = new AddSegmenterRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddSegmenterResponse$Type extends MessageType<AddSegmenterResponse> {
    constructor() {
        super("viam.service.vision.v1.AddSegmenterResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.AddSegmenterResponse
 */
export const AddSegmenterResponse = new AddSegmenterResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveSegmenterRequest$Type extends MessageType<RemoveSegmenterRequest> {
    constructor() {
        super("viam.service.vision.v1.RemoveSegmenterRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "segmenter_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.RemoveSegmenterRequest
 */
export const RemoveSegmenterRequest = new RemoveSegmenterRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RemoveSegmenterResponse$Type extends MessageType<RemoveSegmenterResponse> {
    constructor() {
        super("viam.service.vision.v1.RemoveSegmenterResponse", []);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.RemoveSegmenterResponse
 */
export const RemoveSegmenterResponse = new RemoveSegmenterResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetObjectPointCloudsRequest$Type extends MessageType<GetObjectPointCloudsRequest> {
    constructor() {
        super("viam.service.vision.v1.GetObjectPointCloudsRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "camera_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "segmenter_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "mime_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetObjectPointCloudsRequest
 */
export const GetObjectPointCloudsRequest = new GetObjectPointCloudsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetObjectPointCloudsResponse$Type extends MessageType<GetObjectPointCloudsResponse> {
    constructor() {
        super("viam.service.vision.v1.GetObjectPointCloudsResponse", [
            { no: 1, name: "mime_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "objects", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PointCloudObject }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message viam.service.vision.v1.GetObjectPointCloudsResponse
 */
export const GetObjectPointCloudsResponse = new GetObjectPointCloudsResponse$Type();
/**
 * @generated ServiceType for protobuf service viam.service.vision.v1.VisionService
 */
export const VisionService = new ServiceType("viam.service.vision.v1.VisionService", [
    { name: "GetModelParameterSchema", options: { "google.api.http": { get: "/viam/api/v1/service/vision/{name}/model_parameter_schema" } }, I: GetModelParameterSchemaRequest, O: GetModelParameterSchemaResponse },
    { name: "GetDetectorNames", options: { "google.api.http": { get: "/viam/api/v1/service/vision/{name}/detector_names" } }, I: GetDetectorNamesRequest, O: GetDetectorNamesResponse },
    { name: "AddDetector", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/add_detector" } }, I: AddDetectorRequest, O: AddDetectorResponse },
    { name: "RemoveDetector", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/remove_detector" } }, I: RemoveDetectorRequest, O: RemoveDetectorResponse },
    { name: "GetDetectionsFromCamera", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/camera_detections" } }, I: GetDetectionsFromCameraRequest, O: GetDetectionsFromCameraResponse },
    { name: "GetDetections", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/detections" } }, I: GetDetectionsRequest, O: GetDetectionsResponse },
    { name: "GetClassifierNames", options: { "google.api.http": { get: "/viam/api/v1/service/vision/{name}/classifier_names" } }, I: GetClassifierNamesRequest, O: GetClassifierNamesResponse },
    { name: "AddClassifier", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/add_classifier" } }, I: AddClassifierRequest, O: AddClassifierResponse },
    { name: "RemoveClassifier", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/remove_classifier" } }, I: RemoveClassifierRequest, O: RemoveClassifierResponse },
    { name: "GetClassificationsFromCamera", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/camera_classifications" } }, I: GetClassificationsFromCameraRequest, O: GetClassificationsFromCameraResponse },
    { name: "GetClassifications", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/classifications" } }, I: GetClassificationsRequest, O: GetClassificationsResponse },
    { name: "GetSegmenterNames", options: { "google.api.http": { get: "/viam/api/v1/service/vision/{name}/segmenter_names" } }, I: GetSegmenterNamesRequest, O: GetSegmenterNamesResponse },
    { name: "AddSegmenter", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/add_segmenter" } }, I: AddSegmenterRequest, O: AddSegmenterResponse },
    { name: "RemoveSegmenter", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/remove_segmenter" } }, I: RemoveSegmenterRequest, O: RemoveSegmenterResponse },
    { name: "GetObjectPointClouds", options: { "google.api.http": { post: "/viam/api/v1/service/vision/{name}/object_point_clouds" } }, I: GetObjectPointCloudsRequest, O: GetObjectPointCloudsResponse }
]);
