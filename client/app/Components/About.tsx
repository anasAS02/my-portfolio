import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faGit, faGithub, faHtml5, faNode, faReact, faSass, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import tailwind from '../assets/tailwindCSS.png';
import typeScript from '../assets/ts.png';
import mongoDB from '../assets/mongo.png';
import expressJS from '../assets/exJS.png';
import nextJS from '../assets/nextjs.png';
import { Fade, Slide } from "react-awesome-reveal";

export default function About(){
    return(
        <Fade>
            <section id='about' className='duration-300 text-center text-black dark:text-white flex flex-col items-center mt-48'>
                <h2 className='underline underline-offset-8 text-5xl max-md:text-2xl'>ABOUT</h2>
                <div className='flex flex-col items-center justify-center gap-10 mt-14 p-5'>
                        <p className='text-2xl leading-10 text-blue-500 dark:text-yellow-500 max-md:text-sm'>
                        I am a frontend developer using React.js and Next.js. Here you will find several projects I've worked on, showcasing my skills in HTML, CSS, Bootstrap, Tailwind CSS, Sass, JavaScript, TypeScript, React.js, Next.js, MongoDB, Node.js, and Express.js.
                        In addition to that, I am proficient in using Git, Github I am always eager to learn and improve my skills, not only in the mentioned technologies but also in others, as I have a strong willingness to learn and grow further.
                        </p>
                        <Slide>
                            <div className='flex justify-center items-center flex-wrap gap-5 text-8xl max-md:text-3xl'>
                                <FontAwesomeIcon className='duration-200 text-orange-500 hover:text-orange-400' icon={faHtml5} />
                                <FontAwesomeIcon className='duration-200 text-blue-500 hover:text-blue-400' icon={faCss3Alt} />
                                <FontAwesomeIcon className='duration-200 text-pink-500 hover:text-pink-400' icon={faSass} />
                                <FontAwesomeIcon className='duration-200 text-purple-800 hover:text-purple-700' icon={faBootstrap} />
                                <Image width={0} height={0} className='w-[100px] max-md:w-[40px]' src={tailwind} alt='tailwind' />
                                <FontAwesomeIcon className='duration-200 text-yellow-400 hover:text-yellow-300' icon={faSquareJs} />
                                <Image width={0} height={0} className='w-[100px] max-md:w-[40px]' src={typeScript} alt='typeScript' />
                                <FontAwesomeIcon className='duration-200 text-blue-400 hover:text-blue-300' icon={faReact} />
                                <Image className='bg-black dark:bg-transparent w-[200px] max-md:w-[80px]' width={0} height={0} src={nextJS} alt='nextJS' />
                                <Image width={0} height={0} src={mongoDB} className='w-[200px] max-md:w-[80px]' alt='mongoDB' />
                                <Image width={0} height={0} src={expressJS} className='w-[200px] max-md:w-[80px]' alt='expressJS' />
                                <FontAwesomeIcon className='duration-200 text-green-400 hover:text-green-300' icon={faNode} />
                                <FontAwesomeIcon className='duration-200 text-orange-600 hover:text-orange-500' icon={faGit} />
                                <FontAwesomeIcon className='duration-200 text-black dark:text-white' icon={faGithub} />
                            </div>
                        </Slide>
                </div>
            </section>
        </Fade>
    )
}