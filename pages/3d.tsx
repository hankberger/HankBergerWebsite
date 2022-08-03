import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/gallery/Gallery.module.css'

const ThreeD: NextPage = () => {
    return(
        <div className={styles.page}>
             <Head>
                <title>Hank Berger | Front-end Developer</title>
                <meta name="description" content="Frontend developer and artist. Focused on delivering quality engineering alongside great design." />
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
                    <p>3D Animation using Cinema4D, Redshift, Adobe After Effects, and Adobe Premiere. Commissions currently not open.</p>
                    
                    <Link href='/'>
                        <div className={styles.linkcontainer}><p>&#8592; Back to Home</p></div>
                    </Link>
                </div>
                
                <div className={styles.gallery}>
                    <div className={styles.item}>
                        <video src="3d/Treesies.mp4" autoPlay muted controls playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/desert.mp4" autoPlay muted controls playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/hairdance2.mp4" autoPlay muted controls playsInline></video>
                    </div>
                    <div className={styles.item}>
                        <video src="3d/differentmasks.mp4" autoPlay muted controls playsInline></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeD;