const container = document.querySelector("#container");
const button = document.querySelector(".btn");


// creates 16 * 16 grid to start
for (let i = 1; i <= 256; i++) {
    const grid = document.createElement("div");

    grid.classList.add("grid");
    grid.style.cssText = "height: 50px; width: 50px;"
    grid.id = "" + i;

    container.appendChild(grid);
}

const squares = document.querySelectorAll(".grid");

squares.forEach((square) => {

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "orange";
    });

    square.addEventListener("mouseleave", () => {
        setTimeout(() => {
            square.style.backgroundColor = "";
        }, 1000);
    });

});

let gridArray = Array.from(squares);

let changeSize = (size) => {

    // resizes individual grids based on original size
    let newHeight = 16 / size * 50 + ""

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    for (let i = 1; i <= (size * size); i++) {
        const grid = document.createElement("div");

        grid.classList.add("grid");
        grid.id = "" + i;
        grid.style.cssText = `height: ${newHeight}px; width: ${newHeight}px;`

        container.appendChild(grid);
    }

    const squares = document.querySelectorAll(".grid");

    squares.forEach((square) => {

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "orange";
    });

    square.addEventListener("mouseleave", () => {
        setTimeout(() => {
            square.style.backgroundColor = "";
        }, 1000);
    });

});
}

button.addEventListener("click", () => {
    changeSize(Number(prompt("Enter new size: ")));
})
