
import React from "react";
import { View,StyleSheet,Pressable ,Image} from "react-native";
import Booklist from "../component/Booklist";
import bookData from "../json/book_section.json";
const BookScreen =({navigation}) =>{
  return(
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.header}>
       <Pressable onPress={() => navigation.toggleDrawer()}>
         <Image 
          source={{uri: 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/icon.png?raw=true'}}
          style={{width: 20, height: 20, margin: 20}}
        />
      </Pressable>
      <Pressable>
        <Image 
          source={{uri: 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/search_icon.png?raw=true'}}
          style={{width: 20, height: 20, margin: 20}}
        />
      </Pressable>
    </View>
      <Booklist
        list={bookData.Booklist}
        navigation={navigation}
        />
    </View>
  )
}
const styles = StyleSheet.create ({
    
    header: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      backgroundColor: '#ffff',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
export default BookScreen;
