// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/type/fraction.proto" (package "google.type", syntax proto3)
// tslint:disable
//
// Copyright 2021 Google LLC
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
 * Represents a fraction in terms of a numerator divided by a denominator.
 *
 * @generated from protobuf message google.type.Fraction
 */
export interface Fraction {
    /**
     * The numerator in the fraction, e.g. 2 in 2/3.
     *
     * @generated from protobuf field: int64 numerator = 1;
     */
    numerator: string;
    /**
     * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
     * positive.
     *
     * @generated from protobuf field: int64 denominator = 2;
     */
    denominator: string;
}
declare class Fraction$Type extends MessageType<Fraction> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.type.Fraction
 */
export declare const Fraction: Fraction$Type;
export {};
