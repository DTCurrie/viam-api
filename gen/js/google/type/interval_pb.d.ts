// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/type/interval.proto" (package "google.type", syntax proto3)
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
import { Timestamp } from "../protobuf/timestamp_pb";
/**
 * Represents a time interval, encoded as a Timestamp start (inclusive) and a
 * Timestamp end (exclusive).
 *
 * The start must be less than or equal to the end.
 * When the start equals the end, the interval is empty (matches no time).
 * When both start and end are unspecified, the interval matches any time.
 *
 * @generated from protobuf message google.type.Interval
 */
export interface Interval {
    /**
     * Optional. Inclusive start of the interval.
     *
     * If specified, a Timestamp matching this interval will have to be the same
     * or after the start.
     *
     * @generated from protobuf field: google.protobuf.Timestamp start_time = 1;
     */
    startTime?: Timestamp;
    /**
     * Optional. Exclusive end of the interval.
     *
     * If specified, a Timestamp matching this interval will have to be before the
     * end.
     *
     * @generated from protobuf field: google.protobuf.Timestamp end_time = 2;
     */
    endTime?: Timestamp;
}
declare class Interval$Type extends MessageType<Interval> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.type.Interval
 */
export declare const Interval: Interval$Type;
export {};
