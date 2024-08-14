'use client'

import About from "./Components/About";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import { ThemeProvider } from 'next-themes';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const sections = document.querySelectorAll('section');
      const links = document.querySelectorAll('nav a');

      addEventListener('scroll', () => {
        sections.forEach((sec) => {
          const top = window.scrollY;
          const offset = sec.offsetTop - 150;
          const height = sec.offsetHeight;

          if (top >= offset && top < offset + height) {
            sec.classList.remove('opacity-25');
            sec.classList.add('opacity-100');
            links.forEach((link) => {
              const sectionId = sec.getAttribute('id');
              if (sectionId) {
                if (link.classList.contains(sectionId)) {
                  link.classList.add('active');
                } else {
                  link.classList.remove('active');
                }
              }
            });
          }
        });
      });
    }
  }, []);


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