// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "app/v1/robot.proto" (package "viam.app.v1", syntax proto3)
// tslint:disable
import { RobotService } from "./robot_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * RobotService is used by robots to retrieve configs, report logs, etc...
 *
 * @generated from protobuf service viam.app.v1.RobotService
 */
export class RobotServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = RobotService.typeName;
        this.methods = RobotService.methods;
        this.options = RobotService.options;
    }
    /**
     * Config requests the current robot config
     *
     * @generated from protobuf rpc: Config(viam.app.v1.ConfigRequest) returns (viam.app.v1.ConfigResponse);
     */
    config(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Certificate requests the current robot certificate
     *
     * @generated from protobuf rpc: Certificate(viam.app.v1.CertificateRequest) returns (viam.app.v1.CertificateResponse);
     */
    certificate(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Log insert log entries associated with the robot. Allows up to 1000 entries to be added in one request.
     *
     * @generated from protobuf rpc: Log(viam.app.v1.LogRequest) returns (viam.app.v1.LogResponse);
     */
    log(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * NeedsRestart returns if the robot should restart and the interval it should check to restart.
     *
     * @generated from protobuf rpc: NeedsRestart(viam.app.v1.NeedsRestartRequest) returns (viam.app.v1.NeedsRestartResponse);
     */
    needsRestart(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
