const canvas = document.querySelector("#canvas")
let isRainbow = false;

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
    const getColorPicker = document.querySelector("#color");
    
    

    getColor("black");

    getColorBlack.addEventListener("click", () => {
        getColor("black");
        isRainbow = false;
    })
    
    getColorWhite.addEventListener("click", () => {
        getColor("white");
        isRainbow = false;
    })

    getColorRainbow.addEventListener("click", () => {
        isRainbow = true;
        getColor(getRandomColor());
    })

    getColorPicker.oninput = function() {
        const value = this.value;
        getColor(value.toString());
        isRainbow = false;
    }
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
        let opacity = 0.1;
        square.addEventListener("pointerover", event => {
            if (event.buttons === 1) {
                square.style.opacity = opacity;
                opacity += 0.1;

                if (isRainbow === true) {
                    square.style.backgroundColor = getRandomColor();
                } else {
                    square.style.backgroundColor = color;
                }
            }
        })
    })

    squareCells.forEach(square => {
        let opacity = 0.1;
        square.addEventListener("click", () => {
            square.style.opacity = opacity;
            opacity += 0.1;
            
            if (isRainbow === true) {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = color;
            }
        })
    })
}

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

