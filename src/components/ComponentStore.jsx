import React from "react";
import { connect } from "react-redux";
import { Handle } from "react-flow-renderer";

function ComponentStore({ state }) {
    return (
        <div>
            <Handle type='source' position='top' />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStateToProps)(ComponentStore);
