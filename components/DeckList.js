import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {white, gray, blue, black} from "../utils/colors"
import {getDecks, reset} from "../utils/api";

class DeckList extends Component {
    state = {
        decks: []
    };

    reset = () => {
        console.log("Reseting");
            reset()
    };

    componentDidMount() {
        getDecks()
            .then((decks) => this.setState({
                decks
            }))
    }

    render() {
        const decks = this.state.decks;
        console.log(decks);
        return (
            <View style={styles.container}>
                <Text>DeckList</Text>
                {Array.isArray(decks) && decks.length > 0 &&
                decks.map((deck) => {
                    console.log(deck)
                })}
                <TouchableOpacity onPress={this.reset} style={{backgroundColor:black}}>
                    <Text style={{color:blue}}>reset</Text>
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
    deckItem: {
        backgroundColor: gray,
        paddingTop: 10,
        justifyContent: "center"
    }
});

export default DeckList