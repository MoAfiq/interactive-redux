import React from "react";
import { connect } from "react-redux";
import { Handle } from "react-flow-renderer";

function ComponentC({ setUserNameToStore }) {
    const [user_name, _] = React.useState("Ella Musk");
    return (
        <div>
            <h3>Component C</h3>
            <h5 style={{ color: "orange" }}>user_name: {user_name}</h5>
            <button onClick={() => setUserNameToStore(user_name)}>
                Set user_name to store
            </button>
            <Handle type='source' position='bottom' />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserNameToStore: (user_name) =>
            dispatch({
                type: "SET_USER_NAME",
                payload: user_name,
            }),
    };
};

export default connect(null, mapDispatchToProps)(ComponentC);
