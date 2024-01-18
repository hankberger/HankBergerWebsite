import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/gallery/Gallery.module.css'

const ThreeD: NextPage = () => {
    return(
        <div className={styles.page}>
             <Head>
                <title>Hank Berger | 3D Art</title>
                <meta name="description" content="3D Art Created by Hank Berger." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        3D Art
                    </h1>
                </div>
                <div className={styles.desc}>
                    <p>3D animation using mostly procedural generation and simulation. Most common tools are Cinema4D, Unreal Engine 5, Houdini and Adobe After Effects.</p>
                    <Link href='/#showcase'>
                        <div className={styles.linkcontainer}><p>&#8592; Back to Home</p></div>
                    </Link>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.item}>
                        <video src="3d/lastwords.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/DesertWithSound.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/fancyclown.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/scalecube.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/tree1.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/cloud.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/reflection.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/clothy.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/frac1.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/eclipse.mp4" autoPlay muted controls loop playsInline></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeD;