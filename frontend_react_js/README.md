# AI Smart Finance Buddy - Frontend (Expo React Native)

This is the Expo React Native frontend using Nativewind (TailwindCSS) and expo-router for navigation.

## Quick start

1. Install dependencies:
   - npm install

2. Start the app:
   - npm run start

3. Open on:
   - iOS: Expo Go
   - Android: Expo Go
   - Web: press 'w' in the Expo CLI

## Structure

- app/_layout.tsx: Root stack layout
- app/index.tsx: Dashboard screen
- app/login.tsx: Login placeholder
- app/register.tsx: Register placeholder

## Styling

Tailwind-like classes via Nativewind. Config in tailwind.config.js
```


Explanation: Backend Node.js + Express app with Mongoose, JWT auth, and user model.
````write file="universal-application-suite-108-159/backend-node/package.json"
{
  "name": "ai-smart-finance-buddy-backend",
  "version": "1.0.0",
  "private": true,
  "description": "Node.js + Express + MongoDB (Mongoose) backend with JWT auth",
  "main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "lint": "eslint ."
  },
  "dependencies": {
    "bcryptjs": "2.4.3",
    "cors": "2.8.5",
    "dotenv": "16.4.5",
    "express": "4.19.2",
    "jsonwebtoken": "9.0.2",
    "mongoose": "8.6.1",
    "morgan": "1.10.0"
  },
  "devDependencies": {
    "eslint": "8.57.0",
    "nodemon": "3.1.7"
  }
}
