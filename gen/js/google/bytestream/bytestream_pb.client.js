// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/bytestream/bytestream.proto" (package "google.bytestream", syntax proto3)
// tslint:disable
//
// Copyright 2016 Google Inc.
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
import { ByteStream } from "./bytestream_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * #### Introduction
 *
 * The Byte Stream API enables a client to read and write a stream of bytes to
 * and from a resource. Resources have names, and these names are supplied in
 * the API calls below to identify the resource that is being read from or
 * written to.
 *
 * All implementations of the Byte Stream API export the interface defined here:
 *
 * * `Read()`: Reads the contents of a resource.
 *
 * * `Write()`: Writes the contents of a resource. The client can call `Write()`
 *   multiple times with the same resource and can check the status of the write
 *   by calling `QueryWriteStatus()`.
 *
 * #### Service parameters and metadata
 *
 * The ByteStream API provides no direct way to access/modify any metadata
 * associated with the resource.
 *
 * #### Errors
 *
 * The errors returned by the service are in the Google canonical error space.
 *
 * @generated from protobuf service google.bytestream.ByteStream
 */
export class ByteStreamClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = ByteStream.typeName;
        this.methods = ByteStream.methods;
        this.options = ByteStream.options;
    }
    /**
     * `Read()` is used to retrieve the contents of a resource as a sequence
     * of bytes. The bytes are returned in a sequence of responses, and the
     * responses are delivered as the results of a server-side streaming RPC.
     *
     * @generated from protobuf rpc: Read(google.bytestream.ReadRequest) returns (stream google.bytestream.ReadResponse);
     */
    read(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * `Write()` is used to send the contents of a resource as a sequence of
     * bytes. The bytes are sent in a sequence of request protos of a client-side
     * streaming RPC.
     *
     * A `Write()` action is resumable. If there is an error or the connection is
     * broken during the `Write()`, the client should check the status of the
     * `Write()` by calling `QueryWriteStatus()` and continue writing from the
     * returned `committed_size`. This may be less than the amount of data the
     * client previously sent.
     *
     * Calling `Write()` on a resource name that was previously written and
     * finalized could cause an error, depending on whether the underlying service
     * allows over-writing of previously written resources.
     *
     * When the client closes the request channel, the service will respond with
     * a `WriteResponse`. The service will not view the resource as `complete`
     * until the client has sent a `WriteRequest` with `finish_write` set to
     * `true`. Sending any requests on a stream after sending a request with
     * `finish_write` set to `true` will cause an error. The client **should**
     * check the `WriteResponse` it receives to determine how much data the
     * service was able to commit and whether the service views the resource as
     * `complete` or not.
     *
     * @generated from protobuf rpc: Write(stream google.bytestream.WriteRequest) returns (google.bytestream.WriteResponse);
     */
    write(options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("clientStreaming", this._transport, method, opt);
    }
    /**
     * `QueryWriteStatus()` is used to find the `committed_size` for a resource
     * that is being written, which can then be used as the `write_offset` for
     * the next `Write()` call.
     *
     * If the resource does not exist (i.e., the resource has been deleted, or the
     * first `Write()` has not yet reached the service), this method returns the
     * error `NOT_FOUND`.
     *
     * The client **may** call `QueryWriteStatus()` at any time to determine how
     * much data has been processed for this resource. This is useful if the
     * client is buffering data and needs to know which data can be safely
     * evicted. For any sequence of `QueryWriteStatus()` calls for a given
     * resource name, the sequence of returned `committed_size` values will be
     * non-decreasing.
     *
     * @generated from protobuf rpc: QueryWriteStatus(google.bytestream.QueryWriteStatusRequest) returns (google.bytestream.QueryWriteStatusResponse);
     */
    queryWriteStatus(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
