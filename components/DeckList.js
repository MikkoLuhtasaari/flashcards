import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {white, gray, blue, black} from "../utils/colors"
import {getDecks, reset} from "../utils/api";
import DeckListItem from "./DeckListItem"
import {createStackNavigator} from "react-navigation";
import AddCardToDeck from "./AddCardToDeck";
import TextButton from "./TextButton"

class DeckList extends Component {
    state = {};

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

    onNavigate(deck){
        this.props.navigation.push(
            'Details',
            {deck: deck}
    );
}

    render() {
        const decks = this.state.decks;
        let decksAsJSON = {};
        if(decks) {
            console.log(JSON.parse(decks));
            decksAsJSON = JSON.parse(decks);
        }
        return (
            <View style={styles.container}>
                <Text>DeckList</Text>
                {Object.keys(decksAsJSON).length !== 0 && Object.keys(decksAsJSON).map((deck) => (
                        <View key={deck} style={styles.row}>
                            <TextButton onPress={() => this.onNavigate(deck)}>{deck}</TextButton>
                        </View>
                    )
                )}
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
    row: {
        flexDirection: "row",
        flex: 1
    },
    deckItem: {
        backgroundColor: gray,
        paddingTop: 10,
        justifyContent: "center"
    }
});

export default DeckList