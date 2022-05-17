
const saveElement = document.getElementById("draw-button");
const resetElement = document.querySelector("#reset-button");
const foldElement = document.querySelector("#fold-button");
const startElement = document.querySelector("#start-button");

let displayGame = document.getElementById("display")
let dataElement = document.getElementById("data");
let array = [];

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

function startGame() {

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