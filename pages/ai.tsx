import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/gallery/Gallery.module.css'

const AI: NextPage = () => {
    return(
        <div className={styles.page}>
             <Head>
                <title>Hank Berger | AI Art</title>
                <meta name="description" content="Artificial Intelligence art created by Hank Berger. Created using the Disco Diffusion model." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        AI ART
                    </h1>
                </div>
                <div className={styles.desc}>
                    <p>Art created using artificial intelligence. I have a massive passion for combining art and technology wherever possible, and AI art has aboslutely amazed me recently. We&apos;re on the verge of a new era for art.</p>
                    
                    <Link href='/'>
                        <div className={styles.linkcontainer}><p>&#8592; Back to Home</p></div>
                    </Link>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.item}>
                        <img src="ai/city1.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/city2.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/city3.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/city4.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/ego1.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/ego2.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/ego3.webp"></img>
                    </div>
                    <div className={styles.item}>
                        <img src="ai/ego4.webp"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AI;