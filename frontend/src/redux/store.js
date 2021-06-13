import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducers'
import { getPoductDetailsReducer, getProductsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getPoductDetailsReducer,
});

const middleware = [thunk];

const cartFromLoalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLoalStorage,
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;