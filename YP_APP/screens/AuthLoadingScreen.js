// import React from "react";
// import { ActivityIndicator } from "react-native";
// import Background from "../src/components/Background";
// import firebase from "firebase/compat/app";

// export default function AutheLoadingSreen({navigation}){
//         firebase.auth().onAuthStateChanged((user)=>{
//             if (user) {
//                 //user is logged in
//                 navigation.reset({
//                     routes: [{name: 'HomeScreen'}],
//                 });
//             }
//             // user not logged in
//             else{
//                 navigation.reset({
//                     routes: [{name: 'LoginScreen'}],
//                 });
//             }
//         });
//         return(
//         <Background>
//             <ActivityIndicator size='large' />
//         </Background>

//     );
// }