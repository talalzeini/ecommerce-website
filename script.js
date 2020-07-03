
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
function goToProduct(){
    document.getElementById("single-product").classList.remove("hide");
    document.getElementById("not-single-product").classList.add("hide")

}




function iPhone11(){
    var iPhone11URL = document.getElementById("black").src;
    document.getElementById("mainProduct").src = iPhone11URL
    
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText += "NEW"

    document.getElementById("productName").innerText += "Iphone 11"

    document.getElementById("productCompany").innerText += " Apple"

    document.getElementById("productCode").innerText += "Product Code: IRS74786"
    document.getElementById("productPrice").innerText += "USD $699.00"
}
function yeezyBoost(){
    var yeezyBoost = document.getElementById("yeezyBoost").src;
    document.getElementById("mainProduct").src = yeezyBoost
    
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText += "NEW"

    document.getElementById("productName").innerText += "Adidas Yeezy Boost"

    document.getElementById("productCompany").innerText += " Adidas"

    document.getElementById("productCode").innerText += "Product Code: IRS36782"
    document.getElementById("productPrice").innerText += "USD $369.00"
}

function supremeSweatShirt(){
    var supremeSweatShirt = document.getElementById("supremeSweatShirt").src;
    document.getElementById("mainProduct").src = supremeSweatShirt
    
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText += "NEW"

    document.getElementById("productName").innerText += "Supreme Sweatshirt"

    document.getElementById("productCompany").innerText += " Supreme"

    document.getElementById("productCode").innerText += "Product Code: IRS52763"
    document.getElementById("productPrice").innerText += "USD $199.00"
}

function blackWatch(){
    var blackWatchURL = document.getElementById("blackWatch").src;
    document.getElementById("mainProduct").src = blackWatchURL
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText += "NEW"

    document.getElementById("productName").innerText += "Black Watch"

    document.getElementById("productCompany").innerText += " Curdden"

    document.getElementById("productCode").innerText += "Product Code: IRS23452"
    document.getElementById("productPrice").innerText += "USD $32.00"

}
function HollisterShirt(){
    var HollisterShirtURL = document.getElementById("HollisterShirt").src;
    document.getElementById("mainProduct").src = HollisterShirtURL
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText += "NEW"

    document.getElementById("productName").innerText += "Hollister Shirt"

    document.getElementById("productCompany").innerText += " Hollister"

    document.getElementById("productCode").innerText += "Product Code: IRS25627"
    document.getElementById("productPrice").innerText += "USD $23.00"
}
function YeezyGreen(){
    var YeezyGreenURL = document.getElementById("YeezyGreen").src;
    document.getElementById("mainProduct").src = YeezyGreenURL
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText += "NEW"
    document.getElementById("productName").innerText += "Adidas Yeezy Boost"

    document.getElementById("productCompany").innerText += " Adidas"

    document.getElementById("productCode").innerText += "Product Code: IRS36781"
    document.getElementById("productPrice").innerText += "USD $319.00"
}
function LeatherWatch(){
    var LeatherWatchURL = document.getElementById("LeatherWatch").src;
    document.getElementById("mainProduct").src = LeatherWatchURL
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText += "NEW"
    document.getElementById("productCompany").innerText += " Curdden"
    document.getElementById("productName").innerText += "Leather Watch"
    document.getElementById("productCode").innerText += "Product Code: IRS23453"
    document.getElementById("productPrice").innerText += "USD $23.00"
    
}





