//This file will run through the reference "sheet" to find the amount to add to the existing slope rating
//This is not very efficient, I realize -- I will work to improve this into a loop instead of so many elif statements.

function findSlopeDiff(yardDiff){
    let toAdd = 0;
    
    if(yardDiff <= 44){
        toAdd = 0;
    }
    else if(yardDiff > 44 && yardDiff <= 134){
        toAdd = 1;
    }
    else if(yardDiff > 134 && yardDiff <= 224){
        toAdd = 2;
    }
    else if(yardDiff > 224 && yardDiff <= 296){
        toAdd = 3;
    }
    else if(yardDiff > 296 && yardDiff <= 386){
        toAdd = 4;
    }
    else if(yardDiff > 386 && yardDiff <= 476){
        toAdd = 5;
    }
    else if(yardDiff > 476 && yardDiff <= 548){
        toAdd = 6;
    }
    else if(yardDiff > 548 && yardDiff <= 638){
        toAdd = 7;
    }
    else if(yardDiff > 638 && yardDiff <= 728){
        toAdd = 8;
    }
    else if(yardDiff > 728 && yardDiff <= 800){
        toAdd = 9;
    }
    else if(yardDiff > 800 && yardDiff <= 890){
        toAdd = 10;
    }
    else if(yardDiff > 890 && yardDiff <= 980){
        toAdd = 11;
    }
    else if(yardDiff > 980 && yardDiff <= 1052){
        toAdd = 12;
    }
    else if(yardDiff > 1052 && yardDiff <= 1142){
        toAdd = 13;
    }
    else if(yardDiff > 1142 && yardDiff <= 1232){
        toAdd = 14;
    }
    else{
        toAdd = 15;
    }
    return toAdd;
}

function findCRDiff(yardDiff){
    
}