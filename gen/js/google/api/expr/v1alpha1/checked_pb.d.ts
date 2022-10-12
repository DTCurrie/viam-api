// @generated by protobuf-ts 2.8.1 with parameter add_pb_suffix,generate_dependencies,force_optimize_code_size,long_type_string,output_javascript
// @generated from protobuf file "google/api/expr/v1alpha1/checked.proto" (package "google.api.expr.v1alpha1", syntax proto3)
// tslint:disable
//
// Copyright 2022 Google LLC
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
import { Constant } from "./syntax_pb";
import { NullValue } from "../../../protobuf/struct_pb";
import { Empty } from "../../../protobuf/empty_pb";
import { Expr } from "./syntax_pb";
import { SourceInfo } from "./syntax_pb";
/**
 * A CEL expression which has been successfully type checked.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.CheckedExpr
 */
export interface CheckedExpr {
    /**
     * A map from expression ids to resolved references.
     *
     * The following entries are in this table:
     *
     * - An Ident or Select expression is represented here if it resolves to a
     *   declaration. For instance, if `a.b.c` is represented by
     *   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,
     *   while `c` is a field selection, then the reference is attached to the
     *   nested select expression (but not to the id or or the outer select).
     *   In turn, if `a` resolves to a declaration and `b.c` are field selections,
     *   the reference is attached to the ident expression.
     * - Every Call expression has an entry here, identifying the function being
     *   called.
     * - Every CreateStruct expression for a message has an entry, identifying
     *   the message.
     *
     * @generated from protobuf field: map<int64, google.api.expr.v1alpha1.Reference> reference_map = 2;
     */
    referenceMap: {
        [key: string]: Reference;
    };
    /**
     * A map from expression ids to types.
     *
     * Every expression node which has a type different than DYN has a mapping
     * here. If an expression has type DYN, it is omitted from this map to save
     * space.
     *
     * @generated from protobuf field: map<int64, google.api.expr.v1alpha1.Type> type_map = 3;
     */
    typeMap: {
        [key: string]: Type;
    };
    /**
     * The source info derived from input that generated the parsed `expr` and
     * any optimizations made during the type-checking pass.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.SourceInfo source_info = 5;
     */
    sourceInfo?: SourceInfo;
    /**
     * The expr version indicates the major / minor version number of the `expr`
     * representation.
     *
     * The most common reason for a version change will be to indicate to the CEL
     * runtimes that transformations have been performed on the expr during static
     * analysis. In some cases, this will save the runtime the work of applying
     * the same or similar transformations prior to evaluation.
     *
     * @generated from protobuf field: string expr_version = 6;
     */
    exprVersion: string;
    /**
     * The checked expression. Semantically equivalent to the parsed `expr`, but
     * may have structural differences.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Expr expr = 4;
     */
    expr?: Expr;
}
/**
 * Represents a CEL type.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Type
 */
export interface Type {
    /**
     * @generated from protobuf oneof: type_kind
     */
    typeKind: {
        oneofKind: "dyn";
        /**
         * Dynamic type.
         *
         * @generated from protobuf field: google.protobuf.Empty dyn = 1;
         */
        dyn: Empty;
    } | {
        oneofKind: "null";
        /**
         * Null value.
         *
         * @generated from protobuf field: google.protobuf.NullValue null = 2;
         */
        null: NullValue;
    } | {
        oneofKind: "primitive";
        /**
         * Primitive types: `true`, `1u`, `-2.0`, `'string'`, `b'bytes'`.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.PrimitiveType primitive = 3;
         */
        primitive: Type_PrimitiveType;
    } | {
        oneofKind: "wrapper";
        /**
         * Wrapper of a primitive type, e.g. `google.protobuf.Int64Value`.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.PrimitiveType wrapper = 4;
         */
        wrapper: Type_PrimitiveType;
    } | {
        oneofKind: "wellKnown";
        /**
         * Well-known protobuf type such as `google.protobuf.Timestamp`.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.WellKnownType well_known = 5;
         */
        wellKnown: Type_WellKnownType;
    } | {
        oneofKind: "listType";
        /**
         * Parameterized list with elements of `list_type`, e.g. `list<timestamp>`.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.ListType list_type = 6;
         */
        listType: Type_ListType;
    } | {
        oneofKind: "mapType";
        /**
         * Parameterized map with typed keys and values.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.MapType map_type = 7;
         */
        mapType: Type_MapType;
    } | {
        oneofKind: "function";
        /**
         * Function type.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.FunctionType function = 8;
         */
        function: Type_FunctionType;
    } | {
        oneofKind: "messageType";
        /**
         * Protocol buffer message type.
         *
         * The `message_type` string specifies the qualified message type name. For
         * example, `google.plus.Profile`.
         *
         * @generated from protobuf field: string message_type = 9;
         */
        messageType: string;
    } | {
        oneofKind: "typeParam";
        /**
         * Type param type.
         *
         * The `type_param` string specifies the type parameter name, e.g. `list<E>`
         * would be a `list_type` whose element type was a `type_param` type
         * named `E`.
         *
         * @generated from protobuf field: string type_param = 10;
         */
        typeParam: string;
    } | {
        oneofKind: "type";
        /**
         * Type type.
         *
         * The `type` value specifies the target type. e.g. int is type with a
         * target type of `Primitive.INT`.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type type = 11;
         */
        type: Type;
    } | {
        oneofKind: "error";
        /**
         * Error type.
         *
         * During type-checking if an expression is an error, its type is propagated
         * as the `ERROR` type. This permits the type-checker to discover other
         * errors present in the expression.
         *
         * @generated from protobuf field: google.protobuf.Empty error = 12;
         */
        error: Empty;
    } | {
        oneofKind: "abstractType";
        /**
         * Abstract, application defined type.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Type.AbstractType abstract_type = 14;
         */
        abstractType: Type_AbstractType;
    } | {
        oneofKind: undefined;
    };
}
/**
 * List type with typed elements, e.g. `list<example.proto.MyMessage>`.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Type.ListType
 */
export interface Type_ListType {
    /**
     * The element type.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Type elem_type = 1;
     */
    elemType?: Type;
}
/**
 * Map type with parameterized key and value types, e.g. `map<string, int>`.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Type.MapType
 */
export interface Type_MapType {
    /**
     * The type of the key.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Type key_type = 1;
     */
    keyType?: Type;
    /**
     * The type of the value.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Type value_type = 2;
     */
    valueType?: Type;
}
/**
 * Function type with result and arg types.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Type.FunctionType
 */
export interface Type_FunctionType {
    /**
     * Result type of the function.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Type result_type = 1;
     */
    resultType?: Type;
    /**
     * Argument types of the function.
     *
     * @generated from protobuf field: repeated google.api.expr.v1alpha1.Type arg_types = 2;
     */
    argTypes: Type[];
}
/**
 * Application defined abstract type.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Type.AbstractType
 */
export interface Type_AbstractType {
    /**
     * The fully qualified name of this abstract type.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * Parameter types for this abstract type.
     *
     * @generated from protobuf field: repeated google.api.expr.v1alpha1.Type parameter_types = 2;
     */
    parameterTypes: Type[];
}
/**
 * CEL primitive types.
 *
 * @generated from protobuf enum google.api.expr.v1alpha1.Type.PrimitiveType
 */
export declare enum Type_PrimitiveType {
    /**
     * Unspecified type.
     *
     * @generated from protobuf enum value: PRIMITIVE_TYPE_UNSPECIFIED = 0;
     */
    PRIMITIVE_TYPE_UNSPECIFIED = 0,
    /**
     * Boolean type.
     *
     * @generated from protobuf enum value: BOOL = 1;
     */
    BOOL = 1,
    /**
     * Int64 type.
     *
     * Proto-based integer values are widened to int64.
     *
     * @generated from protobuf enum value: INT64 = 2;
     */
    INT64 = 2,
    /**
     * Uint64 type.
     *
     * Proto-based unsigned integer values are widened to uint64.
     *
     * @generated from protobuf enum value: UINT64 = 3;
     */
    UINT64 = 3,
    /**
     * Double type.
     *
     * Proto-based float values are widened to double values.
     *
     * @generated from protobuf enum value: DOUBLE = 4;
     */
    DOUBLE = 4,
    /**
     * String type.
     *
     * @generated from protobuf enum value: STRING = 5;
     */
    STRING = 5,
    /**
     * Bytes type.
     *
     * @generated from protobuf enum value: BYTES = 6;
     */
    BYTES = 6
}
/**
 * Well-known protobuf types treated with first-class support in CEL.
 *
 * @generated from protobuf enum google.api.expr.v1alpha1.Type.WellKnownType
 */
