import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Alert,StatusBar } from 'react-native';
import * as firebase from 'firebase/compat';
export default class ChangePassword extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }
  // Reauthenticates the current user and returns a promise...
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }
  // Changes user's password...
  onChangePasswordPress = () => {
    if(this.state.currentPassword=='' || this.state.newPassword ==''){
      Alert.alert("Fields can't be empty! Fill the fields ")
    }
    else{
      this.reauthenticate(this.state.currentPassword).then(() => {
        var user = firebase.auth().currentUser;
        user.updatePassword(this.state.newPassword).then(() => {
          Alert.alert(" Your password has been changed successfully!");
        }).catch((error) => {Alert.alert(error.message); });
      }).catch((error) => {Alert.alert(error.message);});
    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: "column", paddingVertical: 10, paddingHorizontal: 10,}}>
        <TextInput style={styles.textInput} value={this.state.currentPassword}
          placeholder="Current Password" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({currentPassword: text}) }}
        />
        <TextInput style={styles.textInput} value={this.state.newPassword}
          placeholder="New Password" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({newPassword: text}) }}
        />
        <TouchableOpacity  onPress={this.onChangePasswordPress} style={styles.Button}>
          <Text style={{fontSize:17,fontWeight:'bold'}}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: {
    borderWidth:1,
    borderColor:"gray",
    marginVertical: 10,
    padding:10,
    height:50,
    alignSelf: "stretch",
    fontSize: 18, },
    Button:{
      marginTop:10,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#9743B3'
    }
});