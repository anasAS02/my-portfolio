import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';

export default function Landing(){
    return(
        <main className='text-center mt-48 p-10 flex flex-col gap-52'>
            <div className='text-3xl max-md:text-sm max-sm:text-base text-black dark:text-white'>
                <TypeAnimation
                    sequence={[
                        'I\'M Anas, a React Frontend Developer',
                        1000,
                        'I\'M Anas, a MERN Full Stack Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{fontSize: '2em', display: 'inline-block'}}
                    repeat={Infinity}
                />
                <p className='mt-12 text-2xl max-md:text-sm'>I enjoy building new projects daily and constantly strive to learn more.</p>
            </div>
        </main>
    )
}