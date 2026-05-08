const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexFlow = "row wrap";
container.style.margin = "0 auto";


let btn = document.createElement("button");
document.body.appendChild(btn);

function createGrid(n) {
    for (let row=0; row<n; row++) {
        for (let column=0; column<n; column++) {
            let div = document.createElement("div");
            div.classList.add("grid");
            div.style.backgroundColor = "pink";
            div.style.width = `${960/n}px`;
            div.style.height = `${960/n}px`;
            div.style.borderStyle = "dashed";
            div.style.borderColor = "maroon"

            container.appendChild(div);
        }
    }
};

createGrid(16);
