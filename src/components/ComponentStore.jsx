import React from "react";
import { connect } from "react-redux";
import { Handle } from "react-flow-renderer";

function ComponentStore({ state }) {
    return (
        <div>
            <strong>Store</strong>
            {Object.keys(state).map((key) => {
                return (
                    <h5 style={{ color: "orange" }}>
                        {key}: {state[key].length == 0 ? '""' : state[key]}
                    </h5>
                );
            })}
            <Handle type='target' position='right' />
            <Handle type='target' position='left' />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStateToProps)(ComponentStore);
