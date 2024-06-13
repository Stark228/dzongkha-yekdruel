import { StyleSheet, View ,KeyboardAvoidingView,StatusBar} from 'react-native'
import React from 'react'
import { theme } from '../core/theme'

export default function LoginBackground({children}) {
  return (
    
    <View style={styles.background}>
      <KeyboardAvoidingView style = {styles.container} behavior='padding'>
       {children}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:'100%',
        backgroundColor:'#2D4A8E',
    },
    container:{
        flex:1,
        paddingHorizontal:40,
        width:"100%",
        maxWidth:380,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'flex-start',
    },
})