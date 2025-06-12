-- Create users table with subscription status
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  subscriptionStatus TEXT DEFAULT 'free' CHECK (subscriptionStatus IN ('free', 'premium', 'trial'))
);

-- Create language goals table
CREATE TABLE languageGoals (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  goalType TEXT NOT NULL CHECK (goalType IN ('casual', 'regular', 'intensive')),
  targetLevel TEXT NOT NULL,
  weeklyHours INTEGER NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- Create lesson progress table
CREATE TABLE lessonProgress (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  lessonId TEXT NOT NULL,
  completionPercentage INTEGER DEFAULT 0,
  lastAccessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- Create subscriptions table
CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  planType TEXT NOT NULL CHECK (planType IN ('monthly', 'annual', 'lifetime')),
  startDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  endDate TIMESTAMP,
  autoRenew BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (userId) REFERENCES users(id)
);