import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/firestore'

export async function signUpUser({name,email,password,bio}){
    // const {user} = await firebase
    try{
      const {user} = await
      firebase.auth().createUserWithEmailAndPassword(email,password)
         await firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).set({
            id:firebase.auth().currentUser.uid,
              email,
              name,
              password,
              bio,
            })
            return(user);
    }
    catch(error){
      return{
        error:error.message,
      }
    }
  }

export async function loginUser({email,password}){
    try{
        const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email,password);
        return { user}
    }
    catch(error){
        return {
            error: error.message,
        }
    }
}
export function logoutUser() {
    firebase.auth().signOut();
}

export async function ResetPassword(email){
    try{
        await firebase
        .auth()
        .sendPasswordResetEmail(email)
    return {};    
    }
    catch(error) {
        return{
            error: error.message,
        }
    }
}


