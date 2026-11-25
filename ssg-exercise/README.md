
# HW5 - Static Site Generator Exercise

## Overview

This exercise uses Eleventy (11ty) to generate two pages
from my existing personal portfolio.

The main HW5 portfolio remains separate from this exercise.

## Pages

- Home: `index.njk`
- About Me: `about.njk`

Both pages preserve the main content of my original portfolio pages.

## Shared Footer

The shared footer is located at `_includes/footer.njk`.

Both templates use the same footer:

`{% include "footer.njk" %}`

Changing this file updates both generated pages after rebuilding.

## Installation

From the HW5 repository:

    cd ssg-exercise
    npm install

## Build

Generate the static HTML pages:

    npx eleventy

The generated files are placed in `_site/`.

## Preview

Start the development server:

    npx eleventy --serve

Open these URLs:

- Home: http://localhost:8080/
- About Me: http://localhost:8080/about/

## Verification

1. Build the two pages.
2. Confirm each page displays its own content.
3. Confirm both pages display the shared footer.
4. Modify `_includes/footer.njk`.
5. Rebuild and confirm both pages reflect the change.

## Assets

The `eleventy.config.js` file copies `styles.css`,
`theme.js`, and `cat-facts.js` into the generated site.
