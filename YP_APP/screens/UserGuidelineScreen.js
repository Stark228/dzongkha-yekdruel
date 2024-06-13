
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
const ChooseTemplateScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={{ uri: 'https://blog.buddhagroove.com/wp-content/uploads/2021/03/8-symbols-1200x675.jpg' }}
        style={{ width: '100%', height: '100%', }}
        resizeMode='repeat' imageStyle={{ opacity: 0.21 }}>
        <View style={[styles.letterButton, styles.firstButton]}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/letterIcon.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('GenjaGuide')}
            style={{ width: '100%' }}>
            <View>
              <Text style={styles.buttonText}>གན་རྒྱའི་ཡི་གུ།</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('TangyekGuide')}
          style={styles.letterButton}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/licon.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.buttonText}>གཏང་ཡིག།</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.letterButton} onPress={() => { navigation.navigate('ZhuyekGuide') }}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/letterIcon.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.buttonText}>ཞུ་ཚིག་/བཤེརར་ཡིག།</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('SeldraGuide') }} style={styles.letterButton}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/licon.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.buttonText}>གསལ་བསྒྲགས།</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('KashoGuide') }} style={styles.letterButton}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/licon.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.buttonText}>བཀའ་ཤོོག།</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('KajaGuide') }} style={styles.letterButton}>
          <View style={styles.imageBox}>
            <Image source={require('../assets/licon.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.buttonText}>བཀའ་རྒྱའི་ཡི་གུ།</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.letterButton, styles.lastButton]} onPress={() => navigation.navigate('ChooseTemplateScreen')} >
          <View style={[styles.imageBox, styles.lastBox]}>
            <Image source={require('../assets/plain.png')} style={{ height: 60, width: 60 }} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.buttonText}>Write Letter</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>

  )
}

export default ChooseTemplateScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,

  },
  Htext: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',

  },
  firstButton: {
    marginTop: 30,
  },
  letterButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#0d47a1',
    marginVertical: 8,
    borderWidth: 0.5,
    borderColor: '#9C27B0',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lastButton: {
    backgroundColor: 'green'

  },
  imageBox: {
    width: 70,
    height: '100%',
    borderRightWidth: 4,
    borderRightColor: '#1976d2',
    alignItems: 'center',
    justifyContent: 'center',

  },
  lastBox: {
    borderRightColor: '#1976',
  },
  buttonText: {
    fontFamily: 'monospace',
    fontSize: 20,
    marginLeft: 20,
    color: '#eee'
  },
})