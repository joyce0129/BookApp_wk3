
import React from "react";

import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { TextInput,StyleSheet } from 'react-native';
import {  Image, Text} from "react-native";
//import { createDrawerNavigator } from "@react-navigation/drawer";

import BookScreen from "../screens/BookScreen";
import DetailScreen from "../screens/DetailScreen";
import MyBookScreen from "../screens/MyBookScreen";
import WishlistScreen from "../screens/WishlistScreen";
import DisplaySettingScreen from "../screens/DisplaySettingScreen";
import SettingsScreen from "../screens/SettingsScreen";

import AccountScreen from "../screens/AccountScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import bookData from "../json/book_section.json";


const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      {/* <HomeStack/> */}
      <MyDrawer /> 
    </NavigationContainer>
  );
}

//DrawerContent

const CustomDrawerContent=(props)=>{
  
  return(
    <DrawerContentScrollView {...props}
      contentContainerStyle={{paddingTop:0}}
    >
      <Image
        style={styles.drawerimage}
        source={{
          uri: "https://github.com/joyce0129/BookApp_wk3/blob/main/img/img_avatar.png?raw=true"
        }}/>
      <Text style={styles.user}>May</Text>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}
//My Drawer
export const MyDrawer=()=>{
  return(
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: '#6200EE',
        drawerInactiveTintColor: 'gray',
        drawerStyle: { width: 250 },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
    }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown:false,
          drawerLabel:"Home",
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          //headerShown:false,
          drawerLabel:"Account",
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
          ),
        }}
      />
      <Drawer.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          //headerShown:false,
          drawerLabel:"Setting",
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="cog" color={color} size={26}/>
          )
        }}
      />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  drawerimage: {
    width:50,
    height:50,
    marginTop:20,
    margin:5,
    marginLeft:20
  },
  user: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  }
  
});

//MyTabs

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
      tabBarActiveTintColor: '#6200EE',
      headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} 
           
          />
          ),
        }}
      />

      <Tab.Screen 
        name="WishlistStack" 
        component={WishlistStack}
        options={{
          //headerShown: false,
          title: "Wishlist",
          
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} 
           
          />
          ),
        }}
      />

      <Tab.Screen 
        name="MyBookStack" 
        component={MyBookStack}
        options={{
          //headerShown: false,
          title: "MyBook",
          
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} 
           
          />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

//HomeStack
const HomeStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Home"
        component={BookScreen}
        options={{headerShown: false}}
        
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
        
      />
    </Stack.Navigator>
  );
}

//MyBookStack

const MyBookStack=({navigation})=>{
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Account"
        component={MyBookScreen}
        options={{headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={26}
              onPress={() => navigation.openDrawer()}
              
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={26}
           
            />
          )
        }

      }
        
      />
      
    </Stack.Navigator>
  );
}


//WishlistStack
const WishlistStack=({navigation})=>{
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Account"
        component={WishlistScreen}
        options={{headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={26}
              onPress={() => navigation.openDrawer()}
              
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={26}
            
            />
          )
        }

      }
        
      />
      
    </Stack.Navigator>
  );
}

//AccountStack

const AccountStack=({navigation})=>{
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }
      }
      />
    </Stack.Navigator>
  );
}

//SettingStack


const SettingStack=({navigation})=>{
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Setting"
        component={SettingsScreen}
        options={{headerShown: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
            />
          ),
        }}
        
      />
      <Stack.Screen
      name="DisplaySettingScreen"
      component={DisplaySettingScreen}
      options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}


export default Navigation;
