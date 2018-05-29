import {AsyncStorage} from "react-native"
const DECK_STORAGE_KEY = "flashcards:decks";

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function getDeck(id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)[id]
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
}

export function addCardToDeck(title, card) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: card
    }))
}