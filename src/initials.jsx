import React from "react";
import { addEdge } from "react-flow-renderer";
import ComponentC from "./components/ComponentC";
import ComponentE from "./components/ComponentE";
import ComponentF from "./components/ComponentF";
import ComponentStore from "./components/ComponentStore";
import ComponentState from "./components/ComponentState";
import ComponentReducer from "./components/ComponentReducer";

import "./components/styles.css";

const initialReducerNodes = [
    {
        id: "condition",
        type: "target",
        data: {
            label: (
                <div>
                    <strong>action.type</strong>
                </div>
            ),
        },
        position: { x: 100, y: 25 },
        targetPosition: "bottom",
        parentNode: "reducer",
        style: {
            background: "yellow",
        },
    },
    {
        id: "action1",
        type: "target",
        data: {
            label: (
                <div>
                    <strong>SET_USER_NAME</strong>
                </div>
            ),
        },
        position: { x: 20, y: 100 },
        targetPosition: "top",
        parentNode: "reducer",
        style: {
            fontSize: "10px",
            width: "fit-content",
        },
    },
    {
        id: "action2",
        type: "target",
        data: {
            label: (
                <div>
                    <strong>ADD_BALANCE</strong>
                </div>
            ),
        },
        position: { x: 131, y: 100 },
        targetPosition: "top",
        parentNode: "reducer",
        style: {
            fontSize: "10px",
            width: "fit-content",
        },
    },
    {
        id: "action3",
        type: "target",
        data: {
            label: (
                <div>
                    <strong>DEDUCT_BALANCE</strong>
                </div>
            ),
        },
        position: { x: 230, y: 100 },
        targetPosition: "top",
        parentNode: "reducer",
        style: {
            fontSize: "10px",
            width: "fit-content",
        },
    },
];

export const initialNodes = [
    {
        id: "1",
        type: "input",
        data: {
            label: (
                <div>
                    <strong>App</strong>
                </div>
            ),
        },
        position: { x: 250, y: 25 },
    },
    {
        id: "2",
        // you can also pass a React component as a label
        data: { label: <div>Component A</div> },
        position: { x: 50, y: 125 },
    },
    {
        id: "3",
        // you can also pass a React component as a label
        data: { label: <div>Component B</div> },
        position: { x: 450, y: 125 },
    },
    {
        id: "4",
        type: "output",
        data: { label: <ComponentC /> },
        position: { x: -50, y: 250 },
        style: {
            background: "teal",
        },
    },
    {
        id: "5",
        type: "output",
        data: { label: "Component D" },
        position: { x: 150, y: 250 },
    },
    {
        id: "6",
        type: "output",
        data: { label: <ComponentE /> },
        position: { x: 350, y: 250 },
        style: {
            background: "teal",
        },
    },
    {
        id: "7",
        type: "output",
        data: {
            label: <ComponentF />,
        },
        position: { x: 550, y: 250 },
        style: {
            background: "teal",
        },
        targetPosition: "top",
    },
    {
        id: "store",
        type: "output",
        data: {
            label: <ComponentStore />,
        },
        position: { x: 140, y: 600 },
        targetPosition: "top",
        className: "store",
    },
    {
        id: "reducer",
        type: "source",
        data: {
            label: <ComponentReducer />,
        },
        position: { x: 25, y: 50 },
        targetPosition: "bottom",
        className: "reducer",
        parentNode: "store",
    },
    {
        id: "state",
        type: "output",
        data: {
            label: <ComponentState />,
        },
        position: { x: 25, y: 220 },
        targetPosition: "top",
        className: "state",
        parentNode: "store",
    },
    ...initialReducerNodes,
];

export const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e3-6", source: "3", target: "6" },
    { id: "e3-7", source: "3", target: "7" },
    { id: "e3-store", source: "4", target: "store", animated: true },
    { id: "e6-store", source: "6", target: "store", animated: true },
    { id: "e7-store", source: "7", target: "store", animated: true },
    {
        id: "ereducer-state",
        source: "reducer",
        target: "state",
        animated: true,
    },
    {
        id: "econdition-action1",
        source: "condition",
        target: "action1",
    },
    {
        id: "econdition-action2",
        source: "condition",
        target: "action2",
    },
    {
        id: "econdition-action3",
        source: "condition",
        target: "action3",
    },
];
