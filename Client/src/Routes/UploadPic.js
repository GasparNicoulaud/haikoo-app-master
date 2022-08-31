import React from 'react';

import { uploadBytes } from 'firebase/storage';


import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'


import { getAuth } from 'firebase/auth';

import { getStorage, ref} from "firebase/storage";
import {useState} from 'react';

















// const auth = getAuth();
// const user = auth.currentUser;



// var firebaseConfig = {
//     apiKey: "AIzaSyBTh2cWOzmY8wqrqeS5y-uuhnzkG115hGE",
//     authDomain: "haikoo-bc326.firebaseapp.com",
//     databaseURL: "https://haikoo-bc326-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "haikoo-bc326",
//     storageBucket: "haikoo-bc326.appspot.com",
//     messagingSenderId: "784052480580",
//     appId: "1:784052480580:web:9a9e5e50cb8df5def9ea11"
//   };

//   const firebase = initializeApp(firebaseConfig);

const UploadPic = () => {

    const auth = getAuth();
    const storage = getStorage();

    const [imageUpload , setImageUpload] = useState(null)
    const user = auth.currentUser;
    const uploadImage = () => {
    
        if(imageUpload == null) return;
        const imageRef = ref(storage, `/images/${user.uid}`);
        uploadBytes(imageRef, imageUpload).then (() =>  {
            alert("image uploaded !");
          
          
           
    
        });
        
    }
    



console.log("userID");

    return (
        <div>
           
            <div className='main-container' >
            <div id="first_step">
        <h2>
        Upload a pic of your choice :</h2>
        

     <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
     
 <button onClick={uploadImage}> Upload Pic</button>
  {/* <button >Submit function</button> */}
 <button className="play_buttons2"  >Submit</button>
      </div> 
      </div>
        </div>
    );
};
// export {username};
export default UploadPic;