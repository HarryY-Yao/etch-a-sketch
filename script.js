const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const grid = document.createElement("div");
    console.log("item added")
    container.appendChild(grid);
}