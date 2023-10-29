export default function About(){
    return(
        <main className='text-center text-black dark:text-white flex flex-col items-center'>
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
                    <div className='flex justify-center items-start flex-wrap gap-2'>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                        <img className='w-24' src='https://quintagroup.com/cms/js/js-image/javascript-logo.png/@@images/8c64c4b9-4e1c-4c26-9b5e-78d85e3130a9.png' alt='skill'/>
                    </div>
                </span>
            </div>
            <button className='mt-14 duration-300 bg-blue-400 hover:bg-blue-300 text-black p-5 rounded-xl'>Download Resume</button>
        </main>
    )
}