import React from "react";
import { StyleSheet, Text, View,KeyboardAvoidingView,ScrollView } from 'react-native';
import { TextInput as Input } from "react-native-paper";
import {theme} from "../core/theme";

 export default function RegisterTextInput({errorText, description,...props}) {
   return (
    <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView style={{flex:1}}>
     <View style ={styles.container}>
      <Input
      style={styles.input}
      selectionColor = {theme.colors.primary}
      underlineColor ="transparent"
      {...props}
      />
      {description && !errorText ?(
          <Text style={styles.description}>{description}</Text>
      ):null}{
          errorText? <Text style ={styles.errorText}>{errorText}</Text>
          :null}
     </View>
     </ScrollView>
     </KeyboardAvoidingView>
   )
 }
 
 const styles = StyleSheet.create({
     container:{
         width:'100%',
         marginVertical:12,
         borderRadius:30,
         backgroundColor:'orange',
         
     },
     description:{
         fontSize:13,
         color:theme.colors.secondary,
         paddingTop:8,
     },
     errorText:{
        fontSize:13,
        color:theme.colors.error,
        paddingTop:4,
        paddingBottom:4,
        textAlign:'center',

     }
 })