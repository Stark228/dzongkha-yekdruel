import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import FloatButton from '../../src/components/FloatButton';

const AutoTextInput = (props) => {
  return (
    <TextInput
      {...props} 
      autoCorrect={false}
      editable
      selectionColor={'green'}
      style={{marginLeft:7,fontSize:17,}}
    />
  );
}

const ModernTangyek = () => {
  const [value, setValue] = React.useState('འི་དྲིན་ཅན་ཨ་པ་ལུ།');
  const [value1,setValue1] = useState('ང་སྒར་རྫོང་ཁག།');
  const [value2,setValue2] = useState('ཕའི་སིང་མ།');
  const [date,setDate]  = React.useState('ལོ་༡༩༩༨ ཟླ་༦ པའི་ཚེས་༢ ལུ།');
  const [reason,setReason] = React.useState('Introduction\n\n\n\n\n\n\n\n\n\n\n\nConclusion');
  function inputHandler(val){
    setValue(val)
  }


  return (
    <ScrollView style={{padding:15}}>
    <View styles={styles.Lettercontainer}>
        <View style={styles.introSection}>
            <View>
              <View style={{flexDirection:'row'}}>
              <Text>༊</Text>
            <AutoTextInput onChangeText={inputHandler} value={value}/>
            </View>
            <AutoTextInput onChangeText={(value1)=>{setValue1(value1)}} value={value1}/>
            <AutoTextInput onChangeText={(value2)=>{setValue2(value2)}} value={value2}/>
            </View>
      <View style={{paddingRight:10,}}>
      <AutoTextInput
        onChangeText={(date)=>{setDate(date)}}
        value={date}/>
         </View>
        </View>
       <View>
    </View>
  </View>
  <View style={{marginLeft:10,marginRight:10}}>
  <TextInput
        editable
        autoCorrect={false}
        style={{fontSize:17,fontFamily:'monospace'}}
        multiline
        onChangeText={(reason)=>{setReason(reason)}}
        value={reason}/>
  </View>

       <FloatButton value={value} value1={value1} value2={value2} date={date} reason={reason}/>
    </ScrollView>
  )
}

export default ModernTangyek

const styles = StyleSheet.create({
  Lettercontainer:{
    flex:1,
    margin:20,
  },
  introSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',

  }
})