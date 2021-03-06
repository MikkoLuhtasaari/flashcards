import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, white} from "../utils/colors";
import {saveDeckTitle} from "../utils/api";
import {connect} from 'react-redux';
import {getDecksAction, addDeckAction} from "../actions/index.js";

class NewDeck extends Component {
    state = {
        text: "Insert deck title here!"
    };

    submit = () => {
        const title = this.state.text;
        this.setState(() => ({
            text: ""
        }));
        this.props.addDeck(title);
        saveDeckTitle(title).then(() => {
            this.props.navigation.push(
                'Details',
                {
                    deckTitle: title,
                    deck: {
                        [title]: {
                            ["questions"]: []
                        }
                    }
                }
            );
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Title here!</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
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
        decks,
    }
}

export default connect(mapStateToProps, {getDecks: getDecksAction, addDeck: addDeckAction})(NewDeck)