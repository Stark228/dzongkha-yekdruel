import React,{useState,useEffect}from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,Alert} from 'react-native'
import {MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase/compat';
import 'firebase/firestore'




export default function SavedScreen() {
  const [std, setStd]=useState([]);
  const LetterFetch = async() => {
    try {
      const list=[];
      await firebase.firestore()
      .collection('SaveLetter').where('postedBy',"==",firebase.auth().currentUser.uid)
      .get()
      .then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
          const {saveLetterName,value,value1,value2, date, reason, } = doc.data();
          list.push({
            saveLetterName:saveLetterName,
            value:value,
            value1:value1,
            value2:value2,
            date : date,
            reason:reason,
           
          })
        })
      })
      setStd(list);
    } catch (error) {
    }
  }
  useEffect(()=>{
    LetterFetch();
    },[])
    const DeleteLetter = async (item) => {
      await firebase.firestore().collection('SaveLetter').doc(item.id)
      .doc().delete()
      .then(()=>{
        Alert.alert('','Deleted successfully');
        console.log(id.item);
      }).catch(error =>{
          alert(error);
      })
    }

    const Stdlist=({item}) =>{
      return (
        <View style={styles.mainContainer}>
         <View> 
          <View>
                <Text style={{fontFamily:'monospace',fontWeight:'bold',paddingLeft:10,marginBottom:10,paddingBottom:4,borderBottomWidth:1.5,borderBottomColor:'#E5E5E5'}}>{item.saveLetterName}</Text>
          </View>
          <View style={styles.letterConatiner}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:4,}}>
              <View >
                <Text style={{fontFamily:'monospace',fontSize:15}}>༊{ item.value}</Text>
                <Text style={{fontFamily:'monospace',fontSize:15}}>{ item.value1}</Text>
                <Text style={{fontFamily:'monospace',fontSize:15}}>{ item.value2}</Text>
                </View>
                <View>
                <Text style={{fontFamily:'monospace',fontSize:15}}>{ item.date}</Text>
                </View>
            </View>   
                <Text style={{fontFamily:'monospace',fontSize:15}}>{ item.reason}</Text>
                <View style={[styles.buttonContainer,]}>
                  <TouchableOpacity onPress = {(item)=>{DeleteLetter(item)}} style={styles.button}>
                  <MaterialIcons name="delete-forever" size={24} color="red" />
                  <Text  style={{color:'red',fontSize:16,fontFamily:'monospace',marginLeft:30}}>Delete</Text>
                  </TouchableOpacity>
                  </View>    
         </View>
        </View>  
      </View>
      )
    }

  return (
    <View style={{flex:1,backgroundColor:'#eee'}}>
    <FlatList
    data={std}
    renderItem={Stdlist}
    keyExtractor={item=>`key-${item.id}`}
    showsVerticalScrollIndicator={false}
    />
  </View>
  )
}
const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    paddingHorizontal:20,
    backgroundColor:'#eee',
    marginTop:10,
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  letterConatiner:{
    width:'100%',
    height:'100%',
    borderRadius:10,
    padding:20,
    backgroundColor:'#E5E5E5',

  },
  
buttonContainer:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  height:40,
  marginTop:10,
},
button:{
  flexDirection:'row',
  backgroundColor:'#5D1051',
  height:'100%',
  width:'100%',
  justifyContent:'center',
  alignItems:'center',
  paddingLeft:20,
  borderRadius:5,
  paddingHorizontal:20,
} 

})



