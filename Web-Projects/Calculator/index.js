// 1 - 9 == 1 - 9
// 10 = .
// 11 = +/-
// 12 = equal
// 13 = +
// 14 = -
// 15 = *
// 16 = /
// 17 = )
// 18 = (
// 19 = clear




//Button Click Sound


var audio = new Audio("Audio/beep1.m4a");


for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var x = this;
        this.classList.add("pressed");
        setTimeout(function() {
            x.classList.remove("pressed");
        },100);
        if (document.querySelector(".mute").getAttribute("src") != "images/mute.png") {
            audio = new Audio("Audio/beep1.m4a");
            audio.play();
        }
    });
}

document.querySelector(".mute").addEventListener("click", mute_unmute);


function mute_unmute() {
    if (document.querySelector(".mute").getAttribute("src") == "images/mute.png") {
        document.querySelector(".mute").setAttribute("src", "images/volume.png");
        audio = new Audio("Audio/beep1.m4a");
        audio.play();
    }
    else {
        document.querySelector(".mute").setAttribute("src", "images/mute.png");
        audio = new Audio("");
    }
}


const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

var main = "";
document.querySelector(".display").innerText = main;

document.addEventListener("keypress",function (event) {
    if (document.querySelector(".mute").getAttribute("src") != "images/mute.png") {
        audio = new Audio("Audio/beep1.m4a");
        audio.play();
    }
    var x;
    if(["Backspace",'(',')','.','+','-','*','/','c','='].includes(event.key))
    {
        x = ".element-";
        switch(event.key)
        {
        case "Backspace":
        {
            x += "19";
            break;
        }
        case "c":
        {
            x += "19";
            break;
        }
        case "(":
            x += "18";
            break;
        case ")":
            x += "17";
            break;
        case "/":
            x += "16";
            break;
        case "*":
            x += "15";
            break;
        case "-":
            x += "14";
            break;
        case "+":
            x += "13";
            break;
        case "=":
            x += "12";
            break;
        case ".":
            x += "10";
            break;
        }
        x = document.querySelector(x);
    }
    else {
        x = document.querySelector(".element-"+event.key);
    }
    x.classList.add("pressed");
    setTimeout(function() {
        x.classList.remove("pressed");
    },100);

    if((event.key>=0 && event.key <=9) || (['+','-','*','/','(',')','.'].includes(event.key)))
    {
        main += event.key;
        document.querySelector(".display").innerText = main;
    }
    else if(event.key == '=')
    {
        element_12();
    }
    else if(event.key == "Backspace")
    {
        element_19();
    }
    else if(event.key == 'c')
    {
        allClear();
    }

});

for (var i = 0; i < 20; i++) {
        callButton(i);
    }

function callButton(i) {
    var elementSelector = ".element-" + i;
        if (i == 11 || i == 19 || i == 12) {
            var funCall = "element_" + i;
            document.querySelector(elementSelector).addEventListener("click", window[funCall]);
        }
        else {
            document.querySelector(elementSelector).addEventListener("click", function () {
                if (this.innerText == '+' || this.innerText == '-' || this.innerText == '*' || this.innerText == '/') {
                    if (main[main.length - 1] != "+" && main[main.length - 1] != "-" && main[main.length - 1] != "*" && main[main.length - 1] != "/") {
                        main += this.innerText;
                    }
                    else {
                        main = main.slice(0, main.length - 1);
                        main += this.innerText;
                    }
                }
                else {
                    main += this.innerText;
                }
                document.querySelector(".display").innerText = main;
            });
        }
}

function element_11() {
    if (main[0] != "-") {
        main = "-" + main;
    }
    else {
        main = main.slice(1, main.length);
    }
    document.querySelector(".display").innerText = main;
}
function element_19() {
    main = main.slice(0, main.length - 1);
    document.querySelector(".display").innerText = main;
}
function element_12() {
    main = eval(main);
    main += "";
    document.querySelector(".display").innerText = main;
}

function allClear() {
    main = "";
    document.querySelector(".display").innerText = main;
}


document.querySelector(".element-19").addEventListener("dblclick", allClear);






