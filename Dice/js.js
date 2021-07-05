
function myFunction(){
    var dice = "images/dice-" + Math.floor(Math.random()*6+1) + ".png";
    document.querySelector("#dice-change").setAttribute("src",dice);
};

