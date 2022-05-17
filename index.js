
const saveElement = document.getElementById("draw-button");
let header = document.querySelector("h1");

function render() {
   let value = Math.floor((Math.random() * 13) + 1);
   console.log(value);
   header.innerText = value;
   
   

    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    newCell.innerHTML = value;
    newRow.append(newCell);
    document.getElementById("rows").appendChild(newRow);
}


console.log(inputElement);

/*blackjack logic
when you click the draw button it displays the card/number you drawed
A second function that adds up all the numbers from the first function and prints out bust below 21

funciton draw() {
    let value = Math.floor((Math.random() * 21) + 1);
    console.log(value);
    return value;

}


*/