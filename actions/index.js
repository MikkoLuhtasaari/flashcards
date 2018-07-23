export const ACTIONS = {
    ADD_CARD: 'ADD_CARD',
    ADD_DECK: 'ADD_DECK',
    GET_DECKS: "GET_DECKS"
};

export const addCard = (deckTitle, card) => ({
    type: ACTIONS.ADD_CARD,
    deckTitle,
    card
});

export const addDeck = (deck) => ({
    type: ACTIONS.ADD_DECK,
    deck
});

export const getDecks = (decks) => ({
    type: ACTIONS.GET_DECKS,
    decks
});