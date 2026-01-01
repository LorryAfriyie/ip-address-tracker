# Frontend Mentor - IP address tracker solution

This is a solution to
the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
- [Author](#author)
  **Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

The screenshots below showcase the appearance of the website in both desktop and mobile view:

![Desktop screenshot 1](./public/screenshots/desktop_version_default_state.png)

![Desktop screenshot 2](./public/screenshots/desktop_version_active_state.png)

![Desktop screenshot 1](./public/screenshots/mobile_version_default_state.png)

![Desktop screenshot 2](./public/screenshots/mobile_version_active_state.png)

### Links

- Solution URL: [Challenge solution URL](https://github.com/LorryAfriyie/ip-address-tracker)
- Live Site URL: [Challenge live URL](https://lorryafriyie.github.io/ip-address-tracker)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS
- Mobile-first workflow
- TypeScript
- Leaflet
- React-Leaflet
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - Frontend Tooling

### What I learned

Learning to use the nth-child property helped me to be able to exclude styling on of the children of the parent
element.

```css
&:nth-child(1 of .col) {
    border-left: 0;
}
```

In this section, I learned how to detect an keypress on the keyboard. In the following code snippet, it checks to see if
the "Enter" key was pressed.

```js
inputRef.current?.addEventListener("keypress", (e) => {
    // Check if the enter key was pressed
    if (e.key === "Enter") {
        e.preventDefault();
        buttonRef.current?.click();
    }
})
```

### Continued development

- In the future I want to improve on creating responsive designs, to ensure that elements on a webpage are able to
  adjust seamlessly to the size of a screen without obstructing each other or overlying each other.
  **

## Author

- Frontend Mentor - [@LorryAfriyie](https://www.frontendmentor.io/profile/LorryAfriyie)

