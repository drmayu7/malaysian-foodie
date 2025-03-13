import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve,2000));
    // throw new Error('Failed to fetch meals');
    const meals = await db.prepare('SELECT * FROM meals').all();
    return (meals)
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}