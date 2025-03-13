import classes from './page.module.css';
import Link from 'next/link';
import ImageSlideshow from "@/components/images/images-slideshow";

export default function Home() {
  return (
        <>
            <header className={classes.header}>
                <div className={classes.slideshow}>
                <ImageSlideshow />
                </div>

                <div>
                    <div className={classes.hero}>
                        <h1>Malaysian Food for Malaysian Foodies</h1>
                        <p>Taste & share food from all over Malaysia.</p>
                    </div>
                    <div className={classes.cta}>
                        <Link href='/community'>Join the Community</Link>
                        <Link href='/meals'>Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={classes.section}>
                    <h2>How it works</h2>
                    <p>
                        Malaysian Foodie is a platform for foodies to share their favorite
                        recipes with the Malaysian. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p>
                        Malaysian Foodie is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>

                <section className={classes.section}>
                    <h2>Why Malaysian Food?</h2>
                    <p>
                        Malaysian Foodie is a platform for foodies to share their favorite
                        recipes with the Malaysian. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p>
                        Malaysian Foodie is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>
            </main>
        </>
  );
}
