import React,{useState} from 'react'
import Button from '../src/components/Button';
import RegisterTextInput from '../src/components/RegisterTextInput';
import { EmailValidator } from '../src/core/Helpers/EmailValidator';
import { PasswordValidator } from '../src/core/Helpers/PasswordValidator';
import { NameValidator } from '../src/core/Helpers/NameValidator';
import { View,Text,StyleSheet,TouchableOpacity,StatusBar } from 'react-native';
import { theme } from '../src/core/theme';
import { signUpUser } from '../src/api/auth-api';
import { TextInput,ScrollView} from 'react-native';






export default function RegisterScreen({navigation}) {
    const [email,setEmail] = useState({value:"",error:""});
    const [password,setPassword] = useState({value:"",error:""});
    const [name,setName] = useState({value:"",error:""});
    const [bio,setBio] = useState('');
    const [loading, setLoading] = useState();

    const onSignUpPressed = async() =>{
       const nameError = NameValidator(name.value); 
       const emailError = EmailValidator(email.value);
       const passwordError = PasswordValidator(password.value);
      
       if(emailError || passwordError || nameError){
         setName({...name,error:nameError});
         setEmail({...email,error:emailError});
         setPassword({...password,error:passwordError});
       }
       setLoading(true)
       const response = await signUpUser({
         name: name.value,
         email: email.value,
         password: password.value,
         bio: bio.value
       })
       if (response.error){
         alert(response.error)
       }
       else{
         navigation.replace('LoginScreen')
       }
       setLoading(false)
     }
  
    
  return (
    <ScrollView style={{flex:1,backgroundColor:'#560027',width:'100%',height:'100%'}}>
         <StatusBar backgroundColor='#560027' barStyle='light-content' />
        <View style={styles.inputContainer}>
        <RegisterTextInput
        value={name.value}
        error={name.error}
        errorText={name.error}
        onChangeText={(text)=> setName({value:text, error:"" })}
        label='User Name'
        />
        <RegisterTextInput label='Email'
        value={email.value}
        error = {email.error}
        errorText ={email.error}
        onChangeText = {(text)=>setEmail({value:text,error:""})} 
        />
        <RegisterTextInput
           label='Password'
          secureTextEntry
        value={password.value}
        error = {password.error}
        errorText={password.error}
        onChangeText = {(text)=>setPassword({value:text,error:""})} 
        />
      
        <View style={styles.bioContainer}>
 <TextInput placeholder='Write Anything about yourself?(optional)'
         multiline
         scrollEnabled
         maxLength={100}
         autoCorrect
         selectionColor='orange'
         style={{fontStyle:'italic'}}
         value = {bio.value}
         onChangeText = {(text)=>setBio({value:text})} 
      
         />
        </View>
     
        
        
      <Button loading={loading}  mode={'contained'} onPress ={onSignUpPressed}>Sign Up</Button>
      <View style={styles.row}>
        <Text style={{color:'white', fontSize:17}}>Already have an account? </Text>
         <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
           <Text style={styles.link}>Login</Text>
         </TouchableOpacity>
      </View>
        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  inputContainer:{
    paddingHorizontal:40,
    paddingTop:15,
    // position:'relative',
    // bottom:50,
  },
  bioContainer:{
    width:'100%',
    height:140,
    borderRadius:5,
    marginVertical:10,
    backgroundColor:'#ffff',
    paddingHorizontal:10,
    paddingVertical:20,
  },
  row:{
    flexDirection:'row',
    marginTop:2,
    alignSelf:'center',
    paddingBottom:10,
    
  },
  link:{
    fontWeight:'bold',
    color:theme.colors.success,
    fontSize:17,
  },
  bgImage:{
    opacity:0.15,
  }
})


