import {AsyncStorage} from "react-native"

const DECK_STORAGE_KEY = "flashcards:decks";

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function getDeck(deckTitle) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
        const decks = JSON.parse(result);

        return decks[deckTitle];
    });
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            ["questions"]: []
        }
    }))
}

export function addCardToDeck({deckTitle, card}) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
        let decks = JSON.parse(result);
        console.log(deckTitle);

        let newQuestions = JSON.parse(
            JSON.stringify(decks[deckTitle].questions)
        );
        newQuestions.push(card);

        const value = JSON.stringify({
            [deckTitle]: {questions: newQuestions}
        });
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, value)
    })
}

export function reset() {
    return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}