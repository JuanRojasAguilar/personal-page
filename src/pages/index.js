import Head from 'next/head'
import Styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>JuanDeveloper</title>
      </Head>
      <main className={Styles.mainHome}>
        <h1>Ejemplo</h1>
      </main>
    </>
  )
}
