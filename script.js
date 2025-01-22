const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const grid = document.createElement("div");

    grid.classList.add("grid");
    grid.id = "" + i;

    container.appendChild(grid);
}