import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
const WriteLetter = ({navigation}) => {
  return (
    <ScrollView style={{flex:1,backgroundColor:'#DDE3EE',}}>
    <View style={styles.container}>
         <Image source={require('../assets/king.webp')}
        style={styles.card} resizeMode='cover' />
      <View style={styles.templateContainer}>
      <ImageBackground source={require('../assets/letterWriting.jpeg')} resizeMode="cover" style={styles.image}
    imageStyle={styles.backgroundImg}>
      <View style={styles.buttonContainer}>
      <Text style={styles.text}>གདམ་ཁ་རྐྱབ།</Text>
      <Text style={styles.text1}>-----------------------------------</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('ChooseTemplateScreen')}
         style={styles.button}>
        <Text>Choose Template</Text>
        <Image source={require('../assets/letterTemplate.png')} resizeMode='contain' style={styles.img}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('PlainTemplate')} style={styles.button} >
        <Text>Plain Template</Text>
        <Image source={require('../assets/plainTemplate.png')} resizeMode='contain' style={styles.img}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('UserGuidelineScreen')}>
        <Text>User Guidelines</Text>
        <Image source={require('../assets/guideline.png')} resizeMode='contain' style={styles.img}/>
      </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    </View>
    </ScrollView>

  )
}

export default WriteLetter

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DDE3EE',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  text:{
    marginTop:8,
    fontWeight:'bold',
    fontFamily:'monospace',
    fontSize:20,
    color:'black',
    textAlign:'center',
  


  },
  text1:{
  fontSize:18,
  color:'#2D4A8E',

  },
  templateContainer:{
    width:'90%',
    height:400,
    marginHorizontal:50,
    marginTop:20,
    backgroundColor:'#fff',
    borderRadius:5,
    elevation: 4,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  image:{
    width:'100%',
    height:'100%',
  },
  backgroundImg:{
    opacity:0.15,

  },
  img:{
    width:60,
    height:60,
  },
  buttonContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:15,

  },
  button:{
    width:"90%",
    height:80,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#eee',
    elevation:20,
    shadowColor:'red',
    marginTop:10,
    
  },
  card:{
    width:'90%',
     height: 150,
     marginTop:10,
     borderBottomLeftRadius:10,
     borderBottomRightRadius:10,
     shadowColor:'pink',
  }
})