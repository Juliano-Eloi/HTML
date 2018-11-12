/* When the user presses the submit button, change the greeting to include their name */

//get access to the button and set up click event handler
var button = document.getElementById("submit");
button.onclick = changeGreeting;

function changeGreeting(){
    var greeting = document.getElementsByTagName("h2")[0];
    var input = document.getElementById("name").value;
    greeting.innerHTML = "Hello, " + input;
}

