import { configureStore } from "@reduxjs/toolkit";

 import { combineReducers ,applyMiddleware} from "redux";
// import {configureStore} from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userRegisterLoginReducer } from './reducers/userReducer';
import { cartReducer } from "./reducers/cartReducers";
import { getCategoriesReducer } from "./reducers/categoryReducers";


const userInfoInLocalStorage= localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) 
: sessionStorage.getItem("userInfo")
? JSON.parse(sessionStorage.getItem("userInfo")) : {}

const cartItemsInLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
  cart:{
    cartItems:cartItemsInLocalStorage,
    itemsCount:cartItemsInLocalStorage ? cartItemsInLocalStorage.reduce((quantity,item)=> 
    Number(item.quantity) + quantity,0) : 0,
    cartSubtotal:cartItemsInLocalStorage ? cartItemsInLocalStorage.reduce((price,item)=>
    price + item.price * item.quantity,0): 0
  },
  userRegisterLogin:{userInfo:userInfoInLocalStorage}
}

 const rootReducer = combineReducers({
  userRegisterLogin: userRegisterLoginReducer,
  cart:cartReducer,
  getCategories:getCategoriesReducer
})

//const middleware=[thunk]

export const store = configureStore({

 reducer:rootReducer,
 preloadedState: INITIAL_STATE

});

export default store;
