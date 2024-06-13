import React,{useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as Input } from "react-native-paper";
import {theme} from "../core/theme";

 export default function TextInput({errorText, description,...props}) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
   return (
     <View style ={styles.container}>
      <Input
       secureTextEntry={secureTextEntry}
            right={<Input.Icon 
            name={secureTextEntry ? "eye-off" : "eye"} 
               onPress={() => {
                setSecureTextEntry(!secureTextEntry)
              }}    
              color='#880e4f'/>}
            left={<Input.Icon name="lock"  color='#880e4f' />}
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
         color:theme.colors.secondary,
         paddingTop:8,
     },
     errorText:{
        fontSize:13,
        color:theme.colors.error,
        paddingTop:8,

     }
 })




 