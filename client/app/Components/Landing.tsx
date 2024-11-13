import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { Flip } from 'react-awesome-reveal';

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
                <Flip>
                    <Link href='https://drive.usercontent.google.com/download?id=15wyAswjfj4GhMD4r08v_6H3MZCTFU8Ig&export=download&authuser=0&confirm=t&uuid=8ca9d672-de3f-4e31-94c8-c108ac06156b&at=AENtkXZsDX3_3rP8I5SsA76IS1qz:1731516135132'
                    className='flex items-center gap-3 duration-300 dark:bg-white dark:hover:bg-yellow-500 dark:text-blue-500 dark:hover:text-white bg-blue-400 hover:bg-blue-300 text-white p-5 max-md:p-2 rounded-xl cursor-pointer'
                    >
                        Download CV
                        <FontAwesomeIcon icon={faAnglesDown} />
                    </Link>
                </Flip>
            </div>
        </main>
    )
}
