import React from "react";
import { View,Image,Pressable } from "react-native";
import Header from "../component/Header";
import { Text } from "react-native";
import { MyDrawer } from "../navigation";

const AccountScreen =(navigation)=>{
    return(
        <View style={{flex:1}}>
        {/* //     <Pressable onPress={() => navigation.goBack()}>
        //   <Image */}
        {/* //     source = {{uri: 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/direction.png?raw=true'}}
        //     style={{width: 25, height: 25}}
        //   />
        // </Pressable> */}
        
            <Text fontSize={30}>
            This is a AccountScreen Page
            </Text>
        </View>
    )
}

export default AccountScreen;