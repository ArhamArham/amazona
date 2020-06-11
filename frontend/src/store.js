import {createStore,combineReducers, compose, applyMiddleware} from 'redux'
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productUpdateReducer } from './reducers/productReducer'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer'
import Cookie from 'js-cookie'
import { userSignInReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducer'
import { orderDeleteReducer, orderListReducer, myOrderListReducer, orderPayReducer, orderDetailsReducer, orderCreateReducer } from './reducers/orderReducer'

const cartItems=Cookie.getJSON("cartItems") || [];
const userInfo=Cookie.getJSON("userInfo") || null;


const initailState={cart:{cartItems,shipping: {}, payment: {}},userSignin:{userInfo}}
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productSave:productSaveReducer,
    productUpdate:productUpdateReducer,
    productDelete: productDeleteReducer ,
    cart:cartReducer,
    userSignin:userSignInReducer,
    userRegister:userRegisterReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer 
     
})

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initailState, composerEnhancer(applyMiddleware(thunk)))

export default store;