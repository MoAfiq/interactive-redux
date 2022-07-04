import React from "react";
import { connect } from "react-redux";
import { Handle } from "react-flow-renderer";
import styled from "styled-components";
import Swal from 'sweetalert2'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.textarea`
    height: 60px;
    width: 95%;
    font-size: 10px;
    resize: none;
`;

const Button = styled.button`
 font-size: 11px;
 margin: 10px auto;
 padding: 5px;
 shadow: none;
 &:hover {
    background: yellow;
    border: 2px solid yellow;
    border-radius: 2px;
}
`;

const Text = styled.p`
    font-size: 12px;
    font-weight: 800;
`;

function ComponentC({ dispatch, setUserNameToStore }) {
    const [user_name, _] = React.useState("Ella Musk");
    const [action, setAction] = React.useState()

    const parseAction = e => {
        let obj = e.target.value;
        let jsonStr = (object) => object.replace(/(\w+:)|(\w+ :)/g, (matchedStr) => {
            return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
          });

        try {
            obj = JSON.parse(jsonStr(obj));
            setAction({...obj});
        } catch (_) {
            setAction({})
        }
    }

    return (
        <Container>
            <h3>Component C</h3>
            <h5 style={{ color: "orange" }}>user_name: {user_name}</h5>
            <Text>Action:</Text>
            <Input type="textarea" id="action" onChange={parseAction}/>
            <Button onClick={() => {
                try {
                  dispatch(action)
                } catch (err) {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Error in dispatching!',
                        text: 'Did you entered your action format correctly?',
                      })
                }}}>
                dispatch(action)
            </Button>
            <Handle type='source' position='bottom' />
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserNameToStore: (user_name) =>
            dispatch({
                type: "SET_USER_NAME",
                payload: user_name,
            }),
        dispatch
    };
};

export default connect(null, mapDispatchToProps)(ComponentC);
