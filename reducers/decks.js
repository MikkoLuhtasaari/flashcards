import {ACTIONS} from '../actions';

const decks = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_DECK:
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
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: [...state[action.deckTitle].questions, action.card]
                }
            };

        case ACTIONS.GET_DECKS:
            let temp = JSON.parse(action.decks);
            return {
                ...state,
                ...temp
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