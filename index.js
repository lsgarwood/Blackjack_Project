
const saveElement = document.getElementById("#draw-button");
const resetElement = document.querySelector("#reset-button");
const foldElement = document.querySelector("#fold-button");
const startElement = document.querySelector("#start-button");
const gameDisplayElement = document.querySelector("#game-display");
// let displayStart = document.getElementById("start-display")
//let displayGame = document.getElementById("game-display")

let array = [];

let displayElement = document.getElementById("everything");
let dataElement = document.getElementById("data");

console.log("hello world");

function hide() {
    displayElement.style.display = "none";
}

function display(){
    displayElement.style.display = "block";
}


function render() {

    let value = Math.floor((Math.random() * 13) + 1);
    console.log(value);

    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    newCell.innerHTML = value;
    newRow.append(newCell);
    document.getElementById("rows").appendChild(newRow);

    array.push(value);
}

function sum() {
    let sum = 0;

    for (let n = 0; n < array.length; n++) 
    sum+= array[n];
    console.log(sum);
    dataElement.innerHTML = sum;
}

function refresh(){
    window.location.reload();
}

function fold() {

}




/*blackjack logic
when you click the draw button it displays the card/number you drawed
A second function that adds up all the numbers from the first function and prints out bust below 21

funciton draw() {
    let value = Math.floor((Math.random() * 21) + 1);
    console.log(value);
    return value;

}


*/