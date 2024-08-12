import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Landing(){
    return(
        <main className='text-center mt-48 p-10 flex flex-col gap-52'>
            <div className='text-3xl max-md:text-sm max-sm:text-base text-black dark:text-white flex flex-col justify-center items-center gap-12 h-full'>
                <TypeAnimation
                    sequence={[
                        'I\'M Anas, ',
                        300,
                        'I\'M Anas, a Frontend Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{fontSize: '2em', display: 'inline-block'}}
                    repeat={Infinity}
                />
                <p className='text-2xl max-md:text-sm'>I enjoy building new projects daily and constantly strive to learn more.</p>
                <Link href='https://drive.usercontent.google.com/download?id=1zN33NkCsdllMqdrORXE133xM9F2RAAzZ&export=download&authuser=0&confirm=t&uuid=0588b635-c47a-413a-bff5-8d840998ccce&at=APZUnTX52KQyG98-if5jhk-3eBMG:1723466269280'
                className='flex items-center gap-3 duration-300 animate-bounce bg-blue-400 hover:bg-blue-300 text-black p-5 max-md:p-2 rounded-xl cursor-pointer'
                >
                    Download CV
                    <FontAwesomeIcon icon={faAnglesDown} />
                </Link>
            </div>
        </main>
    )
}
