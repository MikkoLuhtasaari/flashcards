# Flashcards Project

This project is the third project for Udacitys React Nanodegree.

User can create his own flashcards for studying and the app persists them in local storage.

The [Create React Native App](https://github.com/react-community/create-react-native-app) was used to bootstrap this project.

## Installing and starting the server

* install all project dependencies with `npm install`

* start the development server with `npm start`

## Testing information

* Project should work on both Android and iOS

* Project has only been tested on Android emulator and real Android device

## Information about the app

* AddCardToDeck makes it possible for the user to add questions for a deck

* DeckList shows a list preview of the users decks

* DeckView contains additional information about the deck and navigation options to adding cards and starting a quiz

* NewDeck contains a view for creating new decks

* Quiz is the view where user can quiz themselves with a specific deck

## Data

* Data is persisted in a local storage. Type of storage depends on the target device.

* Name of the deck is stored in the name of the object.

* Inside of the deck object there is questions array

* Each record inside questions array contains question and answer strings

To communicate with the local storage we have api.js file which contains following methods:

* `getDecks()`
* `getDeck()`
* `saveDeckTitle()`
* `addCardToDeck()`

1) `getDecks()` Method

*Description*: Get all of the existing decks from the local storage.

2) `getDeck()` Method

*Description*: Get specified deck from the local storage.

3) `saveDeckTitle()` Method

*Description*: Creates a new deck with user provided title

4) `addCardToDeck()` Method

*Description*: Adds user provided question object to a deck

## Contributing

This is my own final project for the Udacitys React Nanodegree.

If someone for some weird reason has any interest in this project feel free to use it.