export function get(selector) {
    return document.querySelector(selector);
}

export function getRandomColor() {
    const colors = ["red", "green", "yellow", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

export function getRandomShape() {
    const shapes = ["square", "circle", "diamond"];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    return randomShape;
}
