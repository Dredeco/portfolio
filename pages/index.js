import Head from 'next/head'
import Contact from './components/Contact'
import Education from './components/Education'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dre.dev - Portfólio</title>
        <meta name="description" content="Portfólio de André Fernandes — Full-stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth bg-background">
        <Main />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}
