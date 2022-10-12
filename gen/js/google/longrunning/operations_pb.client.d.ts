// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/longrunning/operations.proto" (package "google.longrunning", syntax proto3)
// tslint:disable
//
// Copyright 2020 Google LLC
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
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { WaitOperationRequest } from "./operations_pb";
import type { CancelOperationRequest } from "./operations_pb";
import type { Empty } from "../protobuf/empty_pb";
import type { DeleteOperationRequest } from "./operations_pb";
import type { Operation } from "./operations_pb";
import type { GetOperationRequest } from "./operations_pb";
import type { ListOperationsResponse } from "./operations_pb";
import type { ListOperationsRequest } from "./operations_pb";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 *
 * @generated from protobuf service google.longrunning.Operations
 */
export interface IOperationsClient {
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding allows API services to override the binding
     * to use different resource name schemes, such as `users/*\/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/*}/operations"` to their service configuration.
     * For backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding
     * is the parent resource, without the operations collection id.
     *
     * @generated from protobuf rpc: ListOperations(google.longrunning.ListOperationsRequest) returns (google.longrunning.ListOperationsResponse);
     */
    listOperations(input: ListOperationsRequest, options?: RpcOptions): UnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     *
     * @generated from protobuf rpc: GetOperation(google.longrunning.GetOperationRequest) returns (google.longrunning.Operation);
     */
    getOperation(input: GetOperationRequest, options?: RpcOptions): UnaryCall<GetOperationRequest, Operation>;
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @generated from protobuf rpc: DeleteOperation(google.longrunning.DeleteOperationRequest) returns (google.protobuf.Empty);
     */
    deleteOperation(input: DeleteOperationRequest, options?: RpcOptions): UnaryCall<DeleteOperationRequest, Empty>;
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
     * corresponding to `Code.CANCELLED`.
     *
     * @generated from protobuf rpc: CancelOperation(google.longrunning.CancelOperationRequest) returns (google.protobuf.Empty);
     */
    cancelOperation(input: CancelOperationRequest, options?: RpcOptions): UnaryCall<CancelOperationRequest, Empty>;
    /**
     * Waits until the specified long-running operation is done or reaches at most
     * a specified timeout, returning the latest state.  If the operation is
     * already done, the latest state is immediately returned.  If the timeout
     * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
     * timeout is used.  If the server does not support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     * Note that this method is on a best-effort basis.  It may return the latest
     * state before the specified timeout (including immediately), meaning even an
     * immediate response is no guarantee that the operation is done.
     *
     * @generated from protobuf rpc: WaitOperation(google.longrunning.WaitOperationRequest) returns (google.longrunning.Operation);
     */
    waitOperation(input: WaitOperationRequest, options?: RpcOptions): UnaryCall<WaitOperationRequest, Operation>;
}
/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 *
 * @generated from protobuf service google.longrunning.Operations
 */
export declare class OperationsClient implements IOperationsClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding allows API services to override the binding
     * to use different resource name schemes, such as `users/*\/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/*}/operations"` to their service configuration.
     * For backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding
     * is the parent resource, without the operations collection id.
     *
     * @generated from protobuf rpc: ListOperations(google.longrunning.ListOperationsRequest) returns (google.longrunning.ListOperationsResponse);
     */
    listOperations(input: ListOperationsRequest, options?: RpcOptions): UnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     *
     * @generated from protobuf rpc: GetOperation(google.longrunning.GetOperationRequest) returns (google.longrunning.Operation);
     */
    getOperation(input: GetOperationRequest, options?: RpcOptions): UnaryCall<GetOperationRequest, Operation>;
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @generated from protobuf rpc: DeleteOperation(google.longrunning.DeleteOperationRequest) returns (google.protobuf.Empty);
     */
    deleteOperation(input: DeleteOperationRequest, options?: RpcOptions): UnaryCall<DeleteOperationRequest, Empty>;
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
     * corresponding to `Code.CANCELLED`.
     *
     * @generated from protobuf rpc: CancelOperation(google.longrunning.CancelOperationRequest) returns (google.protobuf.Empty);
     */
    cancelOperation(input: CancelOperationRequest, options?: RpcOptions): UnaryCall<CancelOperationRequest, Empty>;
    /**
     * Waits until the specified long-running operation is done or reaches at most
     * a specified timeout, returning the latest state.  If the operation is
     * already done, the latest state is immediately returned.  If the timeout
     * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
     * timeout is used.  If the server does not support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     * Note that this method is on a best-effort basis.  It may return the latest
     * state before the specified timeout (including immediately), meaning even an
     * immediate response is no guarantee that the operation is done.
     *
     * @generated from protobuf rpc: WaitOperation(google.longrunning.WaitOperationRequest) returns (google.longrunning.Operation);
     */
    waitOperation(input: WaitOperationRequest, options?: RpcOptions): UnaryCall<WaitOperationRequest, Operation>;
}
