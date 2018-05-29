import React, {Component} from "react"
import {View, Text, StyleSheet, TextInput} from "react-native"
import {black, blue, white} from "../utils/colors";

class NewDeck extends Component {
    state = {
        inputText: "Insert deck title here!"
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
                {/*TODO Add submit button and handle the action.*/}
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

export default NewDeck