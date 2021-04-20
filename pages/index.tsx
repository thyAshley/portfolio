import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GithubFilled, LinkedinFilled, MailOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ashley Teo</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.name}>
            <h1 className={styles.animateTop}>
              <span className={styles.firstName}>Ashley</span>
              <span className={styles.lastName}> Teo</span>
            </h1>
            <p className={styles.title}>Fullstack Engineer</p>

            <div className={styles.external_links}>
              <a
                href="https://www.linkedin.com/in/ashley-teo-64b18a135/"
                target="_blank"
              >
                <LinkedinFilled
                  className={[styles.icon, styles.linkedin__icon].join(" ")}
                />
              </a>
              <a href="https://github.com/thyAshley" target="_blank">
                <GithubFilled
                  className={[styles.icon, styles.github__icon].join(" ")}
                />
              </a>
              <a href="mailto:thy.ashley@gmail.com'">
                <MailOutlined
                  className={[styles.icon, styles.mail__icon].join(" ")}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
