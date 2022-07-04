import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const initialState = {
    user_name: "",
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER_NAME":
            return {
                ...state,
                user_name: action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
