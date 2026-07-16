# NPM-Lens

A modern React application to explore npm packages quickly. Search for any package and instantly view essential metadata, installation commands, dependencies, and more.

## Live Demo

https://npm-lens.vercel.app/

## Features

* Search any npm package
* View package information

  * Name
  * Version
  * Homepage
  * Node.js version
  * npm version
* Installation commands for multiple package managers

  * npm
  * Yarn
  * pnpm
  * Bun
* One-click copy installation command
* Package keywords
* Package dependencies
* Recent searches (stored using Local Storage)
* Quick access to popular npm packages
* Friendly error page for invalid package names
* Fully responsive UI

---

## Tech Stack

* React
* React Router
* Vite
* Tailwind CSS
* JavaScript (ES6+)
* npm Registry API
* Local Storage

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/khyati-2010/NPM-Lens.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## Project Structure

```text
src
├── components
├── context
├── hooks
├── loader
├── pages
├── Layout.jsx
├── Router.jsx
└── main.jsx
```

---

## APIs Used

### Package Metadata

```
https://registry.npmjs.org/<package-name>/latest
```

### Weekly Downloads

```
https://api.npmjs.org/downloads/point/last-week/<package-name>
```

---

## What I Learned

While building NPM Lens, I gained hands-on experience with:

- Nested Routing using React Router
- Dynamic Routes
- Route Loaders
- Error Boundaries
- Fetching and handling API data
- Custom Hooks
- Context API
- Local Storage
- Component-based architecture
- Responsive UI development with Tailwind CSS

---

## Future Improvements

* Dark/Light mode
* Package statistics and charts
* Search suggestions/autocomplete
* Favorite packages
* Package comparison
* README preview

---
