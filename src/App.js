
import {render} from 'react-dom';

import React , { useState} from "react";

import axios from 'axios';


import {Link , useParams } from 'react-router-dom';



import displayMovie from './movielink';





function App(){
    
    const [movies , setMovies] = useState([]);
     

    const [searchedmovie , setSearchedmovie] = useState("");



    const getMovies = async () => {
        let url = "http://www.omdbapi.com/?i=tt3896198&apikey=40199f4d&s=";
        url = url + searchedmovie;
        const moviesData = await axios.get(url);
       // console.log(moviesData.data.Search);
        setMovies(moviesData.data.Search); 
        console.log(movies);

    };

    

        function submitHandler(){
             
             setSearchedmovie(searchedmovie);
             getMovies();
        }

        

    return (

        
        <div>

            <input type="text" value={searchedmovie} onChange={ event => {
                setSearchedmovie(event.target.value);
            }}></input>
            <button onClick={submitHandler}> Submit </button>

            {
                movies.map(
                   movie => {
                    
                    
             
                    

     
                    return(
                        
                        <div>


                             
                           
                            
                           
             
                           <Link to={movie.Title}> {movie.Title} </Link> 



                            <img src={movie.Poster} alt=""/>
                            
                            

                         </div>
                           
                    );
                   }  
                )
            }


        </div>
        
    );
}


export default App;
