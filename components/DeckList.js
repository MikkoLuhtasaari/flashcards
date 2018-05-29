import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import {white, gray} from "../utils/colors"

class DeckList extends Component {
    render() {
        return (
            <View>
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