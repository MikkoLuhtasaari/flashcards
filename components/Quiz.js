import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import {black, green, red, white, blue} from "../utils/colors";
import TextButton from "./TextButton";
import {NavigationActions} from "react-navigation";
import {clearLocalNotification, setLocalNotification} from "../utils/helpers";

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

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.back({}))
    };

    startOver = () => {
        this.setState(() => ({
            isFlipped: false,
            questionNumber: 1,
            correctAnswers: 0
        }))
    };

    answer = (correct) => {
        if (correct) {
            this.setState(() => ({
                isFlipped: false,
                questionNumber: this.state.questionNumber + 1,
                correctAnswers: this.state.correctAnswers + 1
            }))
        } else {
            this.setState(() => ({
                isFlipped: false,
                questionNumber: this.state.questionNumber + 1
            }))
        }
    };

    setNotifications = () => {
        clearLocalNotification()
            .then(setLocalNotification)
    };

    render() {
        const {isFlipped, questionNumber, correctAnswers} = this.state;
        const deck = this.props.navigation.state.params.deck;
        const deckTitle = this.props.navigation.state.params.deckTitle;
        const isQuizDone = questionNumber > deck.questions.length;
        if(!isQuizDone){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deckTitle}</Text>
                <Text style={styles.qa}>{questionNumber}/{deck.questions.length}</Text>
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
                <TextButton style={styles.flip} onPress={this.flipCard}>
                    Flip
                </TextButton>
            </View>
        )
        } else {
            this.setNotifications();
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{deckTitle}</Text>
                    <Text style={styles.qa}>{deck.questions.length}/{deck.questions.length}</Text>
                    <Text style={styles.qa}>You scored {(correctAnswers / deck.questions.length) * 100}%</Text>
                    <TextButton style={styles.backToDeck} onPress={this.toHome}>
                        Back to deck
                    </TextButton>
                    <TextButton style={styles.startAQuiz} onPress={this.startOver}>
                        Try again
                    </TextButton>
                </View>
            )
        }
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
    },
    flip: {
        backgroundColor: blue,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: black,
        justifyContent: 'flex-start',
    },
    backToDeck: {
        backgroundColor: black,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: white,
        justifyContent: 'flex-start',
    },
    startAQuiz: {
        backgroundColor: green,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        color: black,
        justifyContent: 'flex-start',
    }
});

export default Quiz