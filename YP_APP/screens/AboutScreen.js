import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground source={{uri:'https://happylandtreks.com/wp-content/uploads/2018/09/Bhutan-Tour-3.jpg'}} resizeMode="cover" style={{height:'100%', width:'100%'}} imageStyle={{opacity:0.50}}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} resizeMode='contain' style={{width:200,height:200,alignSelf:'center',position:'absolute',bottom:1,}}/>
        </View>
        <View style={styles.aboutUsConatiner}>
            <View style={styles.sonam}>
            <Image source={require('../assets/Image/sonam.png')} resizeMode='cover' style={{width:"100%",height:90,alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10,}}/>
                <Text style={{color:'#000000',fontSize:11,fontFamily:'monospace',padding:10,alignSelf:'center'}}>Sonam Wangchuk (Developer) from GCIT, currently persuading degree course in Bsc.IT Second Year.</Text>
            </View>
            <View style={styles.sonam}>
            <Image source={require('../assets/Image/sonamDeki.png')} resizeMode='cover' style={{width:"100%",height:90,alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10,}}/>
                <Text style={{color:'#000000',fontSize:11,fontFamily:'monospace',padding:10,alignSelf:'center'}}>Sonam Deki (Developer) from GCIT, currently persuading degree course in Bsc.IT Second Year.</Text>
            </View>
            <View style={styles.sonam}>
            <Image source={require('../assets/Image/sonam.png')} resizeMode='cover' style={{width:"100%",height:90,alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10,}}/>
                <Text style={{color:'#000000',fontSize:11,fontFamily:'monospace',padding:10,alignSelf:'center'}}>Sonam Pelki (Developer) from GCIT, currently persuading degree course in Bsc.IT Second Year.</Text>
            </View>
            <View style={styles.sonam}>
            <Image source={require('../assets/Image/sonam.png')} resizeMode='cover' style={{width:"100%",height:90,alignSelf:'center',borderTopLeftRadius:10,borderTopRightRadius:10,}}/>
                <Text style={{color:'#000000',fontSize:11,fontFamily:'monospace',padding:10,alignSelf:'center'}}>Kisan Rai (Developer) from GCIT, currently persuading degree course in Bsc.IT Second Year.</Text>
            </View>
        </View>
        <Text style={{fontFamily:'monospace',fontSize:14,fontWeight:'bold',textAlign:'center',}}>All copyrignts reserved|© 2022 YP</Text>


    
      </ImageBackground>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
       flex:1,
    },
    logoContainer:{
        width: 170,
        height:170,
        backgroundColor:'#5D1051',
        alignSelf:'center',
        borderRadius:70,
        marginTop:10,
        borderWidth:4,
        borderColor:'orange',
        elevation:4,
        shadowColor:'green',
        shadowOpacity:100,
        shadowRadius:70,
    },
    aboutUsConatiner:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        padding:5,
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center'

    },
    sonam:{
        width:170,
        height:200,
        borderRadius:10,
        marginVertical:8,
        elevation:4,
        shadowColor:'orange',
        backgroundColor:'#eee'

    }
})