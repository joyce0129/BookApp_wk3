import React from "react";
import { View,Image,Pressable } from "react-native";
import Header from "../component/Header";
import { Text } from "react-native";
import { MyDrawer } from "../navigation";

const AccountScreen =(navigation)=>{
    return(
        <View style={{flex:1}}>
            <Text fontSize={30}>
            This is a AccountScreen Page
            </Text>
        </View>
    )
}

export default AccountScreen;
