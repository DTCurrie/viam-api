// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "app/data/v1/data.proto" (package "viam.app.data.v1", syntax proto3)
// tslint:disable
import { DataService } from "./data_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * DataService is used to query robot data.
 *
 * @generated from protobuf service viam.app.data.v1.DataService
 */
export class DataServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = DataService.typeName;
        this.methods = DataService.methods;
        this.options = DataService.options;
    }
    /**
     * TabularDataByFilter queries tabular data and metadata based on given filters.
     *
     * @generated from protobuf rpc: TabularDataByFilter(viam.app.data.v1.TabularDataByFilterRequest) returns (viam.app.data.v1.TabularDataByFilterResponse);
     */
    tabularDataByFilter(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * BinaryDataByFilter queries binary data and metadata based on given filters.
     *
     * @generated from protobuf rpc: BinaryDataByFilter(viam.app.data.v1.BinaryDataByFilterRequest) returns (viam.app.data.v1.BinaryDataByFilterResponse);
     */
    binaryDataByFilter(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * BinaryDataByIDs queries binary data and metadata based on given IDs.
     *
     * @generated from protobuf rpc: BinaryDataByIDs(viam.app.data.v1.BinaryDataByIDsRequest) returns (viam.app.data.v1.BinaryDataByIDsResponse);
     */
    binaryDataByIDs(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
