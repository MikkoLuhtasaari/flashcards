import { combineReducers } from "redux";
import Decks from "./decks";

const rootReducer = combineReducers({
    decks: Decks
});

export default rootReducer;