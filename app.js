//buttons
var row1 = document.getElementById("row-1");
var row2 = document.getElementById("row-2");
var row3 = document.getElementById("row-3");
var row4 = document.getElementById("row-4");
var row5 = document.getElementById("row-5");

var questions = document.getElementById("q1");
//Event listeners
row1.addEventListener("click", dd1);
row2.addEventListener("click", dd2);
row3.addEventListener("click", dd3);
row4.addEventListener("click", dd4);
row5.addEventListener("click", dd5);


//Hover function 
function mouseEnter() {
    document.getElementById("q1").style.color = "orange";
}
function mouseLeave() {
    document.getElementById("q1").style.color = "black";
}

//dropdown Function
function dd1() {
    var x = document.getElementById("dropdown-1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }   x.style.transtion = "opacity 2s linear";
    var y = document.getElementById("row-1");
    if (y.style.fontWeight === "bold") {
        y.style.fontWeight = "normal";
    } else {
        y.style.fontWeight = "bold";
    }
    var z = document.getElementById("button-1");
    if (z.style.transform === "rotate(180deg)") {
        z.style.transform = "rotate(0deg)";
    } else {
        z.style.transform = "rotate(180deg)";
    }   z.style.transition = "0.5s ease";
}

function dd2() {
    var x = document.getElementById("dropdown-2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("row-2");
    if (y.style.fontWeight === "bold") {
        y.style.fontWeight = "normal";
    } else {
        y.style.fontWeight = "bold";
    }
    var z = document.getElementById("button-2");
    if (z.style.transform === "rotate(180deg)") {
        z.style.transform = "rotate(0deg)";
    } else {
        z.style.transform = "rotate(180deg)";
    }   z.style.transition = "0.5s ease";
}
function dd3() {
    var x = document.getElementById("dropdown-3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("row-3");
    if (y.style.fontWeight === "bold") {
        y.style.fontWeight = "normal";
    } else {
        y.style.fontWeight = "bold";
    }
    var z = document.getElementById("button-3");
    if (z.style.transform === "rotate(180deg)") {
        z.style.transform = "rotate(0deg)";
    } else {
        z.style.transform = "rotate(180deg)";
    }   z.style.transition = "0.5s ease";
}
function dd4() {
    var x = document.getElementById("dropdown-4");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("row-4");
    if (y.style.fontWeight === "bold") {
        y.style.fontWeight = "normal";
    } else {
        y.style.fontWeight = "bold";
    }
    var z = document.getElementById("button-4");
    if (z.style.transform === "rotate(180deg)") {
        z.style.transform = "rotate(0deg)";
    } else {
        z.style.transform = "rotate(180deg)";
    }   z.style.transition = "0.5s ease";
}
function dd5() {
    var x = document.getElementById("dropdown-5");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("row-5");
    if (y.style.fontWeight === "bold") {
        y.style.fontWeight = "normal";
    } else {
        y.style.fontWeight = "bold";
    }
    var z = document.getElementById("button-5");
    if (z.style.transform === "rotate(180deg)") {
        z.style.transform = "rotate(0deg)";
    } else {
        z.style.transform = "rotate(180deg)";
    }   z.style.transition = "0.5s ease";
}
