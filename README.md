# My Personal Bookshelf — Worksheet P8

**Student Details:**
* **Name:** Faizah Nabila Azzahra
* **NIM:** 25523189
* **Class:** IP Class / Informatics
* **Course:** Web Application Development (SIF302)
* **Semester:** Odd 2026/2027

---

## About The Project
This repository contains my submission for **Worksheet P8 (Modern JavaScript ES6+)**. The project is built around a web page titled **"My Personal Bookshelf"** which manages a collection of personal books (such as *Atomic Habits*, *To Kill a Mockingbird*, etc.) alongside student profile details.

The core objective of this worksheet is to transition hardcoded HTML content into dynamic JavaScript data structures, utilizing modern ES6+ features, immutable array operations, pure functions, and proper variable scoping.

---

## What I Implemented in `js/app.js`

1. **Variables & Objects:**
   * Declared static identity data (`profile`) and the core data collection (`bookCollection`) using `const`.
   * Practiced proper scoping (`const` / `let`) to avoid global variable leaks.

2. **Pure Functions:**
   * `createIntroduction`: A pure function using object destructuring to format an introduction string.
   * `formatSkills`: An arrow function utilizing `.join(" · ")` to output skill tags cleanly.

3. **Array Methods & Data Manipulation:**
   * Used `console.table()` to display arrays and objects neatly in the browser console.
   * Applied `.filter()` to get books currently with the status `"Reading"`.
   * Applied `.find()` to retrieve a specific book object by its title (`"Atomic Habits"`).
   * Applied `.map()` to generate an array of book titles without modifying the source data.
   * Used spread operators (`...`) to ensure data immutability during copy operations.

---

## Repository Structure

```text
worksheet-p8/
├── profile.html         # Main web page layout
├── style.css            # Custom stylesheet
├── bookshelf.jpeg       # Project image asset
├── README.md            # Project documentation
└── js/
    └── app.js           # JavaScript ES6+ logic & data structures
