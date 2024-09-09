'use client'

import axios from "axios";
import { useState } from "react"
import { SEND_EMAIL } from "../Utils/Apis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Flip } from "react-awesome-reveal";

export default function Contact(){
    const [showContactMe, setShowContactMe] = useState<boolean>(false);

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
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setError(null);
            setSuccess('Email sent successfully');
            setTimeout(() => {
                setSuccess(null);
            }, 3000)
        }catch(err: any){
            setError(err.response?.data?.message);
            console.log(err)
        }finally{
            setLoading(false);
        }
    }

    return(
        showContactMe ? 
        <form className='w-fit bg-blue-100 dark:bg-gray-700 p-5 rounded-2xl flex flex-col items-center justify-center gap-4' onSubmit={(e) => sendEmail(e, form)}>
            <span className='relative ml-auto p-5 bg-blue-200 dark:bg-gray-600 rounded-full hover:bg-red-500 hover:text-white text-red-500 cursor-pointer' onClick={() => setShowContactMe(false)}>
                <FontAwesomeIcon icon={faXmark} className='absolute right-3 top-3 w-4 h-4 duration-200' />
            </span>
            <input required autoFocus type='text' name='name' value={form.name} onChange={(e) => handleChange(e)} placeholder='Your name' className='bg-slate-200 text-black px-8 py-3 border-none outline-none rounded-md' />
            <input required type='email' name='email' value={form.email} onChange={(e) => handleChange(e)} placeholder='Your email' className='bg-slate-200 text-black px-8 py-3 border-none outline-none rounded-md' />
            <input required type='text' name='subject' value={form.subject} onChange={(e) => handleChange(e)} placeholder='Subject' className='bg-slate-200 text-black px-8 py-3 border-none outline-none rounded-md' />
            <textarea required name='message' value={form.message} onChange={(e) => handleChange(e)} placeholder='Message' className='bg-slate-200 text-black px-8 py-3 border-none outline-none rounded-md' />
            {loading ?
                <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            :
            <input type='submit' value='Send Message' className='duration-300 bg-blue-400 hover:bg-blue-300 text-black px-8 py-3 max-md:p-2 rounded-xl cursor-pointer' />
            }
            {success && <p className='px-8 py-3 bg-blue-200 dark:bg-white text-green-600 rounded-md text-center text-lg'>{success}</p>}
            {error && <p className='px-8 py-3 bg-black dark:bg-white text-red-600 rounded-md text-center text-lg'>{error}</p>}
        </form>
        :
        <Flip>
            <div className='flex flex-col justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faComment} className='cursor-pointer w-10 h-10 duration-200 hover:text-blue-500 dark:hover:text-yellow-500 dark:text-white text-black' onClick={() => setShowContactMe(true)} />
                <p className='dark:text-white font-bold text-lg uppercase select-none'>Contact me</p>
            </div>
        </Flip>
    )
}