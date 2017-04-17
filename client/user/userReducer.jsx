import * as actionTypes from 'actionTypes';
import loginReducer from 'loginReducer';

function userReducer(state = {}, action) {
    return {
        login: loginReducer(state.login, action),
        authToken: ((state = "", action) => {
                    switch (action.type) {
                        case actionTypes.FETCH_REGISTER_SUCCESS:
                        //case actionTypes.FETCH_LOGIN_SUCCESS:
                            return action.data.authToken;
                        default:
                            return state;
                    }
                  })(state.authToken, action),
        email: ((state = "", action) => {
                    switch (action.type) {
                        case actionTypes.FETCH_REGISTER_SUCCESS:
                            //case actionTypes.FETCH_LOGIN_SUCCESS:
                            return action.data.email;
                        default:
                            return state;
                    }
                })(state.email, action)
    }
}

export default userReducer;