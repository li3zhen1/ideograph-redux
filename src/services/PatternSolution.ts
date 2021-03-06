// Generated by https://quicktype.io

import { BinaryLogicOperator, UnaryLogicOperator } from "../utils/common/operator";

/**
 * 和后端通信的接口
 */
export namespace Solution {
    
    export type MessageType = {
        pattern: Solution.Pattern;
        data: Solution.PatternSolution;
    }

    export interface Pattern {
        nodes: PatternNode[];
        edges: PatternEdge[];
        constraints: PatternConstraint[];
        aggregations?: {
            nodes: string[];
            edges: string[];
            multiplier: number;
        }[]
    }



    enum LogicOperator {
        And = "And",
        Or = "Or",
        Not = "Not",
        Xor = "Xor",
        Xnor = "Xnor",
    }

    export const LogicOperator2Literal: Record<BinaryLogicOperator | UnaryLogicOperator, LogicOperator> = {
        [BinaryLogicOperator.And]: LogicOperator.And,
        [BinaryLogicOperator.Or]: LogicOperator.Or,
        [UnaryLogicOperator.Not]: LogicOperator.Not,
    }
    

    export interface PatternLogicOperator {
        patternId: string,
        type: LogicOperator,
    }

    export type CompositePattern = Pattern & {
        logicOperators: PatternLogicOperator[],
        connections: { from: string, to: string }[],
    }

    export type Aggregation = {
        nodes: string[],
        edges: string[],
        multiplier: number,
    }

    export type CompositePatternWithAggregation = CompositePattern & {
        aggregations: Aggregation[]
    }

    export interface PatternConstraint {
        patternId: string;
        targetType: string;
        targetPatternId: string;
        property: string;
        operator: string;
        value: string;
    }

    export interface PatternEdge {
        patternId: string;
        type: string;
        fromPatternId: string;
        toPatternId: string;
    }

    export interface PatternNode {
        patternId: string;
        type: string;
    }




    // Generated by https://quicktype.io

    export interface PatternSolution {
        nodes: Record<string, WorkspaceNode>;
        edges: Record<string, WorkspaceEdge>;
    }

    export interface AggregatedPatternSolution {
        pattern: Pattern,
        solution: PatternSolution[]
    }


    export interface WorkspaceEdge {
        _id: string;
        _class: string;
        clusterId: number;
        edgeId: number;
        edgeLabel: string;
        evidences: Evidences;
        fromId: number;
        name: string;
        properties: Evidences;
        relationId: number;
        source: string;
        tagScore: Evidences;
        toId: number;
        // trustedAccessibility: number;
        // trustedCorrectness: number;
        // trustedLevel: number;
        // trustedReliability: number;
        // trustedSafety: number;
        // trustedTimeliness: number;
        // trustedValue: number;
    }

    export interface Evidences {
    }

    export interface WorkspaceNode {
        _id: string;
        _class: string;
        name: string;
        nodeId: number;
        types: string;
        tags: null;
        judgeParent: boolean;
        properties: { [key: string]: string };
    }
}