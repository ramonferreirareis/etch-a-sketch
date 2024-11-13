const canvas = document.querySelector("#canvas")



function createGrid(number) {
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
    const squareCells = document.querySelectorAll(".square");

    squareCells.forEach(square => {
        square.addEventListener("mouseover", evt => {
            if (evt.buttons === 1) {
                square.classList.add("color");
            }
        })
    })
}
createGrid(16);
