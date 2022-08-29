import Entry from "./entry.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function handleFormSubmission(event){
  event.preventDefault();
  const entry = new Entry();
  console.log(entry);
}

window.addEventListener("load", function(){
  document.querySelector("body").addEventListener("submit", handleFormSubmission);
});
