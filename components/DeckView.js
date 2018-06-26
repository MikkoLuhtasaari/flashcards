import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, white} from "../utils/colors";
import {addCardToDeck, getDecks} from "../utils/api";
import {StackActions, NavigationActions} from "react-navigation"
import {CheckBox} from "react-native-elements"

class DeckView extends React.Component {
    render() {
        const deck = this.props.navigation.state.params.deck;
        const deckTitle = this.props.navigation.state.params.deckTitle;
        return (
            <View>
                <Text>
                    {deckTitle} with {deck.questions.length} cards.
                </Text>
            </View>
        )
    }
}

export default DeckView