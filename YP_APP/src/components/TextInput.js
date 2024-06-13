import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as Input } from "react-native-paper";
import {theme} from "../core/theme";

 export default function PasswordTextInput({errorText, description,...props}) {
   return (
     <View style ={styles.container}>
      <Input
        left={<Input.Icon name="email" color='#880e4f' />}
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
   )
 }
 
 const styles = StyleSheet.create({
     container:{
         width:'100%',
         marginVertical:12,
         
     },
     input:{
         backgroundColor:theme.colors.surface,
         
       
         
     },
     description:{
         fontSize:13,
         color:theme.colors.tint,
         paddingTop:8,
     },
     errorText:{
        fontSize:13,
        color:theme.colors.error,
        paddingTop:8,

     }
 })