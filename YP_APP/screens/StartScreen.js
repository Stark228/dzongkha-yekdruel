import React from 'react'
import Header from '../src/components/Header';
import Paragraph from '../src/components/Paragraph';
import Button from '../src/components/Button';
import Background from '../src/components/Background';
import Logo from '../src/components/Logo'
export default function StartScreen({navigation}) {
  return (
      <Background>
          <Logo/>

        <Header>Login Template</Header>
         <Paragraph>
          The esiest way to start with your amazing application </Paragraph>
      <Button  mode={'outlined'}
      onPress = {()=> navigation.navigate('LoginScreen')}>Login</Button>
      <Button  mode={'contained'}
      onPress = {()=> navigation.navigate('RegisterScreen')}>Sign Up</Button>
      </Background>
    
  );
}


