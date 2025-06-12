export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  subscriptionStatus: 'free' | 'premium' | 'trial';
}

export interface LanguageGoal {
  id: string;
  userId: string;
  goalType: 'casual' | 'regular' | 'intensive';
  targetLevel: string;
  weeklyHours: number;
  createdAt: string;
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  completionPercentage: number;
  lastAccessed: string;
}

export interface Subscription {
  id: string;
  userId: string;
  planType: 'monthly' | 'annual' | 'lifetime';
  startDate: string;
  endDate?: string;
  autoRenew: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  content: LessonContent;
}

export interface LessonContent {
  sections: LessonSection[];
}

export interface LessonSection {
  type: 'vocabulary' | 'grammar' | 'conversation' | 'quiz';
  title: string;
  content: any; // This would be more specific based on section type
}