import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Footer(){
    return(
        <footer id='footer' className='bg-slate-100 dark:bg-zinc-900 text-black dark:text-white text-center p-5 mt-14 flex flex-col items-center justify-center gap-5 w-full'>
                <span className='flex gap-6'>
                    <Link href='https://www.linkedin.com/in/anas-as02/' target={"_blank"}>
                        <FontAwesomeIcon icon={faLinkedin} className='text-4xl max-md:text-2xl text-black dark:text-white duration-200 hover:text-blue-600  dark:hover:text-blue-600' />
                    </Link>
                    <Link href='https://github.com/anasAS02' target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub} className='text-4xl max-md:text-2xl text-black dark:text-white duration-200 hover:text-orange-600 dark:hover:text-orange-600' />
                    </Link>
                    <Link href='mailto:astalaat3@gmail.com' target={"_blank"}>
                        <FontAwesomeIcon icon={faEnvelope} className='text-4xl max-md:text-2xl text-black dark:text-white duration-200 hover:text-red-600 dark:hover:text-red-600' />
                    </Link>
                </span>
            <p>Copyrights reserved to <span className='font-bold text-red-500'>Anas</span> - 2023&copy;</p>
        </footer>
    )
}