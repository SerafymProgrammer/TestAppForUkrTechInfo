import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//reducers
import { envReducer } from './reducer';



const rootReducer = combineReducers({
    envReducer: envReducer,

});

const configureStore = () => {
    return createStore(rootReducer, compose(applyMiddleware(thunk)));
}

export default configureStore;