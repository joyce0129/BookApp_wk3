import React from "react";
// import { StatusBar, ScrollView, StyleSheet, Text} from 'react-native';
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import 'react-native-gesture-handler';

import Navigation from "./src/navigation";
// import Booklist from "./src/component/Booklist";
// import Header from "./src/component/Header";
// const App = () => {
//   return (
//    <SafeAreaProvider>
//       <SafeAreaView style={{flex: 1}}> 
//       <Header/>
//       <Booklist/>      
//       <Navigation/>
//       </SafeAreaView>  
//    </SafeAreaProvider>
//   );
// };
const App =()=>{
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />            
      </SafeAreaView>  
    </SafeAreaProvider>

  );
}

export default App;

