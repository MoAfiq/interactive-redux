import React from "react";
import { connect } from "react-redux";
import { Handle } from "react-flow-renderer";

function ComponentF({ user_name }) {
    return (
        <div>
            <h3>Component F</h3>
            <h4 style={{ color: "orange" }}>user_name: {user_name}</h4>
            <Handle type='target' position='bottom' id='f-t'/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user_name: state.user_name,
    };
};

export default connect(mapStateToProps)(ComponentF);
