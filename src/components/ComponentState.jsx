import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const State = styled.div`
    display: flex;
    flex-direction: column;
    & > h5 {
        color: orange;
        margin: 2px auto;
    }
`;

function ComponentState({ state }) {
    return (
        <State>
            {Object.keys(state).map((key) => {
                return (
                    <h5 key={key} style={{ color: "orange" }}>
                        {key}: {state[key].length == 0 ? '""' : state[key]}
                    </h5>
                );
            })}
        </State>
    );
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStateToProps)(ComponentState);
