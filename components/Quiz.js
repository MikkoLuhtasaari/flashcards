import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, gray, white} from "../utils/colors";
import {addCardToDeck, getDecks} from "../utils/api";
import {StackActions, NavigationActions} from "react-navigation"
import {CheckBox} from "react-native-elements"
import TextButton from "./TextButton";

class Quiz extends Component {
    state = {
        isFlipped: false,
        questionNumber: 1,
        correctAnswers: 0
    };

    flipCard = () => {
        this.setState(() => ({
            isFlipped: !this.state.isFlipped
        }));
    };

    render() {
        const {isFlipped, questionNumber} = this.state;
        const deck = this.props.navigation.state.params.deck;
        const deckTitle = this.props.navigation.state.params.deckTitle;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deckTitle}</Text>
                {isFlipped
                    ? <Text style={styles.qa}>{deck.questions[questionNumber - 1].answer}</Text>
                    : <Text style={styles.qa}>{deck.questions[questionNumber - 1].question}</Text>}

                <TextButton onPress={this.flipCard}>
                    Flip
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
    title: {
        textAlign: "center",
        fontSize: 40,
        color: black,
        paddingBottom: 30
    },
    qa: {
        textAlign: "center",
        fontSize: 30,
        color: black,
        paddingBottom: 30
    },
});

export default Quiz