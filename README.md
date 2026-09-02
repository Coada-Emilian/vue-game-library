# Backlogged

A personal game library built with Vue 3 and TypeScript.

The application allows you to search for games using the RAWG API, explore game details and related titles, and maintain a personal library organized by status. Your library is persisted locally so your games remain available after restarting the application.

## Features

- Search for games using the RAWG API
- View detailed game information
- Browse related games in the same series
- Add games to a personal library
- Organize games into four statuses:
  - Backlog
  - Playing
  - Finished
  - Abandoned
- View games by library status
- See which related games are already in the library
- Navigate between games using Vue Router
- Persist the personal library using browser `localStorage`
- Responsive interface for different screen sizes

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- TanStack Vue Query
- RAWG API
- pnpm
- CSS

## Project Structure

```text
Game Library/
├── public/
│   ├── favicon.png
│   ├── favicon.svg
│   ├── icons.svg
│   └── logo.png
│
├── src/
│   ├── components/
│   │   ├── GameCard.vue
│   │   ├── Header.vue
│   │   └── SearchForm.vue
│   │
│   ├── pages/
│   │   ├── ExploreView.vue
│   │   ├── GameDetailsView.vue
│   │   ├── HomeView.vue
│   │   ├── MyGamesListView.vue
│   │   └── MyGamesView.vue
│   │
│   ├── router/
│   │   └── index.ts
│   │
│   ├── services/
│   │   └── rawg.ts
│   │
│   ├── stores/
│   │   └── library.ts
│   │
│   ├── types/
│   │   ├── game.ts
│   │   ├── gameDetails.ts
│   │   ├── gameStatus.ts
│   │   └── libraryGame.ts
│   │
│   ├── App.vue
│   ├── main.ts
│   └── style.css
│
├── .env.local
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Application Architecture

The application is divided into several layers, each with a specific responsibility.

- **Views** handle page-level logic and coordinate components.
- **Components** provide reusable UI elements such as the header, search form, and game cards.
- **Services** handle communication with the RAWG API.
- **TanStack Vue Query** manages API requests, loading states, errors, and cached server data.
- **Pinia** manages the user's personal game library and its statuses.
- **Vue Router** handles navigation and URL-based state.
- **Types** define the data structures used throughout the application.
- **localStorage** persists the user's library between sessions.

## API & Environment Configuration

The application uses the RAWG API to retrieve game data.

The API key is provided through the Vite environment variable `VITE_RAWG_API_KEY`.

Create a `.env.local` file in the project root:

```env
VITE_RAWG_API_KEY=your_api_key
```

## Installation & Setup

Clone the repository and install the project dependencies:

    pnpm install

Create a `.env.local` file in the project root and add your RAWG API key:

    VITE_RAWG_API_KEY=your_api_key

Start the development server:

    pnpm dev

The application will then be available at the local development URL provided by Vite.

## Library Persistence

The personal game library is managed with Pinia and persisted using the browser's `localStorage`.

When a game is added to the library or its status changes, the library state is saved locally. When the application starts, the saved library is loaded back into the Pinia store.

This means library data remains available after closing and reopening the browser or restarting the development server.

The library supports four statuses:

- Backlog
- Playing
- Finished
- Abandoned

## Future Improvements

Possible future improvements include:

- Improve search result filtering and relevance
- Add pagination or "load more" functionality for search results
- Further improve the related games section
- Add more detailed library management features
- Improve accessibility and keyboard navigation
- Add additional UI polish and responsive improvements
- Expand game information and metadata displayed in the application

## Project Status

This project is currently a work in progress and is primarily intended as a learning project for practicing Vue 3, TypeScript, state management, routing, API integration, and frontend application architecture.

The core functionality is implemented, including game search, game details, related games, personal library management, library persistence, and navigation.
