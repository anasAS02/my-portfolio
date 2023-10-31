'use client'

import About from "./Components/About";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { ThemeProvider } from 'next-themes';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {

  const sections = document?.querySelectorAll('section');
  const links = document?.querySelectorAll('nav a');

  addEventListener('scroll', () => {

    sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

      if(top >= offset && top < offset + height){
        sec.classList.add('opacity-100');
        links.forEach((link) => {
          const sectionId = sec.getAttribute('id');
          if(sectionId){
            if(link.classList.contains(sectionId)){
              link.classList.add('active');
            }else{
              link.classList.remove('active');
            }
          }
        })
      }

    })
  })

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <section id='home'>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </ThemeProvider>
  )
}