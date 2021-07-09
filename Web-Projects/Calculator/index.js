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

// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();

var main = "";
document.querySelector(".display").innerText = main;

document.addEventListener("keypress",function (event) {
    audio = new Audio("Audio/beep.m4a");
    audio.play();

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


document.querySelector(".element-19").addEventListener("dblclick", function () {
    main = "";
    document.querySelector(".display").innerText = main;
});






//Button Click Sound


var audio = new Audio("Audio/beep.m4a");


for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        if (document.querySelector(".mute").getAttribute("src") != "images/mute.png") {
            audio = new Audio("Audio/beep.m4a");
            audio.play();
        }
    });
}

document.querySelector(".mute").addEventListener("click", mute_unmute);


function mute_unmute() {
    if (document.querySelector(".mute").getAttribute("src") == "images/mute.png") {
        document.querySelector(".mute").setAttribute("src", "images/volume.png");
        audio = new Audio("Audio/beep.m4a");
        audio.play();
    }
    else {
        document.querySelector(".mute").setAttribute("src", "images/mute.png");
        audio = new Audio("");
    }
}