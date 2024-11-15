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
    
    const getColorWhite = document.querySelector("#white");
    const getColorBlack = document.querySelector("#black");
    const getColorRainbow = document.querySelector("#rainbow");
    
    getColor("black");

    getColorBlack.addEventListener("click", () => {
        getColor("black");
        
    })
    
    getColorWhite.addEventListener("click", () => {
        getColor("white");

    })

    getColorRainbow.addEventListener("click", () => {
        getColor(getRandomColor());
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
    let opacity = 0.1;

    

    squareCells.forEach(square => {
        square.addEventListener("pointerover", event => {
            if (event.buttons === 1) {
                square.style.opacity = opacity;
                opacity += 0.1;

                if (color === "black" || color === "white") {
                    square.style.backgroundColor = color;
                } else {
                    square.style.backgroundColor = getRandomColor();
                }
            }
        })
    })

    squareCells.forEach(square => {
        square.addEventListener("click", () => {
            square.style.opacity = opacity;
            opacity += 0.1;

            if (color === "black" || color === "white") {
                square.style.backgroundColor = color;
            } else {
                square.style.backgroundColor = getRandomColor();
            }
        })
    })
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

