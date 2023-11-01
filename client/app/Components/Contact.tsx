'use client'

import axios from "axios";
import { useState } from "react"
import { SEND_EMAIL } from "../Utils/Apis";

export default function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    interface formData{
        name: string,
        email: string,
        subject: string,
        message: string
    }

    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
    }

    const sendEmail = async (e: React.FormEvent, form: formData) => {
        e.preventDefault();
        setLoading(true);
        try{
            await axios.post(SEND_EMAIL, form);
            setLoading(false);
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setError(null);
            setTimeout(() => {
                setSuccess('Email sent successfully');
            }, 3000)
            setSuccess(null);
        }catch(err: any){
            setError(err.response?.data?.message);
            console.log(err)
            setLoading(false);
        }
    }

    return(
        <section id='contact' className='opacity-25 duration-300 flex flex-col items-center justify-center gap-10 mt-16'>
            <h2 className='underline underline-offset-8 text-5xl max-md:text-2xl text-center'>CONTACT ME</h2>
            <form className='flex flex-col items-center justify-center gap-10' onSubmit={(e) => sendEmail(e, form)}>
                <input autoFocus type='text' name='name' value={form.name} onChange={(e) => handleChange(e)} placeholder='Your name' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <input type='email' name='email' value={form.email} onChange={(e) => handleChange(e)} placeholder='Your email' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <input type='text' name='subject' value={form.subject} onChange={(e) => handleChange(e)} placeholder='Subject' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                <textarea name='message' value={form.message} onChange={(e) => handleChange(e)} placeholder='Message' className='bg-slate-200 text-black p-5 border-none outline-none rounded-md' />
                {loading ?
                    <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                :
                <input type='submit' value='Send Message' className='duration-300 bg-blue-400 hover:bg-blue-300 text-black p-5 max-md:p-2 rounded-xl cursor-pointer' />
                }
                {success && <p className='p-5 bg-black dark:bg-white text-green-600 rounded-md text-center text-lg'>{success}</p>}
                {error && <p className='p-5 bg-black dark:bg-white text-red-600 rounded-md text-center text-lg'>{error}</p>}
            </form>
        </section>
    )
}