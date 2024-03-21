import React from "react";
import { View } from "react-native";
import Header from "../component/Header";
import { Text } from "react-native";
//import { Header } from "react-native/Libraries/NewAppScreen";

const SettingsScreen =()=>{
    return(
        <View style={{flex:1}}>
            
            <Text fontSize={30}>
            This is a Setting Page
            </Text>
        </View>
    )
}
export default SettingsScreen;