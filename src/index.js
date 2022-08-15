
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"; 
import Movie from "./Movie.js"


import {
    BrowserRouter,
    Routes,
    Route,
    Router,
  } from "react-router-dom";
 

  const root = ReactDOM.createRoot(
    document.getElementById("root")
  );


  root.render(
    <BrowserRouter>
      <Routes>
    
          <Route path="/" element={<App />}/>

          <Route path=":id" element={<Movie/>}/>


      </Routes>
    </BrowserRouter>
  );
  
    


