import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const GenjaScreen = ({navigation}) => {
  return (
  <View style={styles.container}>
    <View style={styles.tangyek}>
      <View style={styles.imgContainer}>
        <Image source={require('../assets/letterIcon.png')} 
        resizeMode='contain' style={{width:60,height:60}}/>
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.text}>གཏང་ཡིག།</Text>
      </View>
    </View>
<View style={styles.optionContainer}>
  <TouchableOpacity onPress={()=>{navigation.navigate('TraditionalTangyek')}} style={styles.letterBox}>
        <View style={styles.letterImage}>
            <Image source={require('../assets/Image/tradional.png')} resizeMode='contain'style={{width:100,height:100}}/>
        </View>
        <View style={styles.letterText}>
           <Text style={{fontSize:20}}>སྔ་རབས ལམ་ལུགས།</Text>
           <Text style={{fontSize:10,paddingBottom:10,fontFamily:'monospace'}}>(Traditional One)</Text>
        </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.letterBox} onPress={()=>navigation.navigate('ModernTangyek')}>
        <View style={styles.letterImage}>
            <Image source={require('../assets/Image/modern.png')} resizeMode='contain'style={{width:90,height:76}}/>
        </View>
        <View style={styles.letterText}>
           <Text style={{fontSize:20}}>དེང་རབས་ ལམ་ལུགས།</Text>
           <Text style={{fontSize:10,fontFamily:'monospace'}}>(Modern One)</Text>
        </View>
  </TouchableOpacity>
  

</View>

  </View>
  )
}

export default GenjaScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  tangyek:{
    width:'95%',
    height:70,
    backgroundColor:'#0d47a3',
    marginTop:20,
    marginBottom:20,
    borderRadius:10,
    borderWidth:3,
    borderColor:'orange',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',

  },
  imgContainer:{
    marginLeft:20,
  },
  textContainer:{
    marginLeft:40,
  },
  text:{
    color:'#ffff',
    fontSize:25,
  },
  optionContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  letterBox:{
    width:150,
    height:160,
    backgroundColor:'#eeee',
    marginHorizontal:15,
    borderRadius:10,
    borderColor:'orange',
    borderWidth:1,
    elevation:4,
    shadowOpacity:0.99,
    shadowColor:'pink',
    shadowRadius:10,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',


  }
})