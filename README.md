
# CSE 134B Homework 5

## Project Information

**GitHub Repository:**  
https://github.com/p-eluri/cse134b-hw5

**Deployed Website:**  
To be added after HW5 deployment.

**Web Component Page:**  
index.html

## Overview

Homework 5 builds on my previous personal portfolio.

This assignment adds a custom Web Component, live API
integration, theme customization, localStorage preference
persistence, and a separate static site generator exercise.

## Parts 1 and 2: Cat Facts Web Component

The Cat Facts Web Component is located on the portfolio
Home page.

Files:
- index.html
- cat-facts.js
- styles.css

The component uses a custom HTML element:

`<cat-facts></cat-facts>`

A visitor can request interesting facts about cats without
reloading the webpage.

### Design Note

The visitor wants to discover interesting cat facts.

When the visitor clicks "Next Fact":

1. The button triggers a JavaScript event listener.
2. The component calls its asynchronous loadFact() method.
3. The status changes to "Loading cat fact..."
4. JavaScript sends an HTTP GET request using fetch() to:
   https://catfact.ninja/fact
5. The response is checked for a successful HTTP status.
6. The JSON response is parsed and the fact field is validated.
7. The paragraph is updated using textContent.
8. The status changes to "Cat fact loaded successfully."

If the request fails, the component displays:

"Could not load a cat fact. Please try again."

The previous fact remains visible, and the visitor can retry
without refreshing the webpage.

The component also has a compact/expanded display mode,
controlled by a button outside the custom element.

## Part 3: Themes and localStorage

The Cat Facts component uses CSS custom properties to match
the portfolio's light and dark themes.

The visitor can select compact or expanded mode using the
Show Details / Hide Details button.

The preference is stored using localStorage with the key:

`hw5-cat-compact`

When the page reloads, the saved preference is restored.

Storage reads and writes use try/catch blocks so that the
component remains functional when storage is unavailable.

The portfolio also provides a noscript fallback message
and maintains usable main content and navigation without
JavaScript.

## Part 4: Static Site Generator

The static site generator exercise is located in:

`ssg-exercise/`

It uses Eleventy (11ty).

### Generated Pages

- Home: `ssg-exercise/index.njk`
- About Me: `ssg-exercise/about.njk`

Both pages retain their respective portfolio content and
use the shared footer:

`ssg-exercise/_includes/footer.njk`

Editing the footer in one place updates both pages after
rebuilding.

### Installation

From the repository root:

    cd ssg-exercise
    npm install

### Build

    npx eleventy

### Preview

    npx eleventy --serve

Preview URLs:

- Home: http://localhost:8080/
- About Me: http://localhost:8080/about/

Additional instructions are available in:

`ssg-exercise/README.md`

## Previous Homework Features

The portfolio also retains the contact forms developed
in Homework 4:

- form-no-js.html
- form-with-js.html

The original Homework 4 deployment remains available at:

https://cse134b-hw4-peluri.netlify.app/

## Testing

The following behaviors were tested:

- Web Component registration and DOM manipulation
- Internal button interaction
- Compact-mode attribute changes
- Keyboard accessibility
- Live API requests
- Loading, success, and error feedback
- Recovery from offline API failures without reloading
- Light and dark themes
- localStorage preference persistence
- Simulated storage read and write failures
- JavaScript-disabled fallback
- Eleventy page generation
- Shared footer updates across both generated pages
