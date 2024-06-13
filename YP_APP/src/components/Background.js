import { StyleSheet, View ,KeyboardAvoidingView,StatusBar} from 'react-native'
import React from 'react'
import { theme } from '../core/theme'

export default function Background({children}) {
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
        backgroundColor:'#DDE3EF',
    },
    container:{
        flex:1,
        padding:20,
        width:"100%",
        maxWidth:380,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'flex-start',
    },
})