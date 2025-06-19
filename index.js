
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

// call preloader function when the window loads
// "The load event is fired when the whole page has loaded, 
// including all dependent resources such as stylesheets, scripts, iframes, and images, except those that are loaded lazily." - Mozilla
window.onload = preloader;

function preloader() {

    /**
     * create a div element with id "dynamic" and append a label and a button to it
     */
    const div = document.createElement("div");
    div.id = "dynamic";
    div.innerHTML = "<label id = greeting>Hello</label>";
    div.innerHTML += "<button id = callAlert>Professor</button>"; // append button to div
    document.body.appendChild(div);

    // for testing purposes, you can uncomment the following lines to see the id and innerHTML of the div
    // alert(div.id);
    // alert(div.innerHTML);

    /**
     * get document elements by id and set their styles
     */
    const greeting = document.getElementById("greeting");
    const dynamicFormatting = document.getElementById("dynamic");
    const alertButton = document.getElementById("callAlert");

    // set styles for the greeting element
    greeting.style.color = "red";
    greeting.style.fontWeight = "bold";
    greeting.style.padding = "10px";
    
    // set styles for the dynamic div element to make it look nice
    dynamicFormatting.style.background = "linear-gradient(to left, hsl(215, 89%, 14%), hsl(204, 2%, 55%))";
    dynamicFormatting.style.padding = "50px";
    dynamicFormatting.style.boxShadow = "10px 10px 5px hsl(0, 0%, 0%, .5)";
    dynamicFormatting.style.minWidth = "350px";
    dynamicFormatting.style.display = "flex";
    dynamicFormatting.style.flexDirection = "row";
    dynamicFormatting.style.alignItems = "center";
    dynamicFormatting.style.justifyContent = "center";
    dynamicFormatting.style.padding = "20px";

    // create a click event listener for the button
    // when the button is clicked, it will call the createAlert function
    alertButton.addEventListener("click", createAlert);
    function createAlert() {
        setTimeout(() => {
            alert("This is Mason.");
        }, 1000);
    }
}



