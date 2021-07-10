var mainu = "", mainc = "";

function start() {

    function gameStart() {
        mainu = "";
        mainc = "";
        setTimeout(game, 300);
        $(".display").text("Level-" + mainc.length);
    }
    $("body").on("keypress", gameStart);
    $(".display").on("click",gameStart);
}

start();

$(".col-lg-6").click(function () {
    var x = $(this);
    x.addClass("pressed");
    setTimeout(function () {
        x.removeClass("pressed");
    }, 100);
    mainu += $(this).attr("id");
    if (mainu.length == mainc.length) {
        if (mainu == mainc) {
            mainu = "";
            $(".display").text("Level-" + mainc.length);
            setTimeout(game, 300);
        }
    }
    else if (mainu != mainc.slice(0, mainu.length)) {
        $(".display").text("Game Over,Press Any key to restart!");
        start;
    }
});


function game() {
    mainc += Math.floor(Math.random() * 4 + 1);
    var x = $(".button-" + mainc[mainc.length - 1]);
    x.addClass("pressed");
    setTimeout(function () {
        x.removeClass("pressed");
    }, 100)
}