
/* ---------------------- History and Concept pages ---------------------- */
// Mouse click on leftside bar, anchor view to target text on the right side
function anchorText(id) {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------------------- CV Page ---------------------- */
// Load document
function loadDoc(url, xFunction) {
  const xhttp=new XMLHttpRequest();
  xhttp.onload = function() {xFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

// Get a content from id "sport"
function getExcercise(xhttp) {
  document.getElementById("sport").innerHTML =  xhttp.responseText;
}

/* ---------------------- Home Page ---------------------- */

// Call back function. User choose file type and load that file according to user choice.
function myDownloadCV(){
  type = document.getElementById("typeCV").value;
  if (type == "") {
    alert("Please select the file extension!");
  }
  else {
  let path = "file_download/CV." + type;
  window.open(path);
  }
}

function myDownloadConcept(){
  type = document.getElementById("typeConcept").value;
  if (type == "") {
    alert("Please select the file extension!");
  }
  else {
  let path = "file_download/concept." + type;
  window.open(path);
  }
}

function myDownloadHistory(){
  type = document.getElementById("typeHistory").value;
  if (type == "") {
    alert("Please select the file extension!");
  }
  else {
  let path = "file_download/history." + type;
  window.open(path);
  }
}


// User enter name. User press Submit. Wellcome sms is shown.
function wellcome() {
  let sms = "Hi " + document.getElementById("uname").value +" !  Wellcome to my website !  Have a great day !";
  document.getElementById("name").innerHTML = sms;
}

// Reference
// <li>https://www.w3schools.com/</li>
// <li>https://stackoverflow.com/</li>

