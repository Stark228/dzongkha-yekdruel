import { Provider} from 'react-native-paper';
import { theme} from './src/core/theme';
import 'react-native-gesture-handler';
import {Entypo} from '@expo/vector-icons';

//navigators
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from "@expo/vector-icons";
import firebase from 'firebase/compat/app';
import { StatusBar } from 'react-native';
// screens
import AutheLoadingSreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ResetPasswordScreen } from './screens/Index';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import WriteLetterScreen from './screens/WriteLetter';
import { menuScreen,ChooseTemplateScreen, 
  PlainTemplateScreen, UserGuidelineScreen,
  GenjaScreen,ModernTangyek,AboutScreen,PostScreen,SavedScreen,
  EditProfileScreen,TangyekGuide,GenjaGuide,ZhuyekGuide,SeldraGuide,
  KajaGuide,KashoGuide,TraditionalTangyek
 } from './screens/Index';
 import ChangePassword from './screens/ChangePassword';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

import { firebaseConfig } from './src/core/config';
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default function App() { 
  return (
    <Provider theme={theme}>
      <StatusBar backgroundColor='#5D1051' barStyle='light-content' />
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </Provider>
  );
}
function MyStack(){
  return(
    <Stack.Navigator initialRouteName='LoginSreen' screenOptions={{
      headerTintColor:'#fff',
      headerTitleAlign:'center',
    }}>
          <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>

          <Stack.Screen name='RegisterScreen' component={RegisterScreen} 
          options={{headerStyle:{backgroundColor:'#560027'},headerTitle:'ཐོ་བཀོད་མཛད་གནང་',
          }}  />

          <Stack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen}
            options={{headerStyle:{backgroundColor:'#560027'},headerTitle:'Forgot Password',
          }} />
          
          <Stack.Screen  name='ChooseTemplateScreen' component={ChooseTemplateScreen} 
                          options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'ཡིགག་སྐུར་རྣམ་གཞག', }} />

          <Stack.Screen name='PlainTemplate' component={ PlainTemplateScreen}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'Plain Template', }} />

          <Stack.Screen name='UserGuidelineScreen' component={UserGuidelineScreen}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'ཡིགག་འགྲུལ་གྱི་ དཔེ་རིས།', }}/>

           <Stack.Screen name='GenjaScreen' component={GenjaScreen}
            options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'ཡིགག་སྐུར་རྣམ་གཞག', }} />

           <Stack.Screen name='ModernTangyek' component={ModernTangyek}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'དེང་རབས་ལམ་ལུགས་ གཏང་ཡིག།', }}/>

         <Stack.Screen name='TraditionalTangyek' component={TraditionalTangyek}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'དེང་སང་ལམ་ལུགས་ གཏང་ཡིག།', }}/>

            <Stack.Screen name='EditProfileScreen' component={EditProfileScreen}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'Edit Profile', }}/>

<Stack.Screen name='TangyekGuide' component={TangyekGuide}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'གཏང་ཡིག་གྱི་དཔེ་རིས།', }}/>
           
  <Stack.Screen name='GenjaGuide' component={GenjaGuide}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'གན་རྒྱའི་ཡི་གུ་གྱི་དཔེ་རིས།', }}/>   
  <Stack.Screen name='ZhuyekGuide' component={ZhuyekGuide}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'ཞུ་ཚིག་/བཤེརར་ཡིག།', }}/>                  
 <Stack.Screen name='SeldraGuide' component={SeldraGuide}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'གསལ་བསྒྲགས།', }}/> 

 <Stack.Screen name='KajaGuide' component={KajaGuide}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'བཀའ་རྒྱའི་ཡི་གུ།', }}/>
<Stack.Screen name='KashoGuide' component={KashoGuide}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'བཀའ་ཤོོག།', }}/> 
 <Stack.Screen name='ChangePassword' component={ChangePassword}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'Change Password' }}/>
 <Stack.Screen name='AboutScreen' component={AboutScreen}
           options={{headerStyle:{backgroundColor:'#5D1051'},headerTitle:'About Us' }}/>
          <Stack.Screen name='HomeScreen' component={TopNavigation} options={{headerShown:false}}/>
        </Stack.Navigator>
        
  )
}
function TopNavigation(){
  return(
   <Tab.Navigator
   screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:'#000000',
    tabBarStyle:{
        backgroundColor: '#5D1049',
        height:60,
        paddingTop:7,
      },
    }}>
    

     <Tab.Screen name='Home' component={HomeScreen}
     options={{title:(props)=> <Entypo name="home" size={25} color="#ffff" />}}
     />
     <Tab.Screen name='Write'  component={WriteLetterScreen}
      options={{title:(props)=> <Entypo name="pencil" size={25} color="#ffff" />}}
      />
    <Tab.Screen name='ProfileScreen' component={Profile} 
     options={{title:(props)=> <Ionicons name='person' size={25} color="#ffff"/>}}
     />
    <Tab.Screen name='Menu' component={menuScreen} 
    options={{title:(props)=> <Ionicons name='menu' size={25} color="#ffff"/>}}
    />
   </Tab.Navigator>
  )
}

function Profile() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarIndicatorStyle:{
        color:'orange'
      },
      tabBarLabelStyle: { fontSize: 12,color:'#DBE2FA',fontFamily:'monospace' },
      tabBarStyle:{
        backgroundColor: '#5D1051',
      },}}>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
    </Tab.Navigator>
  );
}

