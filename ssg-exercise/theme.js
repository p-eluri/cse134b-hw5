
(function () {
    const storageKey = "portfolio-theme";
    const root = document.documentElement;

    // Try restoring the previously selected theme.
    let savedTheme = "light";

    try {
        const preference = localStorage.getItem(storageKey);

        if (preference === "light" || preference === "dark") {
            savedTheme = preference;
        }
    } catch (error) {
        console.warn("Theme preference could not be loaded.");
    }

    root.dataset.theme = savedTheme;

    function createThemeControl() {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle";

        function updateButton() {
            const isDark = root.dataset.theme === "dark";
            button.textContent = isDark
                ? "Switch to Light Mode"
                : "Switch to Dark Mode";
        }

        button.addEventListener("click", function () {
            const nextTheme =
                root.dataset.theme === "dark" ? "light" : "dark";

            // Apply the theme even if storage is unavailable.
            root.dataset.theme = nextTheme;

            try {
                localStorage.setItem(storageKey, nextTheme);
            } catch (error) {
                console.warn("Theme preference could not be saved.");
            }

            updateButton();
        });

        updateButton();

        const nav = document.querySelector("nav");

        if (nav) {
            nav.insertAdjacentElement("afterend", button);
        } else {
            document.body.prepend(button);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createThemeControl);
    } else {
        createThemeControl();
    }
})();
