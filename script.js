const canvas = document.querySelector("#canvas")

function createSquare(number) {
    for (i = 0; i < number; i++) {
        const squares = document.createElement("div");
        squares.classList.add("square");
        canvas.appendChild(squares);
    }
}

