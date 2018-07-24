import {ACTIONS} from '../actions';

const decks = (state = {}, action) => {
    console.log("Action: " + Object.keys(action));
    switch (action.type) {
        case ACTIONS.ADD_DECK:
            console.log(action.deck);
            return {
                ...state,
                [action.deck]: {
                    "title": action.deck,
                    "questions": []
                }
            };

        case ACTIONS.ADD_CARD:
            return {
                ...state,
                [action.deck]: {
                    ...state[action.deck],
                    questions: [...state[action.deck].questions, action.question]
                }
            };

        case ACTIONS.GET_DECKS:
            console.log(action.decks);
            return {
                ...state,
                ...action.decks
            };

        case ACTIONS.RESET_DECKS:
            return {
                ...state,
                decks: {}
            };

        default:
            return state;
    }
};

export default decks;