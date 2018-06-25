import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, white} from "../utils/colors";
import {addCardToDeck} from "../utils/api";
import {StackActions, NavigationActions} from "react-navigation"

class AddCardToDeck extends Component {
    state = {
        question: "Insert question",
        answer1: "Insert first answer",
        answer2: "Insert second answer"
    };

    toHome = () => {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        }))
    };

    submit = () => {
        const {question, answer1, answer2} = this.state;
        const deckName = this.props.navigation.state.params.deck;
        const formattedQuestion = {
            "question": {
                "title": question,
                "answers": {
                    "answer1": answer1,
                    "answer2": answer2
                }
            }
        };
        this.setState(() => ({
            question: "",
            answer1: "",
            answer2: ""
        }));
        console.log("Deckname " + deckName + " and Formatted question " + formattedQuestion.toString());
        this.toHome();
        // addCardToDeck().then((returnValue) => {
        //     this.toHome()
        // });

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Title here!</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(question) => this.setState({question})}
                    editable={true}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(answer1) => this.setState({answer1})}
                    editable={true}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(answer2) => this.setState({answer2})}
                    editable={true}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TouchableOpacity onPress={this.submit} style={{backgroundColor: black}}>
                    <Text style={{color: blue}}>Submit</Text>
                </TouchableOpacity>
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
        fontSize: 30,
        color: black
    }
});

export default AddCardToDeck