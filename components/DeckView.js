import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, gray, white} from "../utils/colors";
import {addCardToDeck, getDecks} from "../utils/api";
import {StackActions, NavigationActions} from "react-navigation"
import {CheckBox} from "react-native-elements"
import TextButton from "./TextButton";

class DeckView extends Component {

    addACard(deckTitle) {
        this.props.navigation.push(
            'AddACardToDeck',
            {
                deckTitle: deckTitle
            }
        );
    }

    startQuiz(deckTitle, deck) {
        this.props.navigation.push(
            "Quiz",
            {
                deckTitle: deckTitle,
                deck: deck
            }
        )
    }

    render() {
        const deck = this.props.navigation.state.params.deck;
        const deckTitle = this.props.navigation.state.params.deckTitle;
        return (
            <View>
                <Text style={styles.title}>
                    {deckTitle} with {deck.questions.length} cards.
                </Text>
                <TextButton style={styles.addAQuestion} onPress={() => this.addACard(deckTitle)}>
                    Add a question
                </TextButton>
                <TextButton style={styles.startAQuiz} onPress={() => this.startQuiz(deckTitle, deck)}>
                    Start a quiz
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
    row: {
        alignItems: 'stretch',
        padding: 20,
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        color: black,
        paddingBottom: 30
    },
    addAQuestion: {
        backgroundColor: black,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: white,
        justifyContent: 'flex-start',
    },
    startAQuiz: {
        backgroundColor: white,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: black,
        justifyContent: 'flex-start',
    }
});

export default DeckView