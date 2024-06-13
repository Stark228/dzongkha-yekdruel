
import { StyleSheet, Text, View,
  Image,ScrollView,Pressable,ImageBackground} from 'react-native'
import React from 'react'
const ChooseTemplateScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://blog.buddhagroove.com/wp-content/uploads/2021/03/8-symbols-1200x675.jpg' }}
        style={{ width: '100%', height: '100%', }}
        resizeMode='repeat' imageStyle={{ opacity: 0.21 }}>
      <Pressable onPress={()=>navigation.navigate('GenjaScreen')}
      style={[styles.letterButton,styles.firstButton]}>
        <View style={styles.imageBox}>
          <Image source={require('../assets/licon.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}>གཏང་ཡིག།</Text>
        </View>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('ModernTangyek')}
       style={styles.letterButton} >
        <View style={styles.imageBox}>
          <Image source={require('../assets/licon.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}>གན་རྒྱའི་ཡི་གུ།</Text>
        </View>
      </Pressable>
      <Pressable style={styles.letterButton}
      onPress={()=>navigation.navigate('ModernTangyek')}>
        <View style={styles.imageBox}>
          <Image source={require('../assets/licon.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}>ཞུ་ཚིག་/བཤེརར་ཡིག།</Text>
        </View>
      </Pressable>
      <Pressable style={styles.letterButton}
      onPress={()=>navigation.navigate('ModernTangyek')}>
        <View style={styles.imageBox}>
          <Image source={require('../assets/licon.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}>གསལ་བསྒྲགས།</Text>
        </View>
      </Pressable>
      <Pressable style={styles.letterButton}
      onPress={()=>navigation.navigate('ModernTangyek')}>
        <View style={styles.imageBox}>
          <Image source={require('../assets/licon.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}> བཀའ་ཤོོག།</Text>
        </View>
      </Pressable>
      <Pressable style={styles.letterButton}
      onPress={()=>navigation.navigate('ModernTangyek')}>
        <View style={styles.imageBox}>
          <Image source={require('../assets/licon.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}>བཀའ་རྒྱའི་ཡི་གུ།</Text>
        </View>
      </Pressable>
      <Pressable style={[styles.letterButton,styles.lastButton]} onPress={()=>navigation.navigate('PlainTemplate')}>
        <View style={[styles.imageBox,styles.lastBox]}>
          <Image source={require('../assets/plain.png')} style={{height:60,width:60}} resizeMode='contain'/>
        </View>
        <View>
          <Text style={styles.buttonText}>Plain Template</Text>
        </View>
      </Pressable>
      </ImageBackground>
    </View>
 
  )
}

export default ChooseTemplateScreen
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
   

  },
  Htext:{
    fontSize:20,
    color:'white',
    fontFamily:'monospace',

  },
  firstButton:{
    marginTop:30,
  },
  letterButton:{
    width:'90%',
    height:70,
    backgroundColor:'#0d47a1',
    marginVertical:8,
    borderWidth:0.5,
    borderColor:'#9C27B0',
    borderRadius:10,
    elevation:4,
    shadowColor:'#000000',
    shadowOpacity:100,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf:'center',
  },
  lastButton:{
    backgroundColor:'green'

  },
  imageBox:{
    width:70,
    height:'100%',
    borderRightWidth:4,
    borderRightColor:'#1976d2',
    alignItems:'center',
    justifyContent:'center',

  },
  lastBox:{
  borderRightColor:'#1976',
  },
  buttonText:{
    fontFamily:'monospace',
    fontSize:20,
    marginLeft:20,
    color:'#eee'
  },
})