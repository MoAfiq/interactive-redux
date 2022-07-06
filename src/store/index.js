import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const initialState = {
    user_name: '""',
    balance: 0,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER_NAME":
            return {
                ...state,
                user_name: action.payload,
            };
        case "ADD_BALANCE":
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        case "DEDUCT_BALANCE":
            return {
                ...state,
                balance:
                    state.balance === 0 ? 0 : state.balance - action.payload,
            };
        case "RESET":
            return {
                user_name: '""',
                balance: 0,
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
