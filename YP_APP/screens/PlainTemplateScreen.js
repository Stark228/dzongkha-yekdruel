import React, { useState } from 'react';
import { View, TextInput, StyleSheet,ScrollView} from 'react-native';
import PlainFloatButton from '../src/components/PlainFloatButton';

const PlainTemplateScreen = () => {
const [letter,setLetter] =useState('write your own letter here!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        borderBottomColor: '#000000',
        flex:1,
      }}>
        <ScrollView>
      <TextInput
        multiline
        value ={letter}
        selectionColor={'purple'}
        maxLength={1000}
        style={{padding: 10,}}
        onChangeText= {(letter)=>{setLetter(letter)}}
      />
    
      <PlainFloatButton content={letter}/>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
});

export default PlainTemplateScreen;