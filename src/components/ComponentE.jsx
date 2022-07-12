import React from "react";
import { connect } from "react-redux";
import { Handle } from "react-flow-renderer";

function ComponentE({ balance }) {
    return (
        <div>
            <h3>Component E</h3>
            <h4 style={{ color: "orange" }}>balance : {balance}</h4>
            <Handle type='target' position='bottom' id='e-t' />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance,
    };
};

export default connect(mapStateToProps)(ComponentE);
