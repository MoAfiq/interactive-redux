import React, { useState } from "react";
import ReactFlow, { addEdge } from "react-flow-renderer";
import { Helmet } from "react-helmet";
import { initialEdges, initialNodes } from "./initials";

function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Interactive Redux</title>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://cdn.frankerfacez.com/emoticon/379582/4'
                    sizes='16x16'
                />
            </Helmet>
            <div style={{ width: "100vw", height: "100vh" }}>
                <ReactFlow nodes={nodes} edges={edges} fitView />
            </div>
        </>
    );
}

export default App;
