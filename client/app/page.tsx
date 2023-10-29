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
      <main id='home'>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}