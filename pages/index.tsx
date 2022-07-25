import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [drawerState, setDrawer] = useState(false);
  const [drawerStyle, setStyle] = useState({display: 'none'});

  const handleDrawer = () => {
    setDrawer((state) => !(state));
    if(drawerState){
      setStyle({display: 'none'});
    }else{
      setStyle({display: 'flex'});
    }
    console.log(drawerStyle)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hank Berger | Front-end Developer</title>
        <meta name="description" content="Frontend developer and artist. Focused on delivering quality engineering alongside great design." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.background} src='Website.png' alt="Art generated by Artificial Intelligence and Hank Berger."/>
        <nav className={styles.navbar}>
          <a className={styles.logocontainer} href='/'>
           <img className={styles.logo} src='/hankicon.webp' alt="Hank Berger's Logo"/>
          </a>
          <div className={styles.linkcontainer}>
            <a href='/'>
              Home
            </a>
            <a href='/#about'>
              About
            </a>
            <a href='/about'>
              Resume
            </a>
            <a href='/contact'>
              Contact
            </a>
          </div>
          <div onClick={handleDrawer} className={styles.hamburger}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
          </div>
          <div className={styles.drawerContainer} onClick={handleDrawer} style={drawerStyle}>
            <div className={styles.drawer} >
              <svg onClick={handleDrawer} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
              <img src="/icondark.png" alt="Hank Berger logo"/>
              <a href='/'>
                Home
              </a>
              <a href='/#about'>
                About
              </a>
              <a href='/about'>
                Resume
              </a>
              <a href='/contact'>
                Contact
              </a>
            </div>
          </div>
        </nav>
        <div className={styles.splash}>
          <div className={styles.title}>
            <h1>Hank Berger</h1>
            <p>Front-end Developer and Artist.</p>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutcontent}>
            <h1>About</h1>
            <img draggable='false' src="/hankberger.webp" alt="A professional headshot of Hank Berger."/>
            <p>Hi! I'm Hank, a front-end developer and digital artist interested in working with the cutting edge of technology and art.</p>
            <p>My technical skills include React, TypeScript, NodeJS, SASS (CSS), and SQL. As an artist, my main focus is in 3D animation and AI art. I am well versed in Cinema4D, Adobe After Effects, Photoshop, Illustrator, and Premiere.</p>
            <p>I'm a recent computer science graduate from the University of Minnesota, if you want to learn more about me you can find my resume here. Feel free to get in contact with me through the form below.</p>
          </div>
        </div>
        <div className={styles.experience}>
          <img src='/second.png'/>
        </div>
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}

export default Home
