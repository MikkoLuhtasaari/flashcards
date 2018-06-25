import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import {white, black, gray, purple} from "../utils/colors";
import TextButton from "./TextButton"

class DeckListItem extends Component {

    testItem = () => {
        const {title, questions} = this.props;
        console.log("title " + title + " and questions " + questions);
    };

    render() {
        const {title, questions} = this.props;
        return (
            <View style={styles.container}>
                <TextButton style={{margin: 20}} onPress={this.testItem}>{title}</TextButton>
                <Text style={styles.subText}>Cards: {questions.length}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 20,
        backgroundColor: gray,
        borderRadius: 7,
        paddingBottom: 30
    },
    titleText : {
        fontSize: 24,
        color: black
    },
    subText: {
        fontSize: 18,
        color: gray
    }
});

export default DeckListItem