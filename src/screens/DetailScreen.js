import React from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import Star from "../component/Star";

const DetailScreen = ({route,navigation}) => {

  let [flag, setFlag] = React.useState(true);
  let changeImage = () => setFlag(previousState => !previousState);
  let imagePath= flag ? 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/bookmark%20(2).png?raw=true' : 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/icon_bookmark_actived.png?raw=true'
    
  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source = {{uri: 'https://github.com/joyce0129/BookApp_wk3/blob/main/img/direction.png?raw=true'}}
            style={{width: 25, height: 25}}
          />
        </Pressable>
        <Pressable onPress={() => changeImage()}>
          <Image
            source = {{uri: imagePath}}
            style={{width: 20, height: 28}}
          />
        </Pressable>
      </View>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View  style={styles.containerStyle}>
          <Image 
            source={{uri: route.params.image}}
            style={styles.image}
            key={route.params.title}
          />
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.artist}>{route.params.artist}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            {route.params.starSection? <Star star={route.params.star} style={styles.star}/> : null}
            {route.params.starSection? <Text style={styles.artist}>{route.params.star}.0/5.0</Text> : null}
          </View>
          <Text style={styles.text}>{route.params.info}</Text>
          <Pressable style={styles.button}>
            <Text style={{color: '#fff', fontSize: 18}}>
              Buy Now For $49.99
            </Text>
          </Pressable>
        </View>
        
      </ScrollView>
    </View>
  );
};
  
const styles = StyleSheet.create ({
  containerStyle: {
    marginHorizontal: 3,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title : {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45
  },
  image: {
    width: 300,
    height: 430,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginBottom: 6,
  },
  artist: {
    fontSize: 15,
    fontWeight: '300',
    color: "#131313",
    marginTop: 8,
    marginHorizontal: 5
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginBottom: 150
  },
  text: {
    fontSize: 14,
    color: "black",
    marginTop: 8,
    paddingHorizontal: 65
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});


// const DetailScreen=()=>{
//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>This is Page 2</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   }
// });
export default DetailScreen;