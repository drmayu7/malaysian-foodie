import classes from './page.module.css';
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";

export default async function MealsDetailPage({ params }) {
    const { mealSlug } = await params;
    const meal = getMeal(mealSlug)

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br>');
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={`https://mfoodie-images.s3.ap-southeast-5.amazonaws.com/${meal.image}`} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions,
                }}></p>
            </main>
        </>
    );
}