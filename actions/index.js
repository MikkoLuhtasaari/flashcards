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

export const getDecksAction = (decks) => ({
    type: ACTIONS.GET_DECKS,
    decks
});

export const resetDecksAction = () => ({
    type: ACTIONS.RESET_DECKS
});