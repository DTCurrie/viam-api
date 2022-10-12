// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "service/shell/v1/shell.proto" (package "viam.service.shell.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ShellService } from "./shell_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ShellResponse } from "./shell_pb";
import type { ShellRequest } from "./shell_pb";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * A ShellService service allows access to an interactive shell experience.
 *
 * @generated from protobuf service viam.service.shell.v1.ShellService
 */
export interface IShellServiceClient {
    /**
     * Shell starts a shell with an input and output pipe.
     *
     * @generated from protobuf rpc: Shell(stream viam.service.shell.v1.ShellRequest) returns (stream viam.service.shell.v1.ShellResponse);
     */
    shell(options?: RpcOptions): DuplexStreamingCall<ShellRequest, ShellResponse>;
}
/**
 * A ShellService service allows access to an interactive shell experience.
 *
 * @generated from protobuf service viam.service.shell.v1.ShellService
 */
export class ShellServiceClient implements IShellServiceClient, ServiceInfo {
    typeName = ShellService.typeName;
    methods = ShellService.methods;
    options = ShellService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Shell starts a shell with an input and output pipe.
     *
     * @generated from protobuf rpc: Shell(stream viam.service.shell.v1.ShellRequest) returns (stream viam.service.shell.v1.ShellResponse);
     */
    shell(options?: RpcOptions): DuplexStreamingCall<ShellRequest, ShellResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ShellRequest, ShellResponse>("duplex", this._transport, method, opt);
    }
}
