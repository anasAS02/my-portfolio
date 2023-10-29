import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Contact(){
    return(
        <main className='flex flex-col items-center justify-center gap-10 mt-16'>
            <h2 className='underline underline-offset-8 text-5xl text-center'>CONTACT ME</h2>
            <div className='flex items-center gap-5'>
                <Link href='/' target={"_blank"}>
                    <FontAwesomeIcon icon={faLinkedin} className='text-5xl text-black dark:text-white duration-200 hover:text-blue-600  dark:hover:text-blue-600' />
                </Link>
                <Link href='/' target={"_blank"}>
                    <FontAwesomeIcon icon={faGithub} className='text-5xl text-black dark:text-white duration-200 hover:text-orange-600 dark:hover:text-orange-600' />
                </Link>
                <Link href='/' target={"_blank"}>
                    <FontAwesomeIcon icon={faEnvelope} className='text-5xl text-black dark:text-white duration-200 hover:text-red-600 dark:hover:text-red-600' />
                </Link>
            </div>
            <form className='flex flex-col items-center justify-center gap-10'>
                <input autoFocus type='text' placeholder='Your name' className='bg-slate-100 text-black p-5 border-none outline-none rounded-md' />
                <input type='email' placeholder='Your email' className='bg-slate-100 text-black p-5 border-none outline-none rounded-md' />
                <input type='text' placeholder='Subject' className='bg-slate-100 text-black p-5 border-none outline-none rounded-md' />
                <textarea placeholder='Message' className='bg-slate-100 text-black p-5 border-none outline-none rounded-md' />
                <input type='submit' value='Send Message' className='duration-300 bg-blue-400 hover:bg-blue-300 text-black p-5 rounded-xl cursor-pointer' />
            </form>
        </main>
    )
}