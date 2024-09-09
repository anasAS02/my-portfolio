'use client'

import About from "./Components/About";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { ThemeProvider } from 'next-themes';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <section id='home' className='relative'>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Footer />
        <div className='fixed right-5 bottom-5 flex flex-col justify-center items-center gap-2'>
          <Contact />
        </div>
      </section>
    </ThemeProvider>
  )
}