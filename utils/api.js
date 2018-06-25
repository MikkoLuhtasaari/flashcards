import {AsyncStorage} from "react-native"

const DECK_STORAGE_KEY = "flashcards:decks";

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function getDeck(id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)[id]
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            ["questions"]: []
        }
    }))
}

export function addCardToDeck(title, card) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            // TODO can add only one question
            ["questions"]: [
                card
            ]
        }
    }))
}

export function reset() {
    return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}