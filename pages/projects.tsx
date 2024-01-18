
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/gallery/Gallery.module.css'

const Projects: NextPage = () => {
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
                        PROJECTS
                    </h1>
                </div>
                <div className={styles.desc}>
                    <p>A showcase of my favorite coding projects; mostly 3D stuff done in the web and Unreal Engine. Common tools are TypeScript, React, Three.js, SASS, and C++. </p>
                    
                    <Link href='/#showcase'>
                        <div className={styles.linkcontainer}><p>&#8592; Back to Home</p></div>
                    </Link>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.item}>
                            <div className={styles.headerImage}>
                                <img className={styles.background} src='PathPlanning.png' alt="Background art for Hank Berger's portfilio website."/>
                            </div>
                            <div className={styles.bio}>
                                <div>
                                    <h2 className={styles.bioheader}>Path Planning</h2>
                                    <p className={styles.biodesc}>Add barrels, randomize the goal, and watch the crash dummy automatically find a path around the obstacles.
                                    <br/><span className={styles.disclaimer}>*May have to wait a minute for barrels to load depending on your PC.</span></p>
                                </div>
                               
                                <div className={styles.buttonBox}>
                                    <a href='https://hankberger.github.io/PathPlanningThreeJS/' target="_blank"  rel="noreferrer">
                                        <button className={styles.primaryAction} >Try it out</button>
                                    </a>
                                    <a href='https://github.com/hankberger/PathPlanningThreeJS' target="_blank"  rel="noreferrer">
                                        <button className={styles.secondaryAction} >Github</button>
                                    </a>                        
                                </div>
                            </div>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.headerImage}>
                                <img className={styles.background} src='RandomRace.png' alt="Background art for Hank Berger's portfilio website."/>
                            </div>
                            <div className={styles.bio}>
                                <div>
                                    <h2 className={styles.bioheader}>Random Racer</h2>
                                    <p className={styles.biodesc}>Use your WASD keys to drive on the track as far as you can. AI agents will spawn and try to hit you off the track.
                                    </p>
                                </div>
                               
                                <div className={styles.buttonBox}>
                                    <a href='https://hankberger.github.io/FinalProject5611/' target="_blank"  rel="noreferrer">
                                        <button className={styles.primaryAction} >Try it out</button>
                                    </a>
                                    <a href='https://github.com/hankberger/FinalProject5611' target="_blank"  rel="noreferrer">
                                        <button className={styles.secondaryAction} >Github</button>
                                    </a>                        
                                </div>
                            </div>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.headerImage}>
                                <img className={styles.background} src='droneSIm.png' alt="Background art for Hank Berger's portfilio website."/>
                            </div>
                            <div className={styles.bio}>
                                <div>
                                    <h2 className={styles.bioheader}>3D Drone Routing Simulation</h2>
                                    <p className={styles.biodesc}>Request a trip and watch a 3D simulation of a drone path planning to pick up a bot, and drop it off at the destination. C++ Backend for routing logic with Three.js frontend.
                                    </p>
                                </div>
                               
                                <div className={styles.buttonBox}>
                                    <a href='https://drive.google.com/file/d/1MNlMztNS_Hcpb1Dwq1mXF-oHNuqqlHRg/view?usp=sharing' target="_blank"  rel="noreferrer">
                                        <button className={styles.primaryAction} >Watch Video</button>
                                    </a> 
                                    <div>
                                    </div>                   
                                </div>
                            </div>
                    </div>
                    <div className={styles.item}>
                            <div className={styles.headerImage}>
                                <img className={styles.background} src='Metahuman.png' alt="Background art for Hank Berger's portfilio website."/>
                            </div>
                            <div className={styles.bio}>
                                <div>
                                    <h2 className={styles.bioheader}>Metahuman VR IK Solver</h2>
                                    <p className={styles.biodesc}>Rigged up a Metahuman to follow the movemements of my VR controllers. Done using Unreal Engine blueprints.
                                    </p>
                                </div>
                               
                                <div className={styles.buttonBox}>
                                    <a href='https://drive.google.com/file/d/1eSt7ErQE9sCcDrLD3VkdVEBvWdk1KSdy/view?usp=sharing' target="_blank"  rel="noreferrer">
                                        <button className={styles.primaryAction} >Watch Video</button>
                                    </a> 
                                    <div>
                                        </div>               
                                </div>
                            </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Projects;