var newGamebtn = document.querySelector("#newGame");
var cells = document.querySelectorAll(".cell");
var table = document.querySelector(".table");


newGamebtn.addEventListener("click", function () {
    newGame()
});

function newGame() {
    table.classList.toggle("puffIn");
    for(var i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "black";
        cells[i].style.border = "2px solid #ececec";
    }
}