export declare enum Type_WellKnownType {
    /**
     * Unspecified type.
     *
     * @generated from protobuf enum value: WELL_KNOWN_TYPE_UNSPECIFIED = 0;
     */
    WELL_KNOWN_TYPE_UNSPECIFIED = 0,
    /**
     * Well-known protobuf.Any type.
     *
     * Any types are a polymorphic message type. During type-checking they are
     * treated like `DYN` types, but at runtime they are resolved to a specific
     * message type specified at evaluation time.
     *
     * @generated from protobuf enum value: ANY = 1;
     */
    ANY = 1,
    /**
     * Well-known protobuf.Timestamp type, internally referenced as `timestamp`.
     *
     * @generated from protobuf enum value: TIMESTAMP = 2;
     */
    TIMESTAMP = 2,
    /**
     * Well-known protobuf.Duration type, internally referenced as `duration`.
     *
     * @generated from protobuf enum value: DURATION = 3;
     */
    DURATION = 3
}
/**
 * Represents a declaration of a named value or function.
 *
 * A declaration is part of the contract between the expression, the agent
 * evaluating that expression, and the caller requesting evaluation.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Decl
 */
export interface Decl {
    /**
     * The fully qualified name of the declaration.
     *
     * Declarations are organized in containers and this represents the full path
     * to the declaration in its container, as in `google.api.expr.Decl`.
     *
     * Declarations used as
     * [FunctionDecl.Overload][google.api.expr.v1alpha1.Decl.FunctionDecl.Overload]
     * parameters may or may not have a name depending on whether the overload is
     * function declaration or a function definition containing a result
     * [Expr][google.api.expr.v1alpha1.Expr].
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf oneof: decl_kind
     */
    declKind: {
        oneofKind: "ident";
        /**
         * Identifier declaration.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Decl.IdentDecl ident = 2;
         */
        ident: Decl_IdentDecl;
    } | {
        oneofKind: "function";
        /**
         * Function declaration.
         *
         * @generated from protobuf field: google.api.expr.v1alpha1.Decl.FunctionDecl function = 3;
         */
        function: Decl_FunctionDecl;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Identifier declaration which specifies its type and optional `Expr` value.
 *
 * An identifier without a value is a declaration that must be provided at
 * evaluation time. An identifier with a value should resolve to a constant,
 * but may be used in conjunction with other identifiers bound at evaluation
 * time.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Decl.IdentDecl
 */
export interface Decl_IdentDecl {
    /**
     * Required. The type of the identifier.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Type type = 1;
     */
    type?: Type;
    /**
     * The constant value of the identifier. If not specified, the identifier
     * must be supplied at evaluation time.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Constant value = 2;
     */
    value?: Constant;
    /**
     * Documentation string for the identifier.
     *
     * @generated from protobuf field: string doc = 3;
     */
    doc: string;
}
/**
 * Function declaration specifies one or more overloads which indicate the
 * function's parameter types and return type.
 *
 * Functions have no observable side-effects (there may be side-effects like
 * logging which are not observable from CEL).
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Decl.FunctionDecl
 */
export interface Decl_FunctionDecl {
    /**
     * Required. List of function overloads, must contain at least one overload.
     *
     * @generated from protobuf field: repeated google.api.expr.v1alpha1.Decl.FunctionDecl.Overload overloads = 1;
     */
    overloads: Decl_FunctionDecl_Overload[];
}
/**
 * An overload indicates a function's parameter types and return type, and
 * may optionally include a function body described in terms of
 * [Expr][google.api.expr.v1alpha1.Expr] values.
 *
 * Functions overloads are declared in either a function or method
 * call-style. For methods, the `params[0]` is the expected type of the
 * target receiver.
 *
 * Overloads must have non-overlapping argument types after erasure of all
 * parameterized type variables (similar as type erasure in Java).
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Decl.FunctionDecl.Overload
 */
export interface Decl_FunctionDecl_Overload {
    /**
     * Required. Globally unique overload name of the function which reflects
     * the function name and argument types.
     *
     * This will be used by a [Reference][google.api.expr.v1alpha1.Reference]
     * to indicate the `overload_id` that was resolved for the function
     * `name`.
     *
     * @generated from protobuf field: string overload_id = 1;
     */
    overloadId: string;
    /**
     * List of function parameter [Type][google.api.expr.v1alpha1.Type]
     * values.
     *
     * Param types are disjoint after generic type parameters have been
     * replaced with the type `DYN`. Since the `DYN` type is compatible with
     * any other type, this means that if `A` is a type parameter, the
     * function types `int<A>` and `int<int>` are not disjoint. Likewise,
     * `map<string, string>` is not disjoint from `map<K, V>`.
     *
     * When the `result_type` of a function is a generic type param, the
     * type param name also appears as the `type` of on at least one params.
     *
     * @generated from protobuf field: repeated google.api.expr.v1alpha1.Type params = 2;
     */
    params: Type[];
    /**
     * The type param names associated with the function declaration.
     *
     * For example, `function ex<K,V>(K key, map<K, V> map) : V` would yield
     * the type params of `K, V`.
     *
     * @generated from protobuf field: repeated string type_params = 3;
     */
    typeParams: string[];
    /**
     * Required. The result type of the function. For example, the operator
     * `string.isEmpty()` would have `result_type` of `kind: BOOL`.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Type result_type = 4;
     */
    resultType?: Type;
    /**
     * Whether the function is to be used in a method call-style `x.f(...)`
     * or a function call-style `f(x, ...)`.
     *
     * For methods, the first parameter declaration, `params[0]` is the
     * expected type of the target receiver.
     *
     * @generated from protobuf field: bool is_instance_function = 5;
     */
    isInstanceFunction: boolean;
    /**
     * Documentation string for the overload.
     *
     * @generated from protobuf field: string doc = 6;
     */
    doc: string;
}
/**
 * Describes a resolved reference to a declaration.
 *
 * @generated from protobuf message google.api.expr.v1alpha1.Reference
 */
export interface Reference {
    /**
     * The fully qualified name of the declaration.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * For references to functions, this is a list of `Overload.overload_id`
     * values which match according to typing rules.
     *
     * If the list has more than one element, overload resolution among the
     * presented candidates must happen at runtime because of dynamic types. The
     * type checker attempts to narrow down this list as much as possible.
     *
     * Empty if this is not a reference to a
     * [Decl.FunctionDecl][google.api.expr.v1alpha1.Decl.FunctionDecl].
     *
     * @generated from protobuf field: repeated string overload_id = 3;
     */
    overloadId: string[];
    /**
     * For references to constants, this may contain the value of the
     * constant if known at compile time.
     *
     * @generated from protobuf field: google.api.expr.v1alpha1.Constant value = 4;
     */
    value?: Constant;
}
declare class CheckedExpr$Type extends MessageType<CheckedExpr> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.CheckedExpr
 */
export declare const CheckedExpr: CheckedExpr$Type;
declare class Type$Type extends MessageType<Type> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Type
 */
export declare const Type: Type$Type;
declare class Type_ListType$Type extends MessageType<Type_ListType> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Type.ListType
 */
export declare const Type_ListType: Type_ListType$Type;
declare class Type_MapType$Type extends MessageType<Type_MapType> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Type.MapType
 */
export declare const Type_MapType: Type_MapType$Type;
declare class Type_FunctionType$Type extends MessageType<Type_FunctionType> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Type.FunctionType
 */
export declare const Type_FunctionType: Type_FunctionType$Type;
declare class Type_AbstractType$Type extends MessageType<Type_AbstractType> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Type.AbstractType
 */
export declare const Type_AbstractType: Type_AbstractType$Type;
declare class Decl$Type extends MessageType<Decl> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Decl
 */
export declare const Decl: Decl$Type;
declare class Decl_IdentDecl$Type extends MessageType<Decl_IdentDecl> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Decl.IdentDecl
 */
export declare const Decl_IdentDecl: Decl_IdentDecl$Type;
declare class Decl_FunctionDecl$Type extends MessageType<Decl_FunctionDecl> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Decl.FunctionDecl
 */
export declare const Decl_FunctionDecl: Decl_FunctionDecl$Type;
declare class Decl_FunctionDecl_Overload$Type extends MessageType<Decl_FunctionDecl_Overload> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Decl.FunctionDecl.Overload
 */
export declare const Decl_FunctionDecl_Overload: Decl_FunctionDecl_Overload$Type;
declare class Reference$Type extends MessageType<Reference> {
    constructor();
}
/**
 * @generated MessageType for protobuf message google.api.expr.v1alpha1.Reference
 */
export declare const Reference: Reference$Type;
export {};
