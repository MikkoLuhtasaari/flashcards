import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import {black, blue, gray, white} from "../utils/colors";
import {addCardToDeck, getDecks} from "../utils/api";
import {StackActions, NavigationActions} from "react-navigation"
import {CheckBox} from "react-native-elements"
import TextButton from "./TextButton";

class Quiz extends Component {
    state = {
        isFlipped: false
    };

    flipCard = () => {
        this.setState(() => ({
            isFlipped: !this.state.isFlipped
        }));
    };

    render() {
        const isFlipped = this.state.isFlipped;
        return (
            <View style={styles.container}>
                {isFlipped
                    ? <Text>Flipped</Text>
                    : <Text>Not flipped</Text>}

                <TextButton onPress={this.flipCard}>
                    Flip
                </TextButton>

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
});

export default Quiz