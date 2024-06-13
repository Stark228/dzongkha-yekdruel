import React,{useState} from 'react'
import Header from '../src/components/Header';
import Button from '../src/components/Button';
import TextInput from '../src/components/TextInput';
import { EmailValidator } from '../src/core/Helpers/EmailValidator';
import { ResetPassword } from '../src/api/auth-api';
import {View,Text,StyleSheet} from 'react-native'



export default function ResetPasswordScreen({navigation}) {
    const [email,setEmail] = useState({value:"",error:""});
    const [loading,setLoading] = useState();

    const onResetPressed = async() =>{
        const emailError = EmailValidator(email.value);
        if(emailError){
            setEmail({...email,error: emailError});
        }
        setLoading(true)
        const response = await ResetPassword(email.value)
        if(response.error){
          alert(response.error)
        }
        else{
          navigation.replace('LoginScreen')
          alert("Reset password has been submited succesfully in your email!")
        
        }
        setLoading(false)
      
    }
  return (
      <View style={styles.container}>
        <Text style={{fontSize:20,fontFamily:'monospace',textAlign:'center',color:'orange',marginVertical:20,}}>Restore your password</Text>
        <TextInput label='Email'
        value={email.value}
        error = {email.error}
        errorText ={email.error}
        onChangeText = {(text)=>setEmail({value:text,error:""})} 
        description='You will recieve email with pasword reset link'
        />
      <Button  mode={'contained'} loading={loading} onPress ={onResetPressed}>send instructions</Button>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#560027',
    paddingHorizontal:10,
    paddingVertical:10,
  }
});



