import { StyleSheet, Text, View ,TouchableWithoutFeedback,
    Animated,Modal,Button,TextInput,Pressable,ImageBackground,Share, Platform} from 'react-native'
import React,{useState} from 'react'
import { MaterialCommunityIcons,Ionicons, FontAwesome,Entypo } from '@expo/vector-icons';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
// import {collection, addDoc} from 'firebase/firestore';
// import db from '../api/auth-api';
import firebase from 'firebase/compat';
import 'firebase/firestore'

const TTFloatButton = ({header,content,...props}) => {

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <style>
        body{
            padding: 10px;
        }
          .letterContainer{
            font-family: 'Courier New', Courier, monospace;
            font-size: 18px;
          
          }
       </style>
    </head>
    <body>
        
        <div class="letterContainer">
                <p>${header}</p>
                <p>${content}</p>
            
        </div>
    </body>
    </html>`;
    const [name, setName] = useState('');
    const [selectedPrinter, setSelectedPrinter] = React.useState();

    const print = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
        html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
    }
  
    const printToFile = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      const { uri } = await Print.printToFileAsync({
        html
      });
      const name = props.value;
      console.log('File has been saved to:', uri);
      console.log(name);
      
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }
  
    const selectPrinter = async () => {
      const printer = await Print.selectPrinterAsync(); // iOS only
      setSelectedPrinter(printer);
    }

    const [animation] = useState(new Animated.Value(0))

    const toggleMenu = () =>{
        const toValue = this.open ? 0 : 1
        Animated.spring(animation, {
            toValue,
            friction:5,
            useNativeDriver:true
        }).start()
        this.open = !this.open

    }
    const rotation = {
        transform:[
            {
                rotate: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:['0deg','180deg']
                })
            }

        ]
    }
    const saveStyle = {
        transform:[
            {
                scale:animation
            },
            {
                translateY: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,0]
                })
            }
        ]
    }
    const uploadStyle = {
        transform:[
            {
                scale:animation
            },
            {
                translateY: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,0]
                })
            }
        ]
    }
    const shareStyle = {
        transform:[
            {
                scale:animation
            },
            {
                translateY: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,0]
                })
            }
        ]
    }
    const downloadStyle = {
        transform:[
            {
                scale:animation
            },
            {
                translateY: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,0]
                })
            }
        ]
    }
 const [closeModal,setModal] = useState(false);
 const [closePostModal,setPostModal] = useState(false);

  const uploadletter = () => {

                firebase.firestore().collection('Letter').add({
                    name,
                    value,
                    value1,
                    value2,
                    date,
                    reason
                })
                .then(()=>{
                    alert("successfully added")
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
            }


  return (
    <View style={{...styles.screen,...props.style}}>
     <TouchableWithoutFeedback onPress={()=> {}}>
         <Animated.View style={[styles.button,styles.menu, saveStyle]}>
         <Ionicons name="save" size={24} color="#2196f3"
         onPress={()=>{setModal(true)}}
          />
         <Text style={{fontSize:7}}>Save</Text>
         </Animated.View>
     </TouchableWithoutFeedback>

      <Modal 
        visible={closeModal}
        transparent={true} 
        animationType='fade'>
          <View style={styles.modalConatiner}>
              <View style={styles.saveFile}>
              <ImageBackground source={{uri:'https://docplayer.net/docs-images/56/38903454/images/59-0.jpg'}} resizeMode='contain' style={{width:'100%',height:'100%'}} imageStyle={styles.bgImage}>
                <View style={{backgroundColor:'purple',height:50,borderTopLeftRadius:10,borderTopRightRadius:10,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:17,fontFamily:'monospace'}}>Save in profile</Text>
                </View>
                <View style={{width:'90%',alignSelf:'center',borderWidth:1,borderColor:'purple',height:50,borderRadius:5,marginVertical:10,padding:7}}>
                <TextInput placeholder='Enter the name of the letter...' maxLength={20}/>
                </View>
                <Text style={{textAlign:'center',fontSize:15,fontFamily:'monospace',padding:10,}}>...Sepecial characters are not allowed ex:(,/*#&*=+-_.etc..)</Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=>{setModal(false)}}>
                     <View style={styles.Moadlbutton}>
                         <Text style={{color:'#ffffff',fontWeight:'bold',fontFamily:'monospace'}}>Cancel</Text>
                     </View>
                    </Pressable>
                    <Pressable >
                    <View style={styles.Moadlbutton}>
                         <Text  style={{color:'#ffffff',fontWeight:'bold',fontFamily:'monospace'}}>Save</Text>
                     </View>
                    </Pressable>
                </View>
                </ImageBackground>
              </View>
           
          </View>
         

     </Modal>

     <TouchableWithoutFeedback onPress={()=> {}}>
         <Animated.View style={[styles.button,styles.menu,uploadStyle]}>
         <MaterialCommunityIcons name="file-upload-outline" size={28} color="#2196f3" 
         onPress={()=>{setPostModal(true)}}/>
         <Text style={{fontSize:7}}>Upload</Text>
         </Animated.View>
     </TouchableWithoutFeedback>

     <Modal 
        visible={closePostModal}
        transparent={true} 
        animationType='fade'>
            
          <View style={styles.modalConatiner}>
          
              <View style={styles.saveFile}>
              <ImageBackground source={require('../../assets/Image/postBg.png')} resizeMode='contain' style={{width:'100%',height:'100%'}} imageStyle={styles.bgImage}>
                <View style={{backgroundColor:'purple',height:50,borderTopLeftRadius:10,borderTopRightRadius:10,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:17,fontFamily:'monospace'}}>Post your letter</Text>
                </View>
                <View style={{width:'90%',alignSelf:'center',borderWidth:1,borderColor:'purple',height:50,borderRadius:5,marginVertical:10,padding:7}}>
                <TextInput placeholder='Enter the name of the letter...' onChangeText={(name)=>setName(name)} maxLength={20}/>
                </View>
                <Text style={{textAlign:'center',fontSize:15,fontFamily:'monospace',padding:10,}}>...Name of the letter should be specific ex:(Tang yek yegu)...</Text>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={()=>{setPostModal(false)}}>
                     <View style={styles.Moadlbutton}>
                         <Text style={{color:'#ffffff',fontWeight:'bold',fontFamily:'monospace'}}>Cancel</Text>
                     </View>
                    </Pressable>
                    
                    <Pressable onPress={uploadletter}>
                    <View style={styles.Moadlbutton}>
                         <Text  style={{color:'#ffffff',fontWeight:'bold',fontFamily:'monospace'}}>Upload</Text>
                     </View>
                    </Pressable>
                </View>
                </ImageBackground>
              </View>
           
          </View>
         

     </Modal>

     <TouchableWithoutFeedback onPress={printToFile}>
         <Animated.View style={[styles.button,styles.menu,shareStyle]}>
         <FontAwesome name="share" size={24} color="#2196f3" />
         <Text style={{fontSize:7}}>Share</Text>
         </Animated.View>
     </TouchableWithoutFeedback>

     <TouchableWithoutFeedback onPress={print}>
         <Animated.View style={[styles.button,styles.menu,downloadStyle]}>
         <Ionicons name='cloud-download' color={'#2196f3'} size={25}/>
         <Text style={{fontSize:7}}>Download</Text>
         {Platform.OS === 'ios' &&
        <>
          <View style={styles.spacer} />
          <Button title='Select printer' onPress={selectPrinter}/>
          <View style={styles.spacer} />
          {selectedPrinter ? <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
        </>
      }
         </Animated.View>
     </TouchableWithoutFeedback>

     <TouchableWithoutFeedback onPress={()=> {toggleMenu()}}>
         <Animated.View style={[styles.button,styles.menu,rotation]}>
         <Entypo name="chevron-with-circle-up" size={28} color="#5D1051" />
         </Animated.View>
     </TouchableWithoutFeedback>
    </View>
   
  )
}

export default TTFloatButton

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-end',
        paddingRight:10,
    },
    button:{
        // position:'absolute',
        bottom:10,
        width:50,
        height:50,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:2,
        shadowColor:'#c8d6e5',
        shadowOpacity:0.3,
        shadowOffset:{
            height:10
        },
        elevation:4,
        paddingVertical:10,

    },
    menu:{
        backgroundColor:'#c8d6e5'
    },
    modalConatiner:{
        flex:1,
        backgroundColor:'#000000aa',
        justifyContent:'center',
        alignItems:'center'
    },
    saveFile:{
        width:'90%',
        height:'50%',
        backgroundColor:'#ffffff',
        borderRadius:10,

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    
        

    },
    Moadlbutton:{
        width:140,
        height:40,
        backgroundColor:'purple',
        marginHorizontal:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    bgImage:{
        borderRadius:10,
        opacity:0.3,
        marginTop:1.5,

    }
})