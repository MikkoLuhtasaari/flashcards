import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, white} from "../utils/colors";
import {addCardToDeck, getDecks} from "../utils/api";
import {StackActions, NavigationActions} from "react-navigation"
import {CheckBox} from "react-native-elements"

class AddCardToDeck extends Component {
    state = {
        question: "Insert question",
        answer: "Insert answer"
    };

    toHome = () => {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'})
            ]
        }))
    };

    submit = () => {
        const {question, answer} = this.state;
        const deckTitle = this.props.navigation.state.params.deckTitle;
        console.log("AddCardToDeck " + deckTitle);
        const card = {
                "question": question,
                "answer": answer
        };

        this.setState(() => ({
            question: "",
            answer: ""
        }));

        addCardToDeck({deckTitle, card}).then(() => {
            this.toHome()
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Title here!</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}
                    editable={true}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}
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