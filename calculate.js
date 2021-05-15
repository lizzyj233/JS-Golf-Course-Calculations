let calcButton = document.getElementById("calculate");


calcButton.addEventListener("click", (e)=> {
    try{
        calculate();
    }
    catch(error){
        console.log("Incomplete Form");
    } 
    e.preventDefault();
});

function calculate(){
    //get the values from the form and store to variables
    let course = (document.getElementById("course").value) + " - " + (document.getElementById("tees").value);
    let holes = document.querySelector('input[name="holes"]:checked').value;
    let uYardage = parseInt(document.getElementById("unratedTeeYards").value);
    let rYardage = parseInt(document.getElementById("ratedTeeYards").value);
    let rSlope = parseInt(document.getElementById("ratedTeeSlope").value);
    let rCR = parseFloat(document.getElementById("ratedTeeCR").value);
    let yardDiff = uYardage - rYardage;
}