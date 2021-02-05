import React,{useEffect, useState} from "react";
import Recipe from './recipe';
import "./App.css";

/* Use Effect dá fecth da API e a useState usa-a */

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&q=chicken%20soup");
xhr.setRequestHeader("x-rapidapi-key", "2faf8cc67cmshcfec2a63d28bcc7p112444jsn5df50d9eb123");
xhr.setRequestHeader("x-rapidapi-host", "yummly2.p.rapidapi.com");

xhr.send(data);