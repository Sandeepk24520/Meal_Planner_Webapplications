// Meal Planner JavaScript
class MealPlanner {
    constructor() {
        this.weeklyPlan = {
            Monday: { breakfast: null, lunch: null, dinner: null },
            Tuesday: { breakfast: null, lunch: null, dinner: null },
            Wednesday: { breakfast: null, lunch: null, dinner: null },
            Thursday: { breakfast: null, lunch: null, dinner: null },
            Friday: { breakfast: null, lunch: null, dinner: null },
            Saturday: { breakfast: null, lunch: null, dinner: null },
            Sunday: { breakfast: null, lunch: null, dinner: null }
        };
        
        this.mealDatabase = {
            breakfast: [
                { name: "Pancakes", prepTime: 15, ingredients: ["flour", "eggs", "milk", "butter"], calories: 350, protein: 12, carbs: 45, fat: 12, dietary: ["vegetarian"] },
                { name: "Oatmeal", prepTime: 10, ingredients: ["oats", "milk", "honey", "berries"], calories: 280, protein: 8, carbs: 52, fat: 6, dietary: ["vegetarian", "gluten-free"] },
                { name: "Scrambled Eggs", prepTime: 8, ingredients: ["eggs", "butter", "salt", "pepper"], calories: 200, protein: 14, carbs: 2, fat: 15, dietary: ["vegetarian", "keto", "low-carb"] },
                { name: "Avocado Toast", prepTime: 12, ingredients: ["bread", "avocado", "lemon", "salt"], calories: 320, protein: 8, carbs: 35, fat: 18, dietary: ["vegetarian", "vegan"] }
            ],
            lunch: [
                { name: "Caesar Salad", prepTime: 20, ingredients: ["lettuce", "parmesan", "croutons", "caesar dressing"], calories: 320, protein: 15, carbs: 18, fat: 22, dietary: ["vegetarian", "low-carb"] },
                { name: "Chicken Sandwich", prepTime: 25, ingredients: ["bread", "chicken", "lettuce", "tomato", "mayo"], calories: 450, protein: 28, carbs: 35, fat: 22, dietary: ["high-protein"] },
                { name: "Vegetable Soup", prepTime: 30, ingredients: ["carrots", "celery", "onions", "vegetable broth"], calories: 180, protein: 6, carbs: 32, fat: 4, dietary: ["vegetarian", "vegan", "low-fat"] },
