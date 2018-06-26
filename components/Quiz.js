import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import {black, green, red, white} from "../utils/colors";
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

    answer = (correct) => {
      console.log(correct);
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
                    : <View>
                        <Text style={styles.qa}>{deck.questions[questionNumber - 1].question}</Text>
                        <TextButton style={styles.correct} onPress={() => this.answer(true)}>
                            Correct
                        </TextButton>
                        <TextButton style={styles.incorrect} onPress={() => this.answer(false)}>
                            Incorrect
                        </TextButton>
                    </View>
                }

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
    correct: {
        backgroundColor: green,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: white,
        justifyContent: 'flex-start',
    },
    incorrect: {
        backgroundColor: red,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: white,
        justifyContent: 'flex-start',
    }
});

export default Quiz