const canvas = document.querySelector("#canvas")

function createGrid(number) {
    canvas.textContent = "";
    for (let i = 0; i < number; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        canvas.appendChild(divRow);
        for (let i = 0; i < number; i++) {
            const square = document.createElement("div");
            square.classList.add("square");

            divRow.appendChild(square);
            
        }
    }  
    // getColor("black");
  
    const getColorWhite = document.querySelector("#white");
    const getColorBlack = document.querySelector("#black");
    const getColorBlue = document.querySelector("#blue");

    getColorBlue.addEventListener("click", () => {
        getColor("blue");

    })

    getColorBlack.addEventListener("click", () => {
        getColor("black");

    })
    
    getColorWhite.addEventListener("click", () => {
        getColor("white");

    })



}

const slider = document.querySelector("#myRange");
const output = document.querySelector("#value");

output.textContent = slider.value;

slider.oninput = function() {
    const value = this.value;
    output.textContent = value;
    createGrid(value);
}

createGrid(4);

function getColor(color) {
    const squareCells = document.querySelectorAll(".square");
    squareCells.forEach(square => {
        square.addEventListener("pointerover", event => {
            if (event.buttons === 1) {
                square.style.backgroundColor = color;
            }
        })
    })

    squareCells.forEach(square => {
        square.addEventListener("click", () => {
            square.style.backgroundColor = color;
        })
    })
}

