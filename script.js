const container = document.querySelector("#container");
let btn = document.querySelector("button");

container.style.display = "flex";
container.style.flexFlow = "row wrap";
container.style.justifyContent = "space evenly"
container.style.margin = "0 auto";

window.onload = () => createGrid(16);
function createGrid(n) {
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            let div = document.createElement("div");
            div.classList.add("grid");
            div.style.backgroundColor = "lightgrey";
            div.style.width = `${960/n}px`;
            div.style.height = `${960/n}px`;
            div.style.borderStyle = "dashed";
            div.style.borderSizing = "border-box";

            container.appendChild(div);
        }
    }
};


container.addEventListener('mouseover', mouseHover);
function mouseHover (e) {
    e.target.style.background = "blue";
}

btn.addEventListener('click', function newGrid(e) {
    let gridSquares = prompt("Enter a number up to 100");
    if(gridSquares>=1 && gridSquares<=100) {
        reset(container);
        createGrid(gridSquares);
    } else {
        alert("Choose a number between 1-100");
    }
})

function reset(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}