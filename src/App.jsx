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
                    href='https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png'
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
