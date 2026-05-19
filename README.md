# Cocktails and Code — Multi-Page Cocktail Discovery Application

A professional multi-page web application built with **React** and **TheCocktailDB API**. The platform allows users to search for drink recipes, view detailed ingredient and instruction summaries, and save favorites with persistent storage.

**Project Deadline:** May 19, 2026

---

## Key Features

- **Dynamic Search:** Real-time recipe lookups from an external data source displayed in a responsive grid.
- **Persistent Favorites:** Saves bookmarked items using browser local storage so choices remain intact after a page refresh.
- **State Management:** Handles loading states, empty search results, and API errors without crashing.
- **Fixed Navigation:** A persistent top navbar that links to all pages and indicates the current active route.
- **Architecture:** The application is split into modular components to maintain clean code separation.

---

## Accessibility Compliance

- **Audit Verification:** Validated via Accessibility Checker to fix all critical automated errors.
- **Interactive Elements:** Features explicit image alt descriptions and precise interactive aria-labels to accommodate screen readers.

---

## NPM Packages

- **react-loader-spinner:** Utilized to manage asynchronous UI transitions by rendering an accessible, smooth loading animation while cocktail data is being fetched from the API.
- **react-icons:** Used to inject optimized, inline vector graphics (like `MdStarRate`) into the navigation and favorite systems.

---

## Attributions & Credits

- **Data Sourcing:** All cocktail profiles, instructions, and image assets are pulled in real time from [TheCocktailDB API](https://www.thecocktaildb.com).
