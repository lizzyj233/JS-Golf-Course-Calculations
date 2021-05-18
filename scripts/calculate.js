let calcButton = document.getElementById("calculate");


calcButton.addEventListener("click", (e)=> {
    try{
        calculate();
    }
    catch(error){
        document.getElementById("result").innerHTML = "Incomplete Form.";
        document.getElementById("result").style.display = "block";
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

    let slopeAdd = (findSlopeDiff(yardDiff));
    //let CRAdd = findCRDiff(yardDiff);

    document.getElementById("result").innerHTML = `The adjusted slope for ${course} is ${slopeAdd + rSlope}.<br> The adjusted course rating is TBD`;
    document.getElementById("result").style.display = "block";

}