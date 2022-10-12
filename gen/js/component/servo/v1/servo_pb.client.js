// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "component/servo/v1/servo.proto" (package "viam.component.servo.v1", syntax proto3)
// tslint:disable
import { ServoService } from "./servo_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * A ServoService maintains all servos associated with a robot
 *
 * @generated from protobuf service viam.component.servo.v1.ServoService
 */
export class ServoServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = ServoService.typeName;
        this.methods = ServoService.methods;
        this.options = ServoService.options;
    }
    /**
     * Move requests the servo of the underlying robot to move.
     * This will block until done or a new operation cancels this one
     *
     * @generated from protobuf rpc: Move(viam.component.servo.v1.MoveRequest) returns (viam.component.servo.v1.MoveResponse);
     */
    move(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * GetPosition returns the current set angle (degrees) of the servo of the underlying robot.
     *
     * @generated from protobuf rpc: GetPosition(viam.component.servo.v1.GetPositionRequest) returns (viam.component.servo.v1.GetPositionResponse);
     */
    getPosition(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Stop stops a robot's servo
     *
     * @generated from protobuf rpc: Stop(viam.component.servo.v1.StopRequest) returns (viam.component.servo.v1.StopResponse);
     */
    stop(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
