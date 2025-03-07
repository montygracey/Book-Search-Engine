import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import db from './config/connection.js';
import { typeDefs, resolvers } from './schemas/index.js';
import { authMiddleware } from './utils/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Create Apollo server with schema and auth middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Start Apollo server
const startApolloServer = async () => {
  await server.start();
  
  // Apply Apollo GraphQL middleware and set path
  // Add type assertion to fix TypeScript error
  server.applyMiddleware({ app } as any);
  
  // Middleware for parsing request body
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));
    
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
  }
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 API server running on port ${PORT}!`);
      console.log(`🚀 GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer();