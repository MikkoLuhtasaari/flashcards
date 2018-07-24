import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {black, blue, gray, white} from "../utils/colors";
import {reset} from "../utils/api";
import {getDecksAction} from "../actions";
import TextButton from "./TextButton";

class DeckList extends Component {

    componentDidMount() {
        this.props.getDecksAction();
    }

    // TODO Remove from the final version
    reset = () => {
        reset();
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
        const {decks} = this.props;

        return (
            <ScrollView style={styles.container}>
                {/* TODO remove from the final version */}
                <TouchableOpacity onPress={this.reset} style={{backgroundColor: black}}>
                    <Text style={{color: blue}}>reset</Text>
                </TouchableOpacity>
                {Object.keys(decks).length !== 0 && Object.keys(decks).map((deckTitle) => (
                        <View key={deckTitle} style={styles.row}>
                            <TextButton style={styles.deckItem}
                                        onPress={() => this.onNavigate(deckTitle, decks[deckTitle])}>
                                {deckTitle} with {decks[deckTitle].questions.length} cards.
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

function mapStateToProps({decks}) {
    return {
        decks
    }
}

function mapDispatchToProps(dispatch, {navigation}) {
    return {
        getDecksAction: () => dispatch(getDecksAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)