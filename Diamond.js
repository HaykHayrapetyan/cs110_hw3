const space = function(numberofspaces){
    if(numberofspaces===0){
        let stars = "";
    }
    return " " + space(numberofspaces-1);
};

const star = function(numberofstars){
    if(numberofstars <= 0){
        return "";
    }
    return "*" + star(numberofstars-1);
};


const verevitriangleStars = function(linecounter){
    if (linecounter===0) {
        return "";
    }
    return verevitriangleStars(linecounter-1) + "\n" + space(x-linecounter) + star(2 * linecounter - 1);
};
const nerqevitraingleStars = function (linecounter) {
    if  (linecounter===0){
        return "";
    }
    return nerqevitraingleStars(linecounter-1) + "\n" + space(linecounter) + star(numberofrows - (2*(linecounter)));
};

const diamond = function (linecounter) {
    if(linecounter===0){
        return "";
    }
    return verevitriangleStars(x) + nerqevitraingleStars(linecounter - 1);
}


var numberofrows = 5;
if(numberofrows % 2 === 0){
    numberofrows = numberofrows+1;
}
var x = ((numberofrows/2)+0.5);

console.log(diamond(x));