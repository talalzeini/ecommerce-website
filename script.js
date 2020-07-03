
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
    document.getElementById("homeButton").classList.remove("hide")
}
function goToHome(){
    console.log("working")
    document.getElementById("single-product").classList.add("hide");
    document.getElementById("not-single-product").classList.remove("hide")
    document.getElementById("homeButton").classList.add("hide")
    
}




function iPhone11(){
    var iPhone11URL = document.getElementById("black").src;
    document.getElementById("mainProduct").src = iPhone11URL
    
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"

    document.getElementById("productName").innerText = "Iphone 11"

    document.getElementById("productCompany").innerText = " Apple"

    document.getElementById("productCode").innerText = "Product Code: IRS74786"
    document.getElementById("productPrice").innerText = "USD $699.00"
}
function yeezyBoost(){
    var yeezyBoost = document.getElementById("yeezyBoost").src;
    document.getElementById("mainProduct").src = yeezyBoost
    
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"

    document.getElementById("productName").innerText = "Adidas Yeezy Boost"

    document.getElementById("productCompany").innerText = " Adidas"

    document.getElementById("productCode").innerText = "Product Code: IRS36782"
    document.getElementById("productPrice").innerText = "USD $369.00"
}

function supremeSweatShirt(){
    var supremeSweatShirt = document.getElementById("supremeSweatShirt").src;
    document.getElementById("mainProduct").src = supremeSweatShirt
    
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"

    document.getElementById("productName").innerText = "Supreme Sweatshirt"

    document.getElementById("productCompany").innerText = " Supreme"

    document.getElementById("productCode").innerText = "Product Code: IRS52763"
    document.getElementById("productPrice").innerText = "USD $199.00"
}

function blackWatch(){
    var blackWatchURL = document.getElementById("blackWatch").src;
    document.getElementById("mainProduct").src = blackWatchURL
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText = "NEW"

    document.getElementById("productName").innerText = "Black Watch"

    document.getElementById("productCompany").innerText = " Curdden"

    document.getElementById("productCode").innerText = "Product Code: IRS23452"
    document.getElementById("productPrice").innerText = "USD $32.00"

}
function HollisterShirt(){
    var HollisterShirtURL = document.getElementById("HollisterShirt").src;
    document.getElementById("mainProduct").src = HollisterShirtURL
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText = "NEW"

    document.getElementById("productName").innerText = "Hollister Shirt"

    document.getElementById("productCompany").innerText = " Hollister"

    document.getElementById("productCode").innerText = "Product Code: IRS25627"
    document.getElementById("productPrice").innerText = "USD $23.00"
}
function YeezyGreen(){
    var YeezyGreenURL = document.getElementById("YeezyGreen").src;
    document.getElementById("mainProduct").src = YeezyGreenURL
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productName").innerText = "Adidas Yeezy Boost"

    document.getElementById("productCompany").innerText = " Adidas"

    document.getElementById("productCode").innerText = "Product Code: IRS36781"
    document.getElementById("productPrice").innerText = "USD $319.00"
}
function LeatherWatch(){
    var LeatherWatchURL = document.getElementById("LeatherWatch").src;
    document.getElementById("mainProduct").src = LeatherWatchURL
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("productName").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Curdden"
    document.getElementById("productName").innerText = "Leather Watch"
    document.getElementById("productCode").innerText = "Product Code: IRS23453"
    document.getElementById("productPrice").innerText = "USD $23.00"
    
}

   
function airPods(){
    var airPods = document.getElementById("airPods").src;
    document.getElementById("mainProduct").src = airPods
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Apple"
    document.getElementById("productName").innerText = "Airpods pro"
    document.getElementById("productCode").innerText = "Product Code: IRS74796"
    document.getElementById("productPrice").innerText = "USD $249.00"
}
function airForceSE(){
    var airForceSE = document.getElementById("airForceSE").src;
    document.getElementById("mainProduct").src = airForceSE
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Nike"
    document.getElementById("productName").innerText = "Nike Air Force SE"
    document.getElementById("productCode").innerText = "Product Code: IRS22344"
    document.getElementById("productPrice").innerText = "USD $157.00"
}
function AFShirt(){
    var AFShirt = document.getElementById("AFShirt").src;
    document.getElementById("mainProduct").src = AFShirt
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Abercrombie & Fitch"
    document.getElementById("productName").innerText = "A&F Shirt for Men"
    document.getElementById("productCode").innerText = "Product Code: IRS94399"
    document.getElementById("productPrice").innerText = "USD $66.00"
}
function googleHome(){
    var googleHome = document.getElementById("googleHome").src;
    document.getElementById("mainProduct").src = googleHome
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Google"
    document.getElementById("productName").innerText = "Google Home Speaker"
    document.getElementById("productCode").innerText = "Product Code: IRS77653"
    document.getElementById("productPrice").innerText = "USD $48.99"
}
function fifa20(){
    var fifa20 = document.getElementById("fifa20").src;
    document.getElementById("mainProduct").src = fifa20
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Sony"
    document.getElementById("productName").innerText = "FIFA 20"
    document.getElementById("productCode").innerText = "Product Code: IRS14679"
    document.getElementById("productPrice").innerText = "USD $59.99"
}
function got(){
    var got = document.getElementById("got").src;
    document.getElementById("mainProduct").src = got
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " New York Times"
    document.getElementById("productName").innerText = "Game of Thrones Books"
    document.getElementById("productCode").innerText = "Product Code: IRS24291"
    document.getElementById("productPrice").innerText = "USD $156.99"
}
function rachelGreen(){
    var rachelGreen = document.getElementById("rachelGreen").src;
    document.getElementById("mainProduct").src = rachelGreen
    document.getElementById("lastStar").classList.add("fa-star-o");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " Pop! Funko"
    document.getElementById("productName").innerText = "Pop! Rachel Green"
    document.getElementById("productCode").innerText = "Product Code: IRS39979"
    document.getElementById("productPrice").innerText = "USD $25.99"
}
function digital(){
    var digital = document.getElementById("digital").src;
    document.getElementById("mainProduct").src = digital
    document.getElementById("lastStar").classList.add("fa-star");

    document.getElementById("condition").innerText = "NEW"
    document.getElementById("productCompany").innerText = " SKMEI"
    document.getElementById("productName").innerText = "Digital Watch"
    document.getElementById("productCode").innerText = "Product Code: IRS13348"
    document.getElementById("productPrice").innerText = "USD $18.99"
}
function nikeBlue(){
    var nikeBlue = document.getElementById("nikeBlue").src;
    document.getElementById("mainProduct").src = nikeBlue
    document.getElementById("lastStar").classList.add("fa-star");
    document.getElementById("condition").innerText = "USED"
    document.getElementById("productCompany").innerText = " Nike"
    document.getElementById("productName").innerText = "Nike Air Force Blue"
    document.getElementById("productCode").innerText = "Product Code: IRS22346"
    document.getElementById("productPrice").innerText = "USD $119.99"
    document.getElementById("condition").style.backgroundColor = "red";
}
function ipad(){
    var ipad = document.getElementById("ipad").src;
    document.getElementById("mainProduct").src = ipad
    document.getElementById("lastStar").classList.add("fa-star");
    document.getElementById("condition").innerText = "USED"
    document.getElementById("productCompany").innerText = " Apple"
    document.getElementById("productName").innerText = "11-inch iPad Pro"
    document.getElementById("productCode").innerText = "Product Code: IRS74646"
    document.getElementById("productPrice").innerText = "USD $599.99"
    document.getElementById("condition").style.backgroundColor = "red";
}
function dany(){
    var dany = document.getElementById("dany").src;
    document.getElementById("mainProduct").src = dany
    document.getElementById("lastStar").classList.add("fa-star-o");
    document.getElementById("condition").innerText = "USED"
    document.getElementById("productCompany").innerText = " Pop! Funko"
    document.getElementById("productName").innerText = "Pop! Daenerys Targaryen"
    document.getElementById("productCode").innerText = "Product Code: IRS39983"
    document.getElementById("productPrice").innerText = "USD $18.99"
    document.getElementById("condition").style.backgroundColor = "red";
}
function xbox(){
    var xbox = document.getElementById("xbox").src;
    document.getElementById("mainProduct").src = xbox
    document.getElementById("lastStar").classList.add("fa-star");
    document.getElementById("condition").innerText = "USED"
    document.getElementById("productCompany").innerText = " Xbox"
    document.getElementById("productName").innerText = "Xbox Controller "
    document.getElementById("productCode").innerText = "Product Code: IRS41153"
    document.getElementById("condition").style.backgroundColor = "red";
    document.getElementById("productPrice").innerText = "USD $28.00"
}
function fortnite(){
    var fortnite = document.getElementById("fortnite").src;
    document.getElementById("mainProduct").src = fortnite
    document.getElementById("lastStar").classList.add("fa-star");
    document.getElementById("condition").innerText = "USED"
    document.getElementById("productCompany").innerText = " Sony"
    document.getElementById("productName").innerText = "PS4 Fortnite "
    document.getElementById("productCode").innerText = "Product Code: IRS34788"
    document.getElementById("condition").style.backgroundColor = "red";
    document.getElementById("productPrice").innerText = "USD $59.99"
}
function boss(){
    var boss = document.getElementById("boss").src;
    document.getElementById("mainProduct").src = boss
    document.getElementById("lastStar").classList.add("fa-star-o");
    document.getElementById("condition").innerText = "USED"
    document.getElementById("productCompany").innerText = " Hugo Boss"
    document.getElementById("productName").innerText = "Hugo Boss Leather Watch "
    document.getElementById("productCode").innerText = "Product Code: IRS56123"
    document.getElementById("condition").style.backgroundColor = "red";
    document.getElementById("productPrice").innerText = "USD $88.99"
}



