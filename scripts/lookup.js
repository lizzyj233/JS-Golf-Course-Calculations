//This file will run through the reference "sheet" to find the amount to add to the existing slope rating
//This is not very efficient, I realize -- I will work to improve this into a loop instead of so many elif statements.

function findSlopeDiff(yardDiff){    
    if(yardDiff <= 44){
        return 0;
    }
    else if(yardDiff > 44 && yardDiff <= 134){
        return 1;
    }
    else if(yardDiff > 134 && yardDiff <= 224){
        return 2;
    }
    else if(yardDiff > 224 && yardDiff <= 296){
        return 3;
    }
    else if(yardDiff > 296 && yardDiff <= 386){
        return 4;
    }
    else if(yardDiff > 386 && yardDiff <= 476){
        return 5;
    }
    else if(yardDiff > 476 && yardDiff <= 548){
        return 6;
    }
    else if(yardDiff > 548 && yardDiff <= 638){
        return 7;
    }
    else if(yardDiff > 638 && yardDiff <= 728){
        return 8;
    }
    else if(yardDiff > 728 && yardDiff <= 800){
        return 9;
    }
    else if(yardDiff > 800 && yardDiff <= 890){
        return 10;
    }
    else if(yardDiff > 890 && yardDiff <= 980){
        return 11;
    }
    else if(yardDiff > 980 && yardDiff <= 1052){
        return 12;
    }
    else if(yardDiff > 1052 && yardDiff <= 1142){
        return 13;
    }
    else if(yardDiff > 1142 && yardDiff <= 1232){
        return 14;
    }
    else{
        return 15;
    }
}

function findCRDiff(yardDiff){
    
}