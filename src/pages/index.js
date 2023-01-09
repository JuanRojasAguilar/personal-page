import Head from 'next/head'
import Image from 'next/image';
import tinyMe from '@icons/tinyMe.jpg'
import Styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>JuanDeveloper</title>
      </Head>
      <main className={Styles.mainHome}>
        <div className={Styles.presentation}>
          <h1>Who am I?</h1>
          <p>
            I'm a colombian developer who likes to do easy code with excelent performance and maintainability. <br />
            I consider myself a great team player with high autonomy so you can rely on me to do the work and also to understand the goals and flow of the team so you don't have to worry about things like communication, interpersonal relations or proactivity because those are my insignias. You got a solution that i can develop!
          </p>
        </div>
        <picture className={Styles.picture}>
          <Image
            src={tinyMe}
            // fill
            alt="A photo of me"
            className={Styles.photo}
            sizes='30vw, 35vh'
            />
        </picture>
      </main>
    </>
  )
}
