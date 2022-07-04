import React from "react";
import { addEdge } from "react-flow-renderer";
import ComponentC from "./components/ComponentC";
import ComponentF from "./components/ComponentF";
import ComponentStore from "./components/ComponentStore";

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
        data: { label: "Component E" },
        position: { x: 350, y: 250 },
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
        position: { x: 250, y: 400 },
        targetPosition: 'top',
        style: {
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "#702963",
            color: "white",
            fontSize: 18,
        },
    },
];

export const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "2", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e3-6", source: "3", target: "6" },
    { id: "e3-7", source: "3", target: "7" },
    { id: "e3-store", source: "4", target: "store", animated: true },
    { id: "e7-store", source: "7", target: "store", animated: true },
];
