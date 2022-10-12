// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/api/resource.proto" (package "google.api", syntax proto3)
// tslint:disable
//
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/api/resource.proto" (package "google.api", syntax proto3)
// tslint:disable
//
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import { MessageType } from "@protobuf-ts/runtime";
/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 *
 * @generated from protobuf enum google.api.ResourceDescriptor.History
 */
export var ResourceDescriptor_History;
(function (ResourceDescriptor_History) {
    /**
     * The "unset" value.
     *
     * @generated from protobuf enum value: HISTORY_UNSPECIFIED = 0;
     */
    ResourceDescriptor_History[ResourceDescriptor_History["HISTORY_UNSPECIFIED"] = 0] = "HISTORY_UNSPECIFIED";
    /**
     * The resource originally had one pattern and launched as such, and
     * additional patterns were added later.
     *
     * @generated from protobuf enum value: ORIGINALLY_SINGLE_PATTERN = 1;
     */
    ResourceDescriptor_History[ResourceDescriptor_History["ORIGINALLY_SINGLE_PATTERN"] = 1] = "ORIGINALLY_SINGLE_PATTERN";
    /**
     * The resource has one pattern, but the API owner expects to add more
     * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
     * that from being necessary once there are multiple patterns.)
     *
     * @generated from protobuf enum value: FUTURE_MULTI_PATTERN = 2;
     */
    ResourceDescriptor_History[ResourceDescriptor_History["FUTURE_MULTI_PATTERN"] = 2] = "FUTURE_MULTI_PATTERN";
})(ResourceDescriptor_History || (ResourceDescriptor_History = {}));
/**
 * A flag representing a specific style that a resource claims to conform to.
 *
 * @generated from protobuf enum google.api.ResourceDescriptor.Style
 */
export var ResourceDescriptor_Style;
(function (ResourceDescriptor_Style) {
    /**
     * The unspecified value. Do not use.
     *
     * @generated from protobuf enum value: STYLE_UNSPECIFIED = 0;
     */
    ResourceDescriptor_Style[ResourceDescriptor_Style["STYLE_UNSPECIFIED"] = 0] = "STYLE_UNSPECIFIED";
    /**
     * This resource is intended to be "declarative-friendly".
     *
     * Declarative-friendly resources must be more strictly consistent, and
     * setting this to true communicates to tools that this resource should
     * adhere to declarative-friendly expectations.
     *
     * Note: This is used by the API linter (linter.aip.dev) to enable
     * additional checks.
     *
     * @generated from protobuf enum value: DECLARATIVE_FRIENDLY = 1;
     */
    ResourceDescriptor_Style[ResourceDescriptor_Style["DECLARATIVE_FRIENDLY"] = 1] = "DECLARATIVE_FRIENDLY";
})(ResourceDescriptor_Style || (ResourceDescriptor_Style = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ResourceDescriptor$Type extends MessageType {
    constructor() {
        super("google.api.ResourceDescriptor", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pattern", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "name_field", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "history", kind: "enum", T: () => ["google.api.ResourceDescriptor.History", ResourceDescriptor_History] },
            { no: 5, name: "plural", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "singular", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "style", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["google.api.ResourceDescriptor.Style", ResourceDescriptor_Style] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.ResourceDescriptor
 */
export const ResourceDescriptor = new ResourceDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResourceReference$Type extends MessageType {
    constructor() {
        super("google.api.ResourceReference", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "child_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.ResourceReference
 */
export const ResourceReference = new ResourceReference$Type();
