
import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

async function gettingData(){
   

}

function Movie(){

    

    let movietitle = useParams();
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=40199f4d&t=" + movietitle.id;

    console.log(movietitle);


    const moviedata = axios.get(url);

    if(moviedata){
       

       // moviedata = JSON.parse(moviedata.data)
        console.log(moviedata);
        


    }

    return <h1> {movietitle.id} </h1>
    


}


export default Movie ;

