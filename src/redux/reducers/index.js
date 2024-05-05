import { combineReducers } from "@reduxjs/toolkit"
import auth from "./auth"
import cars from "./cars"

export default combineReducers({
  auth,
  cars,
})
