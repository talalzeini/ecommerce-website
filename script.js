

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
