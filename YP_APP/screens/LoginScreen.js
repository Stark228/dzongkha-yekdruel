import React,{useState} from 'react'
import Button from '../src/components/Button';
import TextInput from '../src/components/TextInput';
import PasswordTextInput from '../src/components/PasswordTextInput';
import { EmailValidator } from '../src/core/Helpers/EmailValidator';
import { PasswordValidator } from '../src/core/Helpers/PasswordValidator';
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { theme } from '../src/core/theme';
import { loginUser } from '../src/api/auth-api';
import { StatusBar,ScrollView,KeyboardAvoidingView } from 'react-native';
export default function LoginScreen({navigation}) {
    const [email,setEmail] = useState({value:"",error:""});
    const [password,setPassword] = useState({value:"",error:""});
    const [loading,setLoading] = useState();
    const onLoginPressed = async() =>{
        const emailError = EmailValidator(email.value);
        const passwordError = PasswordValidator(password.value)
        if(emailError || passwordError){
            setEmail({...email,error: emailError});
            setPassword({...password,error: passwordError});
        }
        setLoading(true)
        const response = await loginUser({
          email: email.value,
          password: password.value,
        });
        if(response.error) {
          alert(response.error);
        }
        else {
          navigation.replace('HomeScreen')
        }
        setLoading(false)
        
   
    }

  return (
  <KeyboardAvoidingView style={styles.screen}>
  <ScrollView style={styles.screen}>
  <View style={styles.container}>
    <StatusBar backgroundColor='#560027' barStyle='light-content' />
   <Image source={require('../assets/logo.png')} resizeMode='cover' style={{width:230,height:170,alignSelf:'center'}}/>
      <Image source={require('../assets/Image/bhutanLogo.png')} resizeMode='cover' style={{width:300,height:70,alignSelf:'center',tintColor:'orange'}}/>
        <TextInput
        label="Email"
        value={email.value}
        error = {email.error}
        errorText ={email.error}
        onChangeText = {(text)=>setEmail({value:text,error:""})} 
        />
          <PasswordTextInput
          label='Password'
        value={password.value}
        error = {password.error}
        errorText={password.error}
        onChangeText = {(text)=>setPassword({value:text,error:""})} 
        />
     
        <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={()=> navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
        </View>
      <Button  mode={'contained'} loading={loading} onPress ={onLoginPressed}>Login</Button>
      <View style={styles.row}>
        <Text style={{color:'white',fontSize:17,}}>Don't have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
           <Text style={styles.link}>Sign Up</Text>
         </TouchableOpacity>
      </View>
     
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    
  );
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'#560027',
    paddingTop:10,
  },
  container:{
    paddingHorizontal:40,
    backgroundColor:'#560027',
    flex:1,

  },
  row:{
    flexDirection:'row',
    marginTop:8,
    marginBottom:100,
    alignSelf:'center'
  },
  link:{
    fontWeight:'bold',
    fontSize:17,
    color:theme.colors.success,
  },
  forgotPassword:{
    width:'100%',
    alignItems:'flex-end',
    marginBottom:24,

  },
  forgot:{
    fontSize:15,
    color:theme.colors.success,
  }
})


