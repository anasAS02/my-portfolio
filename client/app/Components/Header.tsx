import Link from "next/link";
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function Header(){
    const { theme, setTheme } = useTheme();
    const [ darkMode, setDarkMode] = useState<boolean>(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        darkMode ? setTheme('dark') : setTheme('lite');
    }

    
    const scroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
        return(
        <nav className='bg-slate-100 dark:bg-zinc-900 p-5 flex items-center justify-center fixed top-0 w-full z-50'>
            <div className='flex items-center gap-5 text-xl text-black dark:text-white'>
                <button
                onClick={toggleDarkMode}
                className={`${
                    darkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-black'
                } p-2 rounded-full`}
                >
                <FontAwesomeIcon icon={!darkMode ? faSun : faMoon} />
                </button>
                <Link href='/' className='home duration-200 hover:text-yellow-500 max-md:text-sm' onClick={() => scroll('home')}>Home</Link>
                <Link href='/' className='about duration-200 hover:text-yellow-500 max-md:text-sm' onClick={() => scroll('about')}>About</Link>
                <Link href='/' className='projects duration-200 hover:text-yellow-500 max-md:text-sm' onClick={() => scroll('projects')}>Projects</Link>
                <Link href='/' className='contact duration-200 hover:text-yellow-500 max-md:text-sm' onClick={() => scroll('contact')}>Contact</Link>
            </div>
        </nav>
    )
}