// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,ts_nocheck
// @generated from protobuf file "google/api/expr/v1beta1/expr.proto" (package "google.api.expr.v1beta1", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// Copyright 2019 Google LLC.
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
//
import { MessageType } from "@protobuf-ts/runtime";
import { NullValue } from "../../../protobuf/struct_pb";
import { SourceInfo } from "./source_pb";
/**
 * An expression together with source information as returned by the parser.
 *
 * @generated from protobuf message google.api.expr.v1beta1.ParsedExpr
 */
export interface ParsedExpr {
    /**
     * The parsed expression.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr expr = 2;
     */
    expr?: Expr;
    /**
     * The source info derived from input that generated the parsed `expr`.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.SourceInfo source_info = 3;
     */
    sourceInfo?: SourceInfo;
    /**
     * The syntax version of the source, e.g. `cel1`.
     *
     * @generated from protobuf field: string syntax_version = 4;
     */
    syntaxVersion: string;
}
/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a [Decl][google.api.expr.v1beta1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr
 */
export interface Expr {
    /**
     * Required. An id assigned to this node by the parser which is unique in a
     * given expression tree. This is used to associate type information and other
     * attributes to a node in the parse tree.
     *
     * @generated from protobuf field: int32 id = 2;
     */
    id: number;
    /**
     * @generated from protobuf oneof: expr_kind
     */
    exprKind: {
        oneofKind: "literalExpr";
        /**
         * A literal expression.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Literal literal_expr = 3;
         */
        literalExpr: Literal;
    } | {
        oneofKind: "identExpr";
        /**
         * An identifier expression.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr.Ident ident_expr = 4;
         */
        identExpr: Expr_Ident;
    } | {
        oneofKind: "selectExpr";
        /**
         * A field selection expression, e.g. `request.auth`.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr.Select select_expr = 5;
         */
        selectExpr: Expr_Select;
    } | {
        oneofKind: "callExpr";
        /**
         * A call expression, including calls to predefined functions and operators.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr.Call call_expr = 6;
         */
        callExpr: Expr_Call;
    } | {
        oneofKind: "listExpr";
        /**
         * A list creation expression.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr.CreateList list_expr = 7;
         */
        listExpr: Expr_CreateList;
    } | {
        oneofKind: "structExpr";
        /**
         * A map or object creation expression.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr.CreateStruct struct_expr = 8;
         */
        structExpr: Expr_CreateStruct;
    } | {
        oneofKind: "comprehensionExpr";
        /**
         * A comprehension expression.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr.Comprehension comprehension_expr = 9;
         */
        comprehensionExpr: Expr_Comprehension;
    } | {
        oneofKind: undefined;
    };
}
/**
 * An identifier expression. e.g. `request`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.Ident
 */
export interface Expr_Ident {
    /**
     * Required. Holds a single, unqualified identifier, possibly preceded by a
     * '.'.
     *
     * Qualified names are represented by the [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * A field selection expression. e.g. `request.auth`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.Select
 */
export interface Expr_Select {
    /**
     * Required. The target of the selection expression.
     *
     * For example, in the select expression `request.auth`, the `request`
     * portion of the expression is the `operand`.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr operand = 1;
     */
    operand?: Expr;
    /**
     * Required. The name of the field to select.
     *
     * For example, in the select expression `request.auth`, the `auth` portion
     * of the expression would be the `field`.
     *
     * @generated from protobuf field: string field = 2;
     */
    field: string;
    /**
     * Whether the select is to be interpreted as a field presence test.
     *
     * This results from the macro `has(request.auth)`.
     *
     * @generated from protobuf field: bool test_only = 3;
     */
    testOnly: boolean;
}
/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.Call
 */
export interface Expr_Call {
    /**
     * The target of an method call-style expression. For example, `x` in
     * `x.f()`.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr target = 1;
     */
    target?: Expr;
    /**
     * Required. The name of the function or method being called.
     *
     * @generated from protobuf field: string function = 2;
     */
    function: string;
    /**
     * The arguments.
     *
     * @generated from protobuf field: repeated google.api.expr.v1beta1.Expr args = 3;
     */
    args: Expr[];
}
/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogenous, e.g.
 * `dyn([1, 'hello', 2.0])`
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.CreateList
 */
export interface Expr_CreateList {
    /**
     * The elements part of the list.
     *
     * @generated from protobuf field: repeated google.api.expr.v1beta1.Expr elements = 1;
     */
    elements: Expr[];
}
/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.CreateStruct
 */
export interface Expr_CreateStruct {
    /**
     * The type name of the message to be created, empty when creating map
     * literals.
     *
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * The entries in the creation expression.
     *
     * @generated from protobuf field: repeated google.api.expr.v1beta1.Expr.CreateStruct.Entry entries = 2;
     */
    entries: Expr_CreateStruct_Entry[];
}
/**
 * Represents an entry.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.CreateStruct.Entry
 */
export interface Expr_CreateStruct_Entry {
    /**
     * Required. An id assigned to this node by the parser which is unique
     * in a given expression tree. This is used to associate type
     * information and other attributes to the node.
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf oneof: key_kind
     */
    keyKind: {
        oneofKind: "fieldKey";
        /**
         * The field key for a message creator statement.
         *
         * @generated from protobuf field: string field_key = 2;
         */
        fieldKey: string;
    } | {
        oneofKind: "mapKey";
        /**
         * The key expression for a map creation statement.
         *
         * @generated from protobuf field: google.api.expr.v1beta1.Expr map_key = 3;
         */
        mapKey: Expr;
    } | {
        oneofKind: undefined;
    };
    /**
     * Required. The value assigned to the key.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr value = 4;
     */
    value?: Expr;
}
/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Expr.Comprehension
 */
export interface Expr_Comprehension {
    /**
     * The name of the iteration variable.
     *
     * @generated from protobuf field: string iter_var = 1;
     */
    iterVar: string;
    /**
     * The range over which var iterates.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr iter_range = 2;
     */
    iterRange?: Expr;
    /**
     * The name of the variable used for accumulation of the result.
     *
     * @generated from protobuf field: string accu_var = 3;
     */
    accuVar: string;
    /**
     * The initial value of the accumulator.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr accu_init = 4;
     */
    accuInit?: Expr;
    /**
     * An expression which can contain iter_var and accu_var.
     *
     * Returns false when the result has been computed and may be used as
     * a hint to short-circuit the remainder of the comprehension.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr loop_condition = 5;
     */
    loopCondition?: Expr;
    /**
     * An expression which can contain iter_var and accu_var.
     *
     * Computes the next value of accu_var.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr loop_step = 6;
     */
    loopStep?: Expr;
    /**
     * An expression which can contain accu_var.
     *
     * Computes the result.
     *
     * @generated from protobuf field: google.api.expr.v1beta1.Expr result = 7;
     */
    result?: Expr;
}
/**
 * Represents a primitive literal.
 *
 * This is similar to the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1beta1.Expr] elements which require evaluation and are thus not constant.
 *
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 *
 * @generated from protobuf message google.api.expr.v1beta1.Literal
 */
export interface Literal {
    /**
     * @generated from protobuf oneof: constant_kind
     */
    constantKind: {
        oneofKind: "nullValue";
        /**
         * null value.
         *
         * @generated from protobuf field: google.protobuf.NullValue null_value = 1;
         */
        nullValue: NullValue;
    } | {
        oneofKind: "boolValue";
        /**
         * boolean value.
         *
         * @generated from protobuf field: bool bool_value = 2;
         */
        boolValue: boolean;
    } | {
        oneofKind: "int64Value";
        /**
         * int64 value.
         *
         * @generated from protobuf field: int64 int64_value = 3;
         */
        int64Value: string;
    } | {
        oneofKind: "uint64Value";
        /**
         * uint64 value.
         *
         * @generated from protobuf field: uint64 uint64_value = 4;
         */
        uint64Value: string;
    } | {
        oneofKind: "doubleValue";
        /**
         * double value.
         *
         * @generated from protobuf field: double double_value = 5;
         */
        doubleValue: number;
    } | {
        oneofKind: "stringValue";
        /**
         * string value.
         *
         * @generated from protobuf field: string string_value = 6;
         */
        stringValue: string;
    } | {
        oneofKind: "bytesValue";
        /**
         * bytes value.
         *
         * @generated from protobuf field: bytes bytes_value = 7;
         */
        bytesValue: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class ParsedExpr$Type extends MessageType<ParsedExpr> {
    constructor() {
        super("google.api.expr.v1beta1.ParsedExpr", [
            { no: 2, name: "expr", kind: "message", T: () => Expr },
            { no: 3, name: "source_info", kind: "message", T: () => SourceInfo },
            { no: 4, name: "syntax_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.ParsedExpr
 */
export const ParsedExpr = new ParsedExpr$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr$Type extends MessageType<Expr> {
    constructor() {
        super("google.api.expr.v1beta1.Expr", [
            { no: 2, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "literal_expr", kind: "message", oneof: "exprKind", T: () => Literal },
            { no: 4, name: "ident_expr", kind: "message", oneof: "exprKind", T: () => Expr_Ident },
            { no: 5, name: "select_expr", kind: "message", oneof: "exprKind", T: () => Expr_Select },
            { no: 6, name: "call_expr", kind: "message", oneof: "exprKind", T: () => Expr_Call },
            { no: 7, name: "list_expr", kind: "message", oneof: "exprKind", T: () => Expr_CreateList },
            { no: 8, name: "struct_expr", kind: "message", oneof: "exprKind", T: () => Expr_CreateStruct },
            { no: 9, name: "comprehension_expr", kind: "message", oneof: "exprKind", T: () => Expr_Comprehension }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr
 */
export const Expr = new Expr$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_Ident$Type extends MessageType<Expr_Ident> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.Ident", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.Ident
 */
export const Expr_Ident = new Expr_Ident$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_Select$Type extends MessageType<Expr_Select> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.Select", [
            { no: 1, name: "operand", kind: "message", T: () => Expr },
            { no: 2, name: "field", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "test_only", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.Select
 */
export const Expr_Select = new Expr_Select$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_Call$Type extends MessageType<Expr_Call> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.Call", [
            { no: 1, name: "target", kind: "message", T: () => Expr },
            { no: 2, name: "function", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "args", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Expr }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.Call
 */
export const Expr_Call = new Expr_Call$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_CreateList$Type extends MessageType<Expr_CreateList> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.CreateList", [
            { no: 1, name: "elements", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Expr }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.CreateList
 */
export const Expr_CreateList = new Expr_CreateList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_CreateStruct$Type extends MessageType<Expr_CreateStruct> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.CreateStruct", [
            { no: 1, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Expr_CreateStruct_Entry }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.CreateStruct
 */
export const Expr_CreateStruct = new Expr_CreateStruct$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_CreateStruct_Entry$Type extends MessageType<Expr_CreateStruct_Entry> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.CreateStruct.Entry", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "field_key", kind: "scalar", oneof: "keyKind", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "map_key", kind: "message", oneof: "keyKind", T: () => Expr },
            { no: 4, name: "value", kind: "message", T: () => Expr }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.CreateStruct.Entry
 */
export const Expr_CreateStruct_Entry = new Expr_CreateStruct_Entry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Expr_Comprehension$Type extends MessageType<Expr_Comprehension> {
    constructor() {
        super("google.api.expr.v1beta1.Expr.Comprehension", [
            { no: 1, name: "iter_var", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "iter_range", kind: "message", T: () => Expr },
            { no: 3, name: "accu_var", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "accu_init", kind: "message", T: () => Expr },
            { no: 5, name: "loop_condition", kind: "message", T: () => Expr },
            { no: 6, name: "loop_step", kind: "message", T: () => Expr },
            { no: 7, name: "result", kind: "message", T: () => Expr }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Expr.Comprehension
 */
export const Expr_Comprehension = new Expr_Comprehension$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Literal$Type extends MessageType<Literal> {
    constructor() {
        super("google.api.expr.v1beta1.Literal", [
            { no: 1, name: "null_value", kind: "enum", oneof: "constantKind", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "bool_value", kind: "scalar", oneof: "constantKind", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "int64_value", kind: "scalar", oneof: "constantKind", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "uint64_value", kind: "scalar", oneof: "constantKind", T: 4 /*ScalarType.UINT64*/ },
            { no: 5, name: "double_value", kind: "scalar", oneof: "constantKind", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 6, name: "string_value", kind: "scalar", oneof: "constantKind", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "bytes_value", kind: "scalar", oneof: "constantKind", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1beta1.Literal
 */
export const Literal = new Literal$Type();
