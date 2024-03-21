import React from "react";
import { Text, FlatList, SectionList, StyleSheet,View } from "react-native";
import BookDetail from "./BookDetail";
import HotBookDetail from "./HotBookDetail";
import sections from "../json/book_section.json";


 const Booklist = ({navigation}) => {
   const renderSectionHeader = ({section}) => (
     <>
       <Text style={styles.sectionHeader}>{section.title}</Text>
      
         <FlatList
           horizontal={true}
           data={section.data}
           renderItem={({ item }) => <HotBookDetail book={item} navigation={navigation}/>}
           showsHorizontalScrollIndicator={false}
           keyExtractor={ item => item.title }
         />
        
     </>
   );
   const renderItem = ({ item, section }) => {
     if (section.horizontal) {
       return null;
     }
     return <BookDetail book={item} />
   };

   return (
     <SectionList 
       sections={sections}
       contentContainerStyle={{ paddingHorizontal: 10 }}
       stickySectionHeadersEnabled={false}
       showsHorizontalScrollIndicator={false}
       renderSectionHeader={renderSectionHeader}
       renderItem={renderItem}
       keyExtractor={ item => item.title }
     />
   );
 };

 const styles = StyleSheet.create({
   sectionHeader: {
     fontWeight: '600',
     fontSize: 18,
     paddingTop: 20,
     paddingBottom: 5,
     paddingLeft: 10,
     textTransform: 'uppercase',
   },
 })

export default Booklist;