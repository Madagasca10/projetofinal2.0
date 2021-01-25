import React,{useEffect, useState} from "react";
import Recipe from './recipe';
import "./style.css";



const App = () =>{
    const APP_ID = "";
    const APP_KEY = "";
  
    const[recipes, setRecipes] = useState([]);
    const[search, setSearch] = useState('');
    const[query, setQuery] = useState('');
  
    useEffect(() => { 
      getRecipes();    
    }, [query]);
  
    const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json(); 
    setRecipes(data.hits);
    /* console.log(data.hits); */
    }
  
  
    const updateSearch = e =>{
      setSearch(e.target.value);
    }
  
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }
  
    
    
    export default App;
    