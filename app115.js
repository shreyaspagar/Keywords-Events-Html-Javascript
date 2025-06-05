let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
    
    console.log("code = ",event.code); //Arrowup(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    if(event.code == "KeyU") {
        console.log("character moves up");
    } else if(event.code == "KeyD") {
        console.log("character moves down");
    } else if(event.code == "KeyL") {
        console.log("character moves Left");
    } else if(event.code == "KeyR") {
        console.log("character moves Right");
    }


});

// input.addEventListener("keyup", function (){
//     console.log("key was released");
// });