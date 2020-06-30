

setTimeout(function() { blackToGreen(); }, 3000);
function openmenu(){
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
}
function closemenu(){
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
}
function blackToGreen(){
    document.getElementById("black").classList.add("hide");
    document.getElementById("green").classList.remove("hide");
    setTimeout(function() { greenToYellow(); }, 3000);
}
function greenToYellow(){
    document.getElementById("green").classList.add("hide");
    document.getElementById("yellow").classList.remove("hide");
    setTimeout(function() { yellowToPurple(); }, 3000);
}
function yellowToPurple(){
    document.getElementById("yellow").classList.add("hide");
    document.getElementById("purple").classList.remove("hide");
    setTimeout(function() { purpleToRed(); }, 3000);
}
function purpleToRed(){
    document.getElementById("purple").classList.add("hide");
    document.getElementById("red").classList.remove("hide");
    setTimeout(function() { redToWhite(); }, 3000);
}
function redToWhite(){
    document.getElementById("red").classList.add("hide");
    document.getElementById("white").classList.remove("hide");
    setTimeout(function() { whiteToBlack(); }, 3000);
}
function whiteToBlack(){
    document.getElementById("white").classList.add("hide");
    document.getElementById("black").classList.remove("hide");
    setTimeout(function() { blackToGreen(); }, 3000);
}






