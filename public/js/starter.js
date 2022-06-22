import { HomeView } from "./app.js";

const inputEL= document.getElementById("input-int");
const formEL = document.getElementById('submit-conversion');
const resultLabel = document.querySelector('.result-label');
const result = document.querySelector('.result-number');
const resultContainer = document.querySelector('.results');

HomeView(inputEL, formEL, resultContainer, resultLabel, result);

