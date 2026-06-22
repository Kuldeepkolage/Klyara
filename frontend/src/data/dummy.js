// ─── User ───────────────────────────────────────────────────────
export const user = {
  name: 'Arjun Sharma',
  email: 'arjun@klyra.ai',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun',
  goal: 'Build muscle',
  level: 'Intermediate',
  joinDate: 'January 2025',
  age: 26,
  height: 178,
  weight: 74.2,
  targetWeight: 78,
  streak: 14,
};

// ─── Dashboard Stats ─────────────────────────────────────────────
export const dashboardStats = [
  {
    id: 'calories',
    label: 'Calories Today',
    value: '1,842',
    unit: 'kcal',
    icon: '🔥',
    change: 8,
    changeType: 'positive',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))',
  },
  {
    id: 'water',
    label: 'Water Intake',
    value: '2.1',
    unit: 'L',
    icon: '💧',
    change: 15,
    changeType: 'positive',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
  },
  {
    id: 'weight',
    label: 'Current Weight',
    value: '74.2',
    unit: 'kg',
    icon: '⚖️',
    change: 2,
    changeType: 'negative',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(124,58,237,0.1))',
  },
  {
    id: 'streak',
    label: 'Workout Streak',
    value: '14',
    unit: 'days',
    icon: '⚡',
    change: 40,
    changeType: 'positive',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.1))',
  },
];

// ─── Workouts ────────────────────────────────────────────────────
export const workouts = [
  {
    id: 1,
    name: 'Full Body Power',
    category: 'Strength',
    duration: 45,
    calories: 380,
    difficulty: 'Intermediate',
    exercises: 8,
    image: '🏋️',
    gradient: 'linear-gradient(135deg, #7C3AED, #5B21B6)',
  },
  {
    id: 2,
    name: 'HIIT Cardio Blast',
    category: 'Cardio',
    duration: 30,
    calories: 420,
    difficulty: 'Advanced',
    exercises: 10,
    image: '⚡',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
  },
  {
    id: 3,
    name: 'Morning Yoga Flow',
    category: 'Flexibility',
    duration: 20,
    calories: 120,
    difficulty: 'Beginner',
    exercises: 12,
    image: '🧘',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
  },
  {
    id: 4,
    name: 'Upper Body Sculpt',
    category: 'Strength',
    duration: 40,
    calories: 290,
    difficulty: 'Intermediate',
    exercises: 7,
    image: '💪',
    gradient: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
  },
  {
    id: 5,
    name: 'Core Crusher',
    category: 'Core',
    duration: 25,
    calories: 210,
    difficulty: 'Intermediate',
    exercises: 9,
    image: '🎯',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
  },
  {
    id: 6,
    name: 'Recovery Run',
    category: 'Cardio',
    duration: 35,
    calories: 280,
    difficulty: 'Beginner',
    exercises: 1,
    image: '🏃',
    gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)',
  },
];

export const workoutCategories = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'strength', label: 'Strength', icon: '🏋️' },
  { id: 'cardio', label: 'Cardio', icon: '🏃' },
  { id: 'flexibility', label: 'Flexibility', icon: '🧘' },
  { id: 'core', label: 'Core', icon: '🎯' },
];

// ─── Diet / Meals ─────────────────────────────────────────────────
export const meals = {
  breakfast: [
    { id: 1, name: 'Oats with Banana', calories: 320, protein: 12, carbs: 54, fat: 6, portion: '1 bowl (300g)', icon: '🥣' },
    { id: 2, name: 'Boiled Eggs (2)', calories: 156, protein: 14, carbs: 1, fat: 10, portion: '2 large eggs', icon: '🥚' },
    { id: 3, name: 'Greek Yogurt', calories: 130, protein: 17, carbs: 6, fat: 4, portion: '170g', icon: '🥛' },
  ],
  lunch: [
    { id: 4, name: 'Grilled Chicken Breast', calories: 240, protein: 44, carbs: 0, fat: 5, portion: '200g', icon: '🍗' },
    { id: 5, name: 'Brown Rice', calories: 210, protein: 5, carbs: 44, fat: 2, portion: '150g cooked', icon: '🍚' },
    { id: 6, name: 'Mixed Greens Salad', calories: 80, protein: 3, carbs: 10, fat: 3, portion: '200g', icon: '🥗' },
  ],
  dinner: [
    { id: 7, name: 'Salmon Fillet', calories: 310, protein: 38, carbs: 0, fat: 16, portion: '180g', icon: '🐟' },
    { id: 8, name: 'Quinoa', calories: 185, protein: 7, carbs: 32, fat: 3, portion: '120g cooked', icon: '🌾' },
    { id: 9, name: 'Steamed Broccoli', calories: 55, protein: 4, carbs: 10, fat: 1, portion: '150g', icon: '🥦' },
  ],
  snacks: [
    { id: 10, name: 'Almonds', calories: 170, protein: 6, carbs: 6, fat: 15, portion: '30g', icon: '🥜' },
    { id: 11, name: 'Protein Shake', calories: 150, protein: 25, carbs: 8, fat: 2, portion: '1 scoop', icon: '🥤' },
  ],
};

// ─── Progress / Charts ───────────────────────────────────────────
export const weightData = [
  { date: 'Jan 1', weight: 80.0 },
  { date: 'Jan 8', weight: 79.2 },
  { date: 'Jan 15', weight: 78.6 },
  { date: 'Jan 22', weight: 77.9 },
  { date: 'Feb 1', weight: 77.1 },
  { date: 'Feb 8', weight: 76.5 },
  { date: 'Feb 15', weight: 76.0 },
  { date: 'Mar 1', weight: 75.4 },
  { date: 'Mar 8', weight: 74.8 },
  { date: 'Mar 15', weight: 74.2 },
];

export const weeklyWorkouts = [
  { day: 'Mon', workouts: 1, calories: 380, duration: 45 },
  { day: 'Tue', workouts: 1, calories: 420, duration: 30 },
  { day: 'Wed', workouts: 0, calories: 0, duration: 0 },
  { day: 'Thu', workouts: 1, calories: 290, duration: 40 },
  { day: 'Fri', workouts: 1, calories: 210, duration: 25 },
  { day: 'Sat', workouts: 1, calories: 280, duration: 35 },
  { day: 'Sun', workouts: 0, calories: 0, duration: 0 },
];

export const monthlyCalories = [
  { week: 'W1', calories: 1820, target: 2000 },
  { week: 'W2', calories: 1940, target: 2000 },
  { week: 'W3', calories: 1780, target: 2000 },
  { week: 'W4', calories: 1842, target: 2000 },
];

export const progressStats = [
  { label: 'Total Workouts', value: '42', icon: '🏋️', sub: 'This month: 18' },
  { label: 'Calories Burned', value: '14.2k', icon: '🔥', sub: '+8% vs last month' },
  { label: 'Active Minutes', value: '1,840', icon: '⏱', sub: 'Avg 62 min/session' },
  { label: 'Personal Records', value: '7', icon: '🏆', sub: 'New PRs this month' },
];

// ─── Quick Actions ───────────────────────────────────────────────
export const quickActions = [
  { label: 'Log Workout', icon: '🏋️', href: '/workout', color: '#7C3AED' },
  { label: 'Track Meal',  icon: '🥗', href: '/diet',    color: '#10B981' },
  { label: 'View Progress', icon: '📊', href: '/progress', color: '#2563EB' },
  { label: 'Update Weight', icon: '⚖️', href: '/profile', color: '#F59E0B' },
];