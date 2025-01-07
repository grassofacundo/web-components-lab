class MagicSquare extends HTMLElement {
    static observedAttributes = ["color", "shape"];

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("connectedCallback(): Custom element added to page.");

        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        //Create square body
        const body = document.createElement("div");
        const color = this.getAttribute("color");
        this.style.setProperty("--color", color);

        const shape = this.getAttribute("shape");
        body.setAttribute("class", shape);

        // Apply external styles to the shadow dom
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "components/magic-square.css");

        // Attach the created elements to the shadow dom
        shadow.appendChild(linkElem);
        shadow.appendChild(body);
    }

    disconnectedCallback() {
        console.log(
            "disconnectedCallback(): Custom element removed from page."
        );
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
        );
    }
}

customElements.define("magic-square", MagicSquare);
