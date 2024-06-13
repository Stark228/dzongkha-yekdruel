import { StyleSheet, Text, View,Image,Pressable,Share,ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
// import Background from '../src/components/Background'
// import Button from '../src/components/Button';

// import Header from '../src/components/Header';


const Menu = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'YP(YekurNamzha Payzhi app) which provides auto letter template',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
<ScrollView style={{flex:1,}}>
  <LinearGradient colors={['#eee','#fff','#eee']} style={styles.MainContainer}>
    <View style={styles.ImgContainer}>
      <Image source={require('../assets/logo.png')} resizeMode='contain' style={{ width:160,height:160}}/>
    </View>
    <View style={styles.menuContainer}>

        <Pressable android_ripple={{color:'pink'}} onPress={()=>{navigation.navigate('AboutScreen')}} style={styles.Button}>
          <View>
              <Image source={require('../assets/Image/aboutUs.png')} resizeMode='contain' style={{width:30,height:30}}/>
          </View>
          <View style={styles.text}>
            <Text style={{fontFamily:'monospace',fontSize:15,color:'black'}}>About Us</Text>
          </View>
        </Pressable>

        <Pressable android_ripple={{color:'pink'}}  onPress={onShare}  style={styles.Button}>
          <View>
              <Image source={require('../assets/Image/shareit.png')} resizeMode='contain' style={{width:33,height:33}}/>
          </View>
          <View style={styles.text}>
            <Text style={{fontFamily:'monospace',fontSize:15,color:'black'}}>ShareIt</Text>
          </View>
        </Pressable>

        <Pressable  android_ripple={{color:'pink'}} style={styles.Button}>
          <View>
              <Image source={require('../assets/Image/rateUs.png')} resizeMode='contain' style={{width:33,height:33}}/>
          </View>
          <View style={styles.text}>
            <Text style={{fontFamily:'monospace',fontSize:15,color:'black'}}>Rate Us</Text>
          </View>
        </Pressable>

        <Pressable  android_ripple={{color:'pink'}} style={styles.Button}>
          <View>
              <Image source={require('../assets/Image/terms.png')} resizeMode='contain' style={{width:30,height:30}}/>
          </View>
          <View style={styles.text}>
            <Text style={{fontFamily:'monospace',fontSize:15,color:'black'}}>Terms and Conditions</Text>
          </View>
        </Pressable>

        <Pressable android_ripple={{color:'pink'}} onPress={()=>{navigation.replace('LoginScreen')}} style={styles.Button}>
          <View>
              <Image source={require('../assets/Image/logout.png')} resizeMode='contain' style={{width:30,height:30,paddingLeft:39}}/>
          </View>
          <View style={styles.text}>
            <Text style={{fontFamily:'monospace',fontSize:15,color:'black'}}>Log Out</Text>
          </View>
        </Pressable>

        

    </View>
  </LinearGradient>
  </ScrollView>

  )
}

export default Menu

{/* <Background>
<Header>This is menu Screen</Header>
      <Button mode="contained"
        onPress={()=>{
          logoutUser();
        }}>
          Logout</Button>
</Background> */}

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,

  },
  ImgContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5D1051',
    paddingBottom:10,
    borderBottomEndRadius:40,
    borderBottomLeftRadius:40,
  },
  menuContainer:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',

  },
  Button:{
    width:'90%',
    height:70,
    backgroundColor:'#eee',
    borderRadius:5,
    elevation:4,
    shadowOpacity:100,
    shadowColor:'red',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingLeft:20,
    marginVertical:8,
  },
  text:{
    paddingLeft:30,
    fontFamily:'monospace',
    

  }
})