import {legacy_createStore as createStore } from "redux"
import { myReducer } from "../Redux/Reducer"

export const myStore= createStore(myReducer)