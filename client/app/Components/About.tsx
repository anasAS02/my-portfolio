import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faGit, faGithub, faHtml5, faNode, faReact, faSass, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import tailwind from '../assets/tailwindCSS.png';
import typeScript from '../assets/ts.png';
import mongoDB from '../assets/mongo.png';
import expressJS from '../assets/exJS.png';
import nextJS from '../assets/nextjs.png';
import Image from 'next/image';

export default function About(){
    return(
        <section id='about' className='opacity-25 duration-300 text-center text-black dark:text-white flex flex-col items-center mt-96'>
            <h2 className='underline underline-offset-8 text-5xl'>ABOUT</h2>
            <div className='flex flex-col items-center justify-center gap-16 mt-14'>
                <span className='flex flex-col gap-5 w-2/4'>
                    <h2 className='text-4xl text-blue-500 dark:text-yellow-500'>Get to know me!</h2>
                    <p className='text-xl leading-8'>
                        I am a frontend web developer using ReactJS. I have a passion for creating beautiful and
                        functional user interfaces that provide a seamless browsing experience. I am always looking to improve my skills and stay up-to-date with the latest web development technologies.
                        I am excited to work on new projects and collaborate with other developers
                        to create amazing websites.
                    </p>
                </span>
                <span className='flex flex-col gap-5 w-2/4'>
                    <h2 className='text-4xl text-blue-500 dark:text-yellow-500'>My Skills</h2>
                    <div className='flex justify-center items-center flex-wrap gap-5 text-8xl'>
                        <FontAwesomeIcon className='duration-200 text-orange-500 hover:text-orange-400' icon={faHtml5} />
                        <FontAwesomeIcon className='duration-200 text-blue-500 hover:text-blue-400' icon={faCss3Alt} />
                        <FontAwesomeIcon className='duration-200 text-pink-500 hover:text-pink-400' icon={faSass} />
                        <FontAwesomeIcon className='duration-200 text-purple-800 hover:text-purple-700' icon={faBootstrap} />
                        <Image width={100} height={100} src={tailwind} alt='tailwind' />
                        <FontAwesomeIcon className='duration-200 text-yellow-400 hover:text-yellow-300' icon={faSquareJs} />
                        <Image width={100} height={100} src={typeScript} alt='typeScript' />
                        <FontAwesomeIcon className='duration-200 text-blue-400 hover:text-blue-300' icon={faReact} />
                        <Image className='bg-black dark:bg-transparent' width={200} height={200} src={nextJS} alt='nextJS' />
                        <Image width={200} height={200} src={mongoDB} alt='mongoDB' />
                        <Image width={200} height={200} src={expressJS} alt='expressJS' />
                        <FontAwesomeIcon className='duration-200 text-green-400 hover:text-green-300' icon={faNode} />
                        <FontAwesomeIcon className='duration-200 text-orange-600 hover:text-orange-500' icon={faGit} />
                        <FontAwesomeIcon className='duration-200 text-black dark:text-white' icon={faGithub} />

                    </div>
                </span>
            </div>
            <button className='mt-14 duration-300 bg-blue-400 hover:bg-blue-300 text-black p-5 rounded-xl'>Download Resume</button>
        </section>
    )
}