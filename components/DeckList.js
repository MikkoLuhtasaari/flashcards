import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import {white, gray} from "../utils/colors"
import {getDecks} from "../utils/api";

class DeckList extends Component {
    state = {
        decks: []
    };

    componentDidMount() {
        getDecks()
            .then((decks) => this.setState({
                decks
            }))
    }
    render() {
        console.log(this.state.decks);
        return (
            <View style={styles.container}>
                <Text>DeckList</Text>
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