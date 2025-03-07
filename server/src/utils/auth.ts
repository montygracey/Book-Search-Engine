import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Get the secret key from environment variables
const secret = process.env.JWT_SECRET_KEY || 'mysecretsshhhhh';
const expiration = '2h';

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

export const authMiddleware = ({ req }: { req: any }) => {
  // Get token from request headers, query parameters, or body
  let token = req.body?.token || req.query?.token || req.headers?.authorization;

  // Parse token from "Bearer <token>"
  if (req.headers?.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    // Verify token and get user data
    const { data } = jwt.verify(token, secret) as { data: JwtPayload };
    req.user = data;
  } catch (error) {
    console.log('Invalid token');
  }

  return req;
};

export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};