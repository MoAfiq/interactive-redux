import React from "react";
import { Handle } from "react-flow-renderer";
import { connect } from "react-redux";

function ComponentReducer({}) {
    return (
        <div>
            <Handle type='source' position='bottom' />
        </div>
    );
}

export default ComponentReducer;
