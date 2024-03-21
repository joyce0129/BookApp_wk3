import React from "react";
import { View,Image,StyleSheet } from "react-native";

const Star =({star})=>{
    let stars=[];
    for(let i=0;i<5;i++){
        if(star>i){
            stars.push(
                <Image
                    source={{uri:'https://github.com/joyce0129/BookApp_wk3/blob/main/img/Star_filled.png?raw=true'}}
                    style={styles.star}
                    key={i}
                    />
            )
        }
        else{
            stars.push(
                <Image
                    source={{uri:'https://github.com/joyce0129/BookApp_wk3/blob/main/img/Star_empty.png?raw=true'}}
                    style={styles.star}
                    key={i}
                    />
            )
        }
    }
    return(
        <View>
            <View style={styles.stars}>
                {stars}

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    stars:{
        flexDirection:'row',
        marginVertical:8
    },
    star:{
        marginRight:4,
        width:20,
        height:20
    }
});

export default Star;