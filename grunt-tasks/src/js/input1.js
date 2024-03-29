document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelectorAll(".button");

    button.forEach(button =>{
        button.addEventListener("click", function(){
            alert("Button Clicked!");
        });
    });

    console.log("Sample JS loaded and Ready");
});


function sampleFunction(){
    console.log("This is a Sample function!!");
}

let sampleVar = "This is a sample variable.";