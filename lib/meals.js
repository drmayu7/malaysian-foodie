import fs from 'node:fs';
import { S3 } from '@aws-sdk/client-s3';

import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from 'xss';

const s3 = new S3({
    region: 'ap-southeast-5',
});
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

export async function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    // const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    // stream.write(Buffer.from(bufferedImage,(error)=>{
    //     if(error){
    //         throw new Error('Saving image failed');
    //     }
    // }));

    s3.putObject({
        Bucket: 'mfoodie-images',
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: meal.image.type,
    });


    meal.image = fileName;
    db.prepare(`
        INSERT INTO meals
            (title, slug, image, summary, instructions, creator, creator_email)
        VALUES(
               @title,
               @slug,
               @image,
               @summary,
               @instructions,
               @creator,
               @creator_email
              )
    `).run(meal);
}