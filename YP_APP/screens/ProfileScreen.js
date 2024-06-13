import { StyleSheet, Text, View, Image,Pressable,ImageBackground ,Modal,TextInput,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { Entypo } from '@expo/vector-icons'; 
import firebase from 'firebase/compat';
import ChangePassword from './ChangePassword';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ProfileScreen = ({navigation}) => {
  const [closeModal,setModal] = useState(false);
  const [oldPassword,setOldPassword] = useState('sonam');
  const [newPassword,setNewPassword] = useState('');
  return (
    <ScrollView style={{flex:1,}}>
      <View style={styles.MianContainer}>
      {/* <ImageBackground source={{uri:'https://cdn.aarp.net/content/dam/aarp/entertainment/books/2021/12/1140-flying-books-illustration.jpg'}} resizeMode='repeat' style={{width:'100%', height:'100%'}} imageStyle={{opacity:0.13}}> */}
      <View style={styles.profileNameContainer}>
      <View style={styles.profileName}>
        <Image source={require('../assets/account.png')} resizeMode='contain' style={{width:35,height:35}}/>
        <Text style={styles.userName}># {firebase.auth().currentUser.displayName}</Text>
      </View>
      <View style={styles.bioData}>
        <Text style={{textAlign:'center',fontFamily:'monospace',lineHeight:20,color:'#ffff',}}>
          I Am FullStack Developer 
          From Gyalposhing 
          College(GCIT)
        </Text>
      </View>
      </View>

<View style={styles.addAndEditButton}>
  <Pressable style={styles.addLetterButton} onPress={()=>{navigation.navigate('ChooseTemplateScreen')}}>
  <Image source={require('../assets/Image/add.png')} resizeMode='contain' style={{width:30,height:30,marginLeft:20}}/>
      <Text style={{marginLeft:10,}}>Add Letter</Text>
  </Pressable>
  {/* <Pressable onPress={()=>{navigation.navigate('EditProfileScreen')}} style={styles.EditProfileButton}>
  <Image source={require('../assets/Image/edit.png')} resizeMode='contain' style={{width:30,height:30,marginLeft:7,tintColor:'green'}}/>
  <Text style={{marginLeft:10}}>Edit Profile</Text>
  </Pressable> */}
 </View>
 <Pressable  onPress={()=>{navigation.navigate('ChangePassword')}} style={styles.changePassword}>
 <Entypo name="key" size={24} color="#03a9f4" />
   <Text style={{marginLeft:10,fontFamily:'monospace'}}>Change Password</Text>
 </Pressable>
      <Modal
      visible={closeModal}
      transparent={true}
      animationType='slide'> 
       <View style={styles.modalContainer}>
         <View style={styles.changePasswordContainer}>
         <ImageBackground source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Bhutan_alternate.svg/1200px-Flag_of_Bhutan_alternate.svg.png'}} resizeMode='cover' style={{width:'100%', height:'100%'}} imageStyle={{opacity:0.13,borderRadius:15,}}>
           <View style={{padding:10}}>
            <ChangePassword/>
           <Text style={{textAlign:'center',fontFamily:'monospace',fontWeight:'bold',marginBottom:13,color:'#ffff'}}>Change Password</Text>
              <View>
                <TextInput
                     secureTextEntry
                     autoCapitalize='none'
                      style={styles.input}
                      placeholder='Enter old password'
                      value={{oldPassword}}
                    />
                <TextInput 
                     secureTextEntry
                     autoCapitalize='none'
                      style={styles.input}
                      placeholder='Enter new password'
                      value={{newPassword}}
                    />
              </View>
            <View style={styles.buttonContainer}>
            <Pressable android_ripple={{color:'pink'}} style={styles.button} onPress={()=>{setModal(false)}}>
               <Text style={{fontFamily:'monospace',textAlign:'center'}}>Cancel</Text>
             </Pressable>
             <Pressable style={styles.button} onPress={()=>{navigation.navigate('HomeScreen')}}>
               <Text style={{fontFamily:'monospace',textAlign:'center'}}>Update</Text>
             </Pressable>

            </View>
            </View>
            </ImageBackground>
         </View>
       </View>

      </Modal>
 {/* </ImageBackground> */}
 </View>
</ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  MianContainer:{
    flex:1,
    // backgroundColor:'#ffffffff'
    
  },
  profileNameContainer:{
    width:'100%',
    height:150,
    backgroundColor:'#5D1051',
    borderBottomRightRadius:100,

  },
  profileName:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginLeft:70,
    marginTop:20,
    width:'100%',
  },
  userName:{
    marginLeft:10,
    fontSize:17,
    fontFamily:'normal',
    fontWeight:'bold',
    color:'#ffff',
  },
  bioData:{
    width:"60%",
    alignItems:'center',
    marginTop:10,
    marginLeft:70,

  },
  addAndEditButton:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:13,
    paddingHorizontal:20,
  },
  addLetterButton:{
    width:"100%",
    height:55,
    backgroundColor:'#03a9f4',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    elevation:4,
    shadowOpacity:100,
    shadowColor:'#381f75',
    borderWidth:2,
    borderColor:'#381f75'

  },
  EditProfileButton:{
    width:"50%",
    height:55,
    backgroundColor:'#33c9dc',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    elevation:4,
    shadowOpacity:100,
    shadowColor:'#381f75',
    borderWidth:2,
    borderColor:'#381f75'

  },
  changePassword:{
    width:'90%',
    height:50,
    paddingHorizontal:20,
    marginTop:10,
    borderRadius:10,
    backgroundColor:'#9743B3',
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center'
    
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000aa'
  },
  changePasswordContainer:{
    width:'90%',
    height:'50%',
    backgroundColor:'#560027',
    borderRadius:15,
  },
  input: {
    height: 40,
    padding:10,
    borderRadius:20,
    marginVertical:8,
    backgroundColor:'#eee',
    textAlign:'center'
  },
  buttonContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:13,
  },
  button:{
    height:40,
    width:130,
    backgroundColor:'orange',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  }


})





