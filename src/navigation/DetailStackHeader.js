import React from "react";
import { View,Text,Image,Pressable } from "react-native";

const DetailStackHeader=(props)=>{
    return(
        <View style={styles.detailheader}>
            <Pressable>
                <Image
                    source={{uri:'https://github.com/joyce0129/BookApp_wk3/blob/main/img/direction.png?raw=true'}}
                    style={{width:20,height:20}}
                    />
            </Pressable>

            <Image
                source={{uri:'https://github.com/joyce0129/BookApp_wk3/blob/main/img/bookmark%20(2).png?raw=true'}}
                style={{width:20,height:20}}
                />
                </View>
    )
}

const styles = StyleSheet.create({
    detailheader: {
      flex: 1,
      justifyContent:'space-between',
      backgroundColor: 'blue',
      width:'100%'
    }
  });

  export default DetailStackHeader;