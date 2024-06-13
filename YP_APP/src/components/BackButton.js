
import { StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export default function BackButton({navigation}) {
  return (
   <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.container}>
<Image source={require('../../assets/arrowback_img.png')} style={styles.image}/>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
       position:'absolute',
       top:10+ getStatusBarHeight(),
       left:4,
    },
    image:{
        height:24,
        width:24,

    }
})