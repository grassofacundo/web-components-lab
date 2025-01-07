import { get, getRandomColor, getRandomShape } from "./utils.js";

get("#add-square").onclick = () => {
    const newSquare = document.createElement("magic-square");
    const color = getRandomColor();
    newSquare.setAttribute("color", color);

    const shape = getRandomShape();
    newSquare.setAttribute("shape", shape);

    const main = get("main");
    main.appendChild(newSquare);
};

get("#remove-square").onclick = () => {
    const main = get("main");
    if (main.children.length <= 0) return;

    const lastChildIndex = main.children.length - 1;
    const lastChild = main.children[lastChildIndex];
    main.removeChild(lastChild);
};
