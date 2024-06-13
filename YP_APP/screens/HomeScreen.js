import React,{useState,useEffect}from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons';
import firebase from 'firebase/compat';
import 'firebase/firestore'

export default function HomeScreen() {
  const user = firebase.auth().currentUser;
  const [std, setStd]=useState([]);
  const LetterFetch = async() => {
    try {
      const list=[];
      await firebase.firestore()
      .collection('Letter')
      .get()
      .then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
          const {name,value,value1,value2, date, reason, } = doc.data();
          list.push({
            name:name,
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
    const Stdlist=({item}) =>{
      return (
        <View style={styles.mainContainer}>
          <ScrollView style={{flex:1,}}>
           <View style={styles.nameContainer}>
             <MaterialCommunityIcons name="account-circle" size={28} color='#000000'/>
               <Text style={{fontFamily:'monospace',paddingLeft:6,}}>#{user.displayName}</Text>
          </View>
          <View>
                <Text style={{fontFamily:'monospace',fontWeight:'bold',paddingLeft:10,}}>{item.name}</Text>
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
          
        
         </View>   
          </ScrollView>
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
    padding:20,
    backgroundColor:'#eee'
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  letterConatiner:{
    width:'100%',
    height:'85%',
    borderRadius:10,
    padding:20,
    backgroundColor:'#E5E5E5',
    borderColor:'purple',
    marginTop:10,

  }

})

