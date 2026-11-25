
class CatFacts extends HTMLElement {
    static get observedAttributes() {
        return ["compact"];
    }

    connectedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        const heading = document.createElement("h3");
        heading.textContent = "Cat Fact Viewer";

        this.paragraph = document.createElement("p");
        this.paragraph.textContent = "Click Next Fact to load a cat fact.";

        this.details = document.createElement("p");
        this.details.textContent = "Explore interesting facts about cats.";

        this.status = document.createElement("p");
        this.status.setAttribute("role", "status");
        this.status.textContent = "Ready to load a fact.";

        this.button = document.createElement("button");
        this.button.type = "button";
        this.button.textContent = "Next Fact";

        this.button.addEventListener("click", () => {
            this.loadFact();
        });

        this.append(
            heading,
            this.paragraph,
            this.details,
            this.status,
            this.button
        );

        this.updateMode();
    }

    async loadFact() {
        this.button.disabled = true;
        this.status.textContent = "Loading cat fact...";

        try {
            const response = await fetch("https://catfact.ninja/fact");

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            if (typeof data?.fact !== "string" ||
                data.fact.trim() === "") {
                throw new Error("Invalid cat fact data.");
            }

            this.paragraph.textContent = data.fact;
            this.status.textContent = "Cat fact loaded successfully.";
        } catch (error) {
            console.error("Could not load cat fact:", error);
            this.status.textContent =
                "Could not load a cat fact. Please try again.";
        } finally {
            this.button.disabled = false;
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "compact" && oldValue !== newValue) {
            this.updateMode();
        }
    }

    updateMode() {
        if (!this.details) return;
        this.details.hidden = this.hasAttribute("compact");
    }
}

customElements.define("cat-facts", CatFacts);
