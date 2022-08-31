

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getStorage, ref } from 'firebase/storage';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { uploadBytes } from 'firebase/storage';



import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import UploadPic from './UploadPic';
import Loginalt from './Loginalt';











const storage = getStorage();


















const auth = getAuth();
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  if (user) {

    console.log("USER")
    console.log(user)
    // setCurrentUser(user);



    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    console.log("NOUSER")
  }
});



// const user = auth.currentUser;

// if (user) {
//  console.log("usersignedin")
// } else {
//     console.log("nousersignedin")
// }




const UserView = () => {

  
  const [current_user , setCurrentUser] = React.useState(null);

    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
    const [my_haikoos, setMyHaikoos] = React.useState([]);
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setIsSignedIn(!!user);

        
         firebase.auth().currentUser.getIdToken(true).then((idToken) => {
              const response =  axios.get('https://haikoo-bc326-default-rtdb.europe-west1.firebasedatabase.app/Haikoos.json?auth=' + idToken).then(
                  (response) => {
                      let haikoo_array = Object.values(response.data);
                      if (isSignedIn) {
                        setMyHaikoos (haikoo_array.filter(haikoo => firebase.auth().currentUser.displayName === haikoo.author))
                        //setMyHaikoos (haikoo_array)
                      }
                      console.log(response)
                      console.log(haikoo_array)
                      console.log("fetchApi" )
                      let rnd = Math.random() * haikoo_array.length 
                      let rounded_rnd = Math.floor(rnd);
                    
                  }
              )
            })
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, [isSignedIn]);
    


    if (!isSignedIn) {
      return;
    }

    

      
    return (
        <div id='userview'>
          

          <Loginalt/>
            <h1>My Profile</h1>
            <p>{firebase.auth().currentUser.displayName}</p>
            <p>{firebase.auth().currentUser.email}</p>
            <UploadPic/>
            <img src={ "/" + firebase.auth().currentUser.photoURL}/>
            <p>{firebase.auth().currentUser.uid}</p>
            <p>{my_haikoos.length}</p>
            <div className='Myhaikoos'>
            <h1>My haikoos</h1>
            <li>{my_haikoos.map((haikoo, i) =>
                <ul key={i}><strong>{haikoo.title}</strong> " {haikoo.content}" by <i>{haikoo.author}</i></ul>
            )}</li>
            </div>
           
            <h1>Favourites</h1>
            <h1>Rankings</h1>

            
        </div>
    );
};

export default UserView; 