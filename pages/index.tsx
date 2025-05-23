import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import getIcons from "../components/socialIcons";

const Home: NextPage = () => {
  const [drawerState, setDrawer] = useState(false);
  const [drawerStyle, setStyle] = useState({ display: "none" });
  const [messageSent, sentMessage] = useState(false);
  const [messageStyle, setMessageStyle] = useState({ display: "none" });

  const handleDrawer = () => {
    setDrawer((state) => !state);
    if (drawerState) {
      setStyle({ display: "none" });
    } else {
      setStyle({ display: "flex" });
    }
    console.log(drawerStyle);
  };

  const handleSubmit = (event: any) => {
    sentMessage(true);
    if (messageSent) {
      setMessageStyle({ display: "none" });
    } else {
      setMessageStyle({ display: "flex" });
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hank Berger - Software Developer</title>
        <meta name="charset" content="utf-8" />
        <meta
          name="description"
          content="Full-stack developer and artist. Focused on delivering quality engineering alongside great design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Hank Berger, Software, 3D Art, Web Development, Developer"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hankberger.com" />
        <meta property="og:title" content="Hank Berger - Software Developer" />
        <meta
          property="og:description"
          content="Software Developer focused on delivering quality engineering alongside great design."
        />
        <meta
          property="og:image"
          content="https://hankberger.com/background.webp"
        />
      </Head>

      <main className={styles.main}>
        <img
          className={styles.background}
          src="background.webp"
          alt="Background art for Hank Berger's portfilio website."
        />
        <nav id="home" className={styles.navbar}>
          <Link className={styles.logocontainer} href="/">
            <img
              className={styles.logo}
              src="/hankicon.webp"
              alt="Hank Berger's Logo"
            />
          </Link>
          <div className={styles.linkcontainer}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </div>
          <div onClick={handleDrawer} className={styles.hamburger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <div
            className={styles.drawerContainer}
            onClick={handleDrawer}
            style={drawerStyle}
          >
            <div className={styles.drawer}>
              {/* <svg onClick={handleDrawer} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg> */}
              <img src="/icondark.webp" alt="Hank Berger logo" />
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#showcase">Showcase</a>
              <a href="#contact">Contact</a>
              <div className={styles.socials}>
                {getIcons().map(
                  (
                    icon: { name: string; link: string; html: string },
                    i: number
                  ) => {
                    return (
                      <a
                        key={i}
                        href={icon.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div
                          className={styles.socialsicons}
                          dangerouslySetInnerHTML={{ __html: icon.html }}
                        ></div>
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.splash}>
          <div className={styles.title}>
            <h1 className={styles.fadeLeft}>Hank</h1>
            <h1 className={styles.fadeLeft2}>Berger</h1>
            <p className={styles.fadeLeft3}>Software Developer and Artist.</p>
          </div>
        </div>
        <div id="about" className={styles.about}>
          <div className={styles.aboutcontent}>
            <h1>About</h1>
            <img
              draggable="false"
              src="/hankberger.webp"
              alt="A professional headshot of Hank Berger."
            />
            <a
              href="https://drive.google.com/file/d/1L6Xw5OJCO2oAN9t3Fq-XiM6l81Sj5buD/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
            <p>
              Hi! I&apos;m Hank, a full-stack developer and 3D digital artist
              interested in building online products with cutting-edge
              technology and great design. Recently, I&apos;ve been focused on
              healthcare tech within the patient experience realm.
            </p>
            <p>
              My technology experience focuses on applications, having built
              both websites and mobile applications to solve problems. I strive
              to make every experience a joy to use, and I&apos;m always looking
              for a new challenge!
            </p>
          </div>
        </div>
        <div id="experience" className={styles.experience}>
          <div className={styles.experienceContent}>
            <h1>Experience</h1>
            <div className={styles.expContainer}>
              <div className={styles.expGrid} style={{ marginTop: "0px" }}>
                <div className={styles.expTitle}>
                  <h4>January 2023 - Present</h4>
                  <h2>Epic</h2>
                  <h3>Software Developer</h3>
                </div>
                <div className={styles.expDesc}>
                  <p>
                    Software Developer on MyChart - Bedside. Focus on mobile/web
                    development using Swift, Objective-C, Java, and React.
                    Heavily involved in usability and user experience throughout
                    the company.
                  </p>
                </div>
              </div>
              <div className={styles.expGrid} style={{ marginTop: "0px" }}>
                <div className={styles.expTitle}>
                  <h4>May 2022 - December 2022</h4>
                  <h2>Ameriprise Financial</h2>
                  <h3>Digital Platform Engineering Intern</h3>
                </div>
                <div className={styles.expDesc}>
                  <p>
                    Intern on the Digital Platform Engineering Team. My main
                    project was converting our public sites to React, and
                    release management support using CI/CD tools such as
                    Jenkins, Git, and AWS.
                  </p>
                </div>
              </div>
              <div className={styles.expGrid} style={{ marginTop: "0px" }}>
                <div className={styles.expTitle}>
                  <h4>May 2021 - May 2022</h4>
                  <h2>CT Holdings</h2>
                  <h3>Software Developer Intern</h3>
                </div>
                <div className={styles.expDesc}>
                  <p>
                    Software Developer for CT Holdings, a parent company for
                    small to medium sized businesses focused in manufacturing.
                    Main focus was developing web applications to pull data into
                    downloadable CSV files for customers.
                  </p>
                </div>
              </div>
              <div className={styles.expGrid}>
                <div className={styles.expTitle}>
                  <h4>January 2021 - October 2021</h4>
                  <h2>University of Minnesota</h2>
                  <h3>Research Assistant</h3>
                </div>
                <div className={styles.expDesc}>
                  <p>
                    Research Assistant for Digital Arts, Sciences, and
                    Humanities (DASH). The main goal was to assist humanities
                    researchers utilize technology in their research. Main tasks
                    included data visualization using Python and website
                    development for research teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="showcase" className={styles.gallery}>
          <div className={styles.galleryContent}>
            <h1>Showcase</h1>

            <div className={styles.galleryGrid}>
              <Link href="/3d">
                <div className={styles.art}>
                  <div
                    className={styles.vidContainer}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<video src="/dance.mp4" muted autoPlay loop playsInline/>',
                    }}
                  ></div>
                  <div className={styles.cover}>
                    <h2>3D Art</h2>
                    {/* <p>View More</p> */}
                  </div>
                </div>
              </Link>
              <Link href="/projects">
                <div className={styles.aiart}>
                  <div
                    className={styles.vidContainer}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<video src="/stormy.mp4" muted autoPlay loop playsInline/>',
                    }}
                  ></div>
                  <div className={styles.cover}>
                    <h2>Projects</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="contact" className={styles.contact}>
          <div className={styles.contactContent}>
            <h1>Contact Me</h1>
            <div className={styles.socialIcons}>
              {getIcons().map(
                (
                  icon: { name: string; link: string; html: string },
                  i: number
                ) => {
                  return (
                    <a
                      key={i}
                      href={icon.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className={styles.icon}
                        dangerouslySetInnerHTML={{ __html: icon.html }}
                      ></div>
                    </a>
                  );
                }
              )}
            </div>
            <div className={styles.formContainer}>
              <iframe
                name="dummyframe"
                id="dummyframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                action="/api/form"
                method="post"
                target="dummyframe"
                onSubmit={handleSubmit}
              >
                <h2>Let&apos;s work together!</h2>
                <div className={styles.formRow}>
                  <div className={styles.inputData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <div className={styles.underline}></div>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.inputData}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <div className={styles.underline}></div>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.textArea}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      rows={8}
                      cols={80}
                      required
                      id="message"
                      name="message"
                    ></textarea>
                    <br />
                    <div className={styles.underline}></div>
                  </div>
                </div>
                <span id="submitted" style={messageStyle}>
                  Your message has been sent!
                </span>
                <div className={styles.formRow}>
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
          <a href="#home">
            <div className={styles.toTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
              <p>Back to Top</p>
            </div>
          </a>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Hank Berger. All rights reserved.
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
