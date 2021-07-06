
var main = "";
document.querySelector(".display").innerText = main;
// for(var i = 0;i<10;i++){
//     var x = ".element-"+i;
//     document.querySelector(x).addEventListener("click",function () {
//         main += document.querySelector(x).innerText;
//         document.querySelector(".display").innerText = main;
//     });
// }

document.querySelector(".element-1").addEventListener("click",function () {
    main += document.querySelector(".element-1").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-2").addEventListener("click",function () {
    main += document.querySelector(".element-2").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-3").addEventListener("click",function () {
    main += document.querySelector(".element-3").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-4").addEventListener("click",function () {
    main += document.querySelector(".element-4").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-5").addEventListener("click",function () {
    main += document.querySelector(".element-5").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-6").addEventListener("click",function () {
    main += document.querySelector(".element-6").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-7").addEventListener("click",function () {
    main += document.querySelector(".element-7").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-8").addEventListener("click",function () {
    main += document.querySelector(".element-8").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-9").addEventListener("click",function () {
    main += document.querySelector(".element-9").innerText;
    document.querySelector(".display").innerText = main;
});
document.querySelector(".element-0").addEventListener("click",function () {
    main += document.querySelector(".element-0").innerText;
    document.querySelector(".display").innerText = main;
});







document.querySelector(".element-plus").addEventListener("click",function () {
    if(main[main.length-1] != "+" && main[main.length-1] != "-" && main[main.length-1] != "*" && main[main.length-1] != "/")
    main += "+";
    else{
        main = main.slice(0,main.length-1);
        main += "+";
    }
    document.querySelector(".display").innerText = main;
});


document.querySelector(".element-minus").addEventListener("click",function () {
    if(main[main.length-1] != "+" && main[main.length-1] != "-" && main[main.length-1] != "*" && main[main.length-1] != "/")
    main += "-";
    else{
        main = main.slice(0,main.length-1);
        main += "-";
    }
    document.querySelector(".display").innerText = main;
});


document.querySelector(".element-multiply").addEventListener("click",function () {
    if(main[main.length-1] != "+" && main[main.length-1] != "-" && main[main.length-1] != "*" && main[main.length-1] != "/")
    main += "*";
    else{
        main = main.slice(0,main.length-1);
        main += "*";
    }
    document.querySelector(".display").innerText = main;
});


document.querySelector(".element-divide").addEventListener("click",function () {
    if(main[main.length-1] != "+" && main[main.length-1] != "-" && main[main.length-1] != "*" && main[main.length-1] != "/")
    main += "/";
    else{
        main = main.slice(0,main.length-1);
        main += "/";
    }
    document.querySelector(".display").innerText = main;
});





document.querySelector(".element-plus-minus").addEventListener("click",function () {
    if(main[0] != "-")
    {
        main = "-" + main;
    }
    else{
        main = main.slice(1,main.length);
    }
    document.querySelector(".display").innerText = main;
});


document.querySelector(".element-open").addEventListener("click",function () {
    main += document.querySelector(".element-open").innerText;
    document.querySelector(".display").innerText = main;
});



document.querySelector(".element-close").addEventListener("click",function () {
    main += document.querySelector(".element-close").innerText;
    document.querySelector(".display").innerText = main;
});


document.querySelector(".element-clear").addEventListener("click",function () {
    main = main.slice(0,main.length-1);
    document.querySelector(".display").innerText = main;
});

document.querySelector(".element-clear").addEventListener("dblclick",function () {
    main = "";
    document.querySelector(".display").innerText = main;
});


document.querySelector(".element-dot").addEventListener("click",function () {
    main += document.querySelector(".element-dot").innerText;
    document.querySelector(".display").innerText = main;
});

document.querySelector(".element-equal").addEventListener("click",equal);


function equal() {
    main = eval(main);
    main += "";
    document.querySelector(".display").innerText = main;
}