import React, { useState } from "react";
import ReactFlow, { addEdge } from "react-flow-renderer";
import { initialEdges, initialNodes } from "./initials";

function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow nodes={nodes} edges={edges} fitView />
        </div>
    );
}

export default App;
