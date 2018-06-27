import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {black, blue, gray, white} from "../utils/colors";
import {getDecks, reset} from "../utils/api";
import TextButton from "./TextButton";
import {setLocalNotification} from '../utils/helpers';

class DeckList extends Component {
    state = {};

    componentDidMount() {
        getDecks()
            .then((decks) => this.setState({
                decks
            }));
        setLocalNotification()
    }
    reset = () => {
        console.log("Reseting");
        reset()
    };

    onNavigate(deckTitle, deck) {
        this.props.navigation.push(
            'Details',
            {
                deckTitle: deckTitle,
                deck: deck
            }
        );
    }

    render() {
        const decks = this.state.decks;
        let decksAsJSON = {};
        if (decks) {
            console.log(JSON.parse(decks));
            decksAsJSON = JSON.parse(decks);
        }
        return (
            <ScrollView style={styles.container}>
                {/* TODO remove from the final version */}
                <TouchableOpacity onPress={this.reset} style={{backgroundColor: black}}>
                    <Text style={{color: blue}}>reset</Text>
                </TouchableOpacity>
                {Object.keys(decksAsJSON).length !== 0 && Object.keys(decksAsJSON).map((deckTitle) => (
                        <View key={deckTitle} style={styles.row}>
                            <TextButton style={styles.deckItem}
                                        onPress={() => this.onNavigate(deckTitle, decksAsJSON[deckTitle])}>
                                {deckTitle} with {decksAsJSON[deckTitle].questions.length} cards.
                            </TextButton>
                        </View>
                    )
                )}
            </ScrollView>
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
        alignItems: 'stretch',
        padding: 20,
        flex: 1
    },
    deckItem: {
        backgroundColor: gray,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        justifyContent: 'flex-start',
    }
});

export default DeckList