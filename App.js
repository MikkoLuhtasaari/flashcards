import React from 'react';
import {Constants} from "expo"
import {TabNavigator, createStackNavigator, createMaterialTopTabNavigator} from "react-navigation"
import {StyleSheet, Text, View, StatusBar, Platform} from 'react-native';
import {purple, white} from "./utils/colors"
import DeckList from "./components/DeckList"
import NewDeck from "./components/NewDeck"
import {MaterialCommunityIcons, FontAwesome, Ionicons} from "@expo/vector-icons"

function UdaciStatusBar({backgroundColor, ...props}) {


    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: "Deck List",
                tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="cards-outline" size={30} color={tintColor}/>
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: "New Deck",
                tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor}/>
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: Platform.OS === "ios" ? purple : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === "ios" ? white : purple,
                shadowRadius: 6,
                shadowOpacity: 1,
                shadowColor: "rgba(0,0,0,0.24)",
                shadowOffset: {
                    width: 0,
                    height: 3
                }
            }
        }
    });

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
                <MainNavigator/>
            </View>
        );
    }
}
