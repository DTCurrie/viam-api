// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "component/motor/v1/motor.proto" (package "viam.component.motor.v1", syntax proto3)
// tslint:disable
import { MotorService } from "./motor_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * A MotorService maintains all motors associated with a robot
 *
 * @generated from protobuf service viam.component.motor.v1.MotorService
 */
export class MotorServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = MotorService.typeName;
        this.methods = MotorService.methods;
        this.options = MotorService.options;
    }
    /**
     * SetPower sets the percentage of the motor's total power that should be employed
     * expressed a value between -1 and 1 where negative values indicate a backwards
     * direction and positive values a forward direction
     *
     * @generated from protobuf rpc: SetPower(viam.component.motor.v1.SetPowerRequest) returns (viam.component.motor.v1.SetPowerResponse);
     */
    setPower(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * GoFor instructs the motor to turn at a specified speed, which is expressed in RPM,
     * for a specified number of rotations relative to its starting position
     * This method will return an error if position reporting is not supported
     * If revolutions is 0, this will run the motor at rpm indefinitely
     * If revolutions != 0, this will block until the number of revolutions has been completed or another operation comes in.
     *
     * @generated from protobuf rpc: GoFor(viam.component.motor.v1.GoForRequest) returns (viam.component.motor.v1.GoForResponse);
     */
    goFor(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * GoTo requests the robot's motor to move to a specific position that
     * is relative to its home position at a specified speed which is expressed in RPM
     * This method will return an error if position reporting is not supported
     *
     * @generated from protobuf rpc: GoTo(viam.component.motor.v1.GoToRequest) returns (viam.component.motor.v1.GoToResponse);
     */
    goTo(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * ResetZeroPosition sets the current position of the motor as the new zero position
     * This method will return an error if position reporting is not supported
     *
     * @generated from protobuf rpc: ResetZeroPosition(viam.component.motor.v1.ResetZeroPositionRequest) returns (viam.component.motor.v1.ResetZeroPositionResponse);
     */
    resetZeroPosition(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * Position reports the position of the robot's motor relative to its zero position
     * This method will return an error if position reporting is not supported
     *
     * @generated from protobuf rpc: GetPosition(viam.component.motor.v1.GetPositionRequest) returns (viam.component.motor.v1.GetPositionResponse);
     */
    getPosition(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * GetProperties returns a message of booleans indicating which optional features the robot's motor supports
     *
     * @generated from protobuf rpc: GetProperties(viam.component.motor.v1.GetPropertiesRequest) returns (viam.component.motor.v1.GetPropertiesResponse);
     */
    getProperties(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    // Stop turns the robot's motor off
    /**
     * @generated from protobuf rpc: Stop(viam.component.motor.v1.StopRequest) returns (viam.component.motor.v1.StopResponse);
     */
    stop(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * IsPowered returns true if the robot's motor off
     * To Do (FA): This will be deprecated
     *
     * @generated from protobuf rpc: IsPowered(viam.component.motor.v1.IsPoweredRequest) returns (viam.component.motor.v1.IsPoweredResponse);
     */
    isPowered(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
