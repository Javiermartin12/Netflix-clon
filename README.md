# MuvieHub

**MuvieHub** is a web application designed as a clone of Netflix. This app is not finished yet.

## Content Table

1. [Features](#features)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
6. [Contributions](#contributions)
7. [License](#license)

## Features

- **Movie Browsing:** Explore a vast collection of movies and TV shows.
- **Search:** Quickly find movies or shows by title, genre, or actor.
- **Streaming:** Stream movies and shows directly within the app.
- **Watchlist:** Create and manage your personalized watchlist.
- **User Profile:** Secure authentication and profile management.
- **Interface:** A sleek and responsive UI for an immersive experience.

## Technologies

- **Frontend:**

  - [Next.js](https://nextjs.org/) - A React framework for server-rendered applications and static site generation.
  - [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript.
  - [Vite](https://vitejs.dev/) - A build tool that provides a fast development server.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling language used for the visual presentation of the application.

- **Backend:**
  - [Node.js](https://nodejs.org/) - JavaScript runtime for server-side programming.
  - [TypeScript](https://www.typescriptlang.org/) - Adds strong typing to JavaScript, making code more reliable.
  - [Prisma](https://www.prisma.io/) - A modern database toolkit that simplifies database access.
  - [PostgreSQL](https://www.postgresql.org/) - An advanced open-source relational database.

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/muviehub.git
   ```

2. Install Dependencies:

- **Frontend:**

bash
cd frontend
npm install

- **Backend:**

bash
cd backend
npm install

3. Configure Environment Variables:

Set up the necessary environment variables for both frontend and backend:

# Frontend (Next.js)

NEXT_PUBLIC_API_URL=http://localhost:4000

# Backend

DATABASE_URL=postgresql://user:password@localhost:5432/muviehub
JWT_SECRET=your_jwt_secret

4. Run the Application:

- **Frontend:**

bash
cd frontend
npm run dev

- **Backend:**

bash
cd backend
npm run dev

## Usage

Authentication: Sign up or log in to access MuvieHub's full features.
Browse Content: Explore the library to discover new movies and TV shows.
Create Watchlists: Add your favorite content to your personalized watchlist.
Stream Content: Watch movies and shows with the integrated video player.
Manage Profile: Update your account details and settings.

## Configuration

To configure the application for production:

Ensure all environment variables are correctly set.
Make sure the backend is properly configured and optimized for production.
Deploy the frontend and backend on your preferred cloud services.

## Contributions

Contributions are welcome. To contribute:

1. Fork the Repository.
2. Create a Branch for your Feature or Fix.
3. Commit your Changes.
4. Push to the Branch.
5. Create a Pull Request.

## License

This project does not have a license.
