export type Schema = {
  users: {
    id?: string;
    name: string;
    email: string;
    createdAt?: string;
    subscriptionStatus?: 'free' | 'premium' | 'trial';
  };
  languageGoals: {
    id?: string;
    userId: string;
    goalType: 'casual' | 'regular' | 'intensive';
    targetLevel: string;
    weeklyHours: number;
    createdAt?: string;
  };
  lessonProgress: {
    id?: string;
    userId: string;
    lessonId: string;
    completionPercentage?: number;
    lastAccessed?: string;
  };
  subscriptions: {
    id?: string;
    userId: string;
    planType: 'monthly' | 'annual' | 'lifetime';
    startDate?: string;
    endDate?: string;
    autoRenew?: boolean;
  };
}