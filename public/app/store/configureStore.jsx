var { createStore, combineReducers, applyMiddleware, compose } = require('redux');
var thunk = require('redux-thunk').default;
import loginReducer from 'loginReducer';
import registerReducer from 'registerReducer';
import errorReducer from 'errorReducer';

export var configure = (initialState = {}) => {
  var reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    error: errorReducer
  });

  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),  //note: must go before line below
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};