import React, {Component} from "react"
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import {connect} from 'react-redux';
import {black, blue, white} from "../utils/colors";
import {addCardToDeck} from "../utils/api";
import {NavigationActions, StackActions} from "react-navigation"
import {addCardAction} from "../actions";

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
        const card = {
            "question": question,
            "answer": answer
        };

        this.setState(() => ({
            question: "",
            answer: ""
        }));

        this.props.addCardAction(deckTitle, card);

        addCardToDeck({deckTitle, card}).then(() => {
            this.toHome()
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Insert question and answer below</Text>
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

function mapStateToProps({decks}) {
    return {
        decks: decks
    }
}

export default connect(mapStateToProps, {addCardAction})(AddCardToDeck)