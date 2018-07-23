import {ACTIONS} from '../actions';

const decks = (state = {}, action) => {
    console.log("Action: " + Object.keys(action));
    switch (action.type) {
        case ACTIONS.ADD_DECK:
            return {
                ...state,
                [action.title]: action.title
            };

        case ACTIONS.ADD_CARD:
            return state;

        case ACTIONS.GET_DECKS:
            return {
                ...state,
                ...action.decks
            };

        default:
            return state;
    }
};

export default decks;