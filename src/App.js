import React from "react";
import axios from 'axios';

import DefaultHOC  from "./HOC/DefaultHOC";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page"
import MovieHOC from "./HOC/MovieHOC";
import MoviePage from "./pages/Movie.Page";
import Plays from "./pages/Plays.Page"; 

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

function App() {
  return (
   <>
    <DefaultHOC path='/' exact component={HomePage} /> 
    <MovieHOC path='/movie/:id' exact component={MoviePage}/>
    <DefaultHOC path='/plays' exact component={Plays} />    
   </>
  );
}

export default App;