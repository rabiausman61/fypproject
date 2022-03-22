import { combineReducers } from "redux";
import authreducers from "./authreducers";
import productreducer from './productreducer'
import categoryreducer from './categoryreducer'
import orderreducer from './ordereducer'
const rootReducers=combineReducers({
    auth:authreducers,
    category:categoryreducer,
    product:productreducer,
    order:orderreducer


})
export default rootReducers;