import { StyleSheet,Image } from 'react-native'
import React from 'react';

export default function Logo() {
  return (
      <Image source={require("../../assets/logo.png")} style={styles.img}/>
   
  )
}

const styles = StyleSheet.create({
    img:{
        height:280,
        width:300,
        marginBottom:0,
        justifyContent:'flex-end',
        alignItems:'flex-start',
    }
})