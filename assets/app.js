/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import React from 'react'
import ReactDOM from "react-dom"
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";

// any CSS you import will output into a single css file (app.css in this case)
//import './styles/app.css';
import './styles/style.scss'

// start the Stimulus application
import './bootstrap';

ReactDOM.render(
     <React.StrictMode>
         <Nav/>
         <Carousel/>
         <SearchBar/>
         <HomePage/>
     </React.StrictMode>,
    document.getElementById('app')
)

