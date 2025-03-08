# Google Books Search Engine

A full-stack MERN application that allows users to search for books via the Google Books API and save their favorites to their account.

##  Description

This application was originally built using a RESTful API and has been refactored to use GraphQL with Apollo Server. Users can create an account, search for books, and save/remove books from their personal saved list.

##  Deployed Application

Visit the live application: [Book Search Engine](https://book-search-engine-d373.onrender.com/)

##  Demo Video

[[Click here to view a demonstration of the application](https://drive.google.com/file/d/17jbnhjjEv0ksqx4cH03K5m2_XO8X67F_/view?usp=sharing)]

## ✨ Features

- User authentication (signup and login)
- Search books by title, author, or keywords
- View book details including cover image, description, and link to Google Books
- Save books to your personal list when logged in
- View all your saved books in one place
- Remove books from your saved list

## 🛠️ Technologies Used

### Frontend
- React
- Apollo Client
- JWT for authentication
- Bootstrap for styling
- TypeScript

### Backend
- Node.js
- Express.js
- GraphQL
- Apollo Server
- MongoDB
- Mongoose ODM
- JWT for authentication
- TypeScript

##  API Refactoring

This project demonstrates the process of converting a RESTful API to a GraphQL API:

- Replaced RESTful routes with GraphQL queries and mutations
- Implemented Apollo Server and applied it as middleware to the Express server
- Created GraphQL schemas with typeDefs and resolvers
- Modified authentication middleware to work with GraphQL
- Added Apollo Provider to the React frontend

##  Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/montygracey/Book-Search-Engine.git
   ```

2. Install NPM packages:
   ```
   npm install
   ```

3. Create a `.env` file in the server directory and add:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret
   ```

4. Start the development server:
   ```
   npm run develop
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

##  Usage

1. Sign up for a new account or log in with existing credentials
2. Search for books using the search bar
3. Click "Save this Book!" to add a book to your saved list
4. Navigate to "See Your Books" to view your saved books
5. Click "Delete this Book!" to remove a book from your saved list


##  Acknowledgments

- Google Books API
- MongoDB Atlas
- Render for hosting
