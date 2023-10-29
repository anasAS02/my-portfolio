export default function Contact(){
    return(
        <main id='contact' className='flex flex-col items-center justify-center gap-10 mt-16'>
            <h2 className='underline underline-offset-8 text-5xl text-center'>CONTACT ME</h2>
            <form className='flex flex-col items-center justify-center gap-10'>
                <input autoFocus type='text' placeholder='Your name' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <input type='email' placeholder='Your email' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <input type='text' placeholder='Subject' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <textarea placeholder='Message' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <input type='submit' value='Send Message' className='duration-300 bg-blue-400 hover:bg-blue-300 text-black p-5 rounded-xl cursor-pointer' />
            </form>
        </main>
    )
}