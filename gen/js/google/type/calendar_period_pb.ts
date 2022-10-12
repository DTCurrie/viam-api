// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "google/type/calendar_period.proto" (package "google.type", syntax proto3)
// tslint:disable
// @ts-nocheck
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
/**
 * A `CalendarPeriod` represents the abstract concept of a time period that has
 * a canonical start. Grammatically, "the start of the current
 * `CalendarPeriod`." All calendar times begin at midnight UTC.
 *
 * @generated from protobuf enum google.type.CalendarPeriod
 */
export enum CalendarPeriod {
    /**
     * Undefined period, raises an error.
     *
     * @generated from protobuf enum value: CALENDAR_PERIOD_UNSPECIFIED = 0;
     */
    CALENDAR_PERIOD_UNSPECIFIED = 0,
    /**
     * A day.
     *
     * @generated from protobuf enum value: DAY = 1;
     */
    DAY = 1,
    /**
     * A week. Weeks begin on Monday, following
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     *
     * @generated from protobuf enum value: WEEK = 2;
     */
    WEEK = 2,
    /**
     * A fortnight. The first calendar fortnight of the year begins at the start
     * of week 1 according to
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     *
     * @generated from protobuf enum value: FORTNIGHT = 3;
     */
    FORTNIGHT = 3,
    /**
     * A month.
     *
     * @generated from protobuf enum value: MONTH = 4;
     */
    MONTH = 4,
    /**
     * A quarter. Quarters start on dates 1-Jan, 1-Apr, 1-Jul, and 1-Oct of each
     * year.
     *
     * @generated from protobuf enum value: QUARTER = 5;
     */
    QUARTER = 5,
    /**
     * A half-year. Half-years start on dates 1-Jan and 1-Jul.
     *
     * @generated from protobuf enum value: HALF = 6;
     */
    HALF = 6,
    /**
     * A year.
     *
     * @generated from protobuf enum value: YEAR = 7;
     */
    YEAR = 7
}
