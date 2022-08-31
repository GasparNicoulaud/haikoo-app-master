import React from 'react';
import axios from 'axios';
import firebase from 'firebase/compat/app';

const SelectHaikoo = () => {

    const [fetched_haikoo, setFetchedHaikoo] = React.useState([]);
    const [selected_haikoo, setSelectedHaikoo] = React.useState({author:"none", content:'not yet loaded'});

    React.useEffect(() => {
        fetchAPI();
      }, []);
    

    //   var selected = {author:"none", content:'not yet loaded'};

    async function fetchAPI() { 

        const idToken = await firebase.auth().currentUser.getIdToken(true);

        

       
        const response =  axios.get('https://haikoo-bc326-default-rtdb.europe-west1.firebasedatabase.app/Haikoos.json?auth=' + idToken).then(
            (response) => {
                let haikoo_array = Object.values(response.data);
                
                console.log(response)
                console.log(haikoo_array)
                console.log("fetchApi" )
                let rnd = Math.random() * haikoo_array.length 
                let rounded_rnd = Math.floor(rnd);
                setFetchedHaikoo(haikoo_array);
                setSelectedHaikoo(haikoo_array[rounded_rnd])
            }
        )

        
        // const shuffled = Object.values(response.data).sort(() => 0.5 - Math.random());
        // console.log(shuffled)
        // selected = shuffled[0];
   
       
      
    }

    return (
        <div>
                            <p id="chosen_haikoo"><strong>Random haikoo :</strong> "{selected_haikoo.content}" by <i>{selected_haikoo.author}</i> </p>

            
        </div>
    );
};

export default SelectHaikoo;