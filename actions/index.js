import {getDecks} from "../utils/api";

export const ACTIONS = {
    ADD_CARD: 'ADD_CARD',
    ADD_DECK: 'ADD_DECK',
    GET_DECKS: "GET_DECKS",
    RESET_DECKS: "RESET_DECKS"
};

export const addCardAction = (deckTitle, card) => ({
    type: ACTIONS.ADD_CARD,
    deckTitle,
    card
});

export const addDeckAction = (deck) => ({
    type: ACTIONS.ADD_DECK,
    deck
});

const getDecksActionHelper = (decks) => ({
    type: ACTIONS.GET_DECKS,
    decks
});

export function getDecksAction() {
    return(dispatch, getState) => {
        return getDecks()
            .then((decks) => { dispatch(getDecksActionHelper(decks) ) } )
    }
}