'use client'

import About from "./Components/About";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { ThemeProvider } from 'next-themes';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <main>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}