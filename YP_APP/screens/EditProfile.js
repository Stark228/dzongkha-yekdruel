import { StyleSheet, Text, View,TextInput,Pressable,ImageBackground } from 'react-native'
import React from 'react'


const EditProfile = () => {
  return (
    <View style={styles.mainContainer}>
            <ImageBackground source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Bhutan_alternate.svg/1200px-Flag_of_Bhutan_alternate.svg.png'}} resizeMode='cover' style={{width:'100%', height:'100%'}} imageStyle={{opacity:0.13}}>
      <Text style={{fontFamily:'monospace',textAlign:'center',padding:10,}}>Change user name and Bio data</Text>
      <View style={styles.conatainer}>
        <View  style={styles.input}>
        <Text style={{fontWeight:'bold',marginRight:5,marginLeft:10,}}>User Name: </Text>
        <TextInput>Sonam123</TextInput>
        </View>
        <View  style={styles.input1}>
        <Text style={{fontWeight:'bold',marginRight:5,marginLeft:6,}}>Bio:</Text>
        <TextInput
        maxLength={100}
        multiline>
          Hey I am sonam wangchuk from Gyalposhing College</TextInput>
      </View>
      <Pressable style={{width:'50%',height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#560027',margin:10,borderRadius:50,}}>
          <Text style={{fontFamily:'monospace',fontWeight:'bold',fontSize:15,color:'#eee'}}>Update</Text>
      </Pressable>
      </View>
      </ImageBackground>   
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  conatainer:{
    width:'90%',
    height:400,
    backgroundColor:'#E5E5E5',
    borderRadius:20,
    alignSelf:'center',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:10,
  },
  input:{
    width:'100%',
    height:40,
    borderRadius:10,
    backgroundColor:'#eee',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  input1:{
    width:'100%',
    height:150,
    borderRadius:10,
    backgroundColor:'#eee',
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:8, 
    padding:10, 
    flexWrap:'wrap'
  }
})