'use client'
import { useEffect, useState } from "react";
import axios from 'axios';
import { ADD_PROJECT, GET_PROJECTS } from "../Utils/Apis";
import Link from "next/link";
import { fetchProjects, projectData } from "../Utils/FetchProjects";
import Image from "next/image";

export default function Dashboard(){
    const [loading, setLoading] = useState<boolean>(false)
    const [tool, setTool] = useState<string>('');
    const [test, setTest] = useState<string>('');
    const [projects, setProjects] = useState<projectData[]>();

    useEffect(() => {
        fetchProjects(GET_PROJECTS).then((data) => setProjects(data))
    }, [])

    const [form, setForm] = useState({
        title: '',
        liveLink: '',
        sourceCode: '',
        img: '',
        desc: '',
        tools: [] as string[],
        test: [] as string[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    
    const handleToolsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if(value !== ''){
            setTool(value);
        }
    }
    
    const handleTestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if(value !== ''){
            setTest(value);
        }
    }

    const handleTools = (e: React.MouseEvent) => {
        if(tool){
            setForm((prevForm) => ({ ...prevForm, tools: [...prevForm.tools, tool] }));
            setTool('');
        }
    }
    
    const handleTest = (e: React.MouseEvent) => {
        if(test){
            setForm((prevForm) => ({ ...prevForm, test: [...prevForm.test, test] }));
            setTest('');
        }
    }

    const addProject = async (e: React.MouseEvent, form: projectData) => {
        e.preventDefault();
        console.log(form)
        setLoading(true);
        try{
            const res = await axios.post(ADD_PROJECT, form);
            console.log(res)
            setLoading(false);
            setForm({
                title: '',
                liveLink: '',
                sourceCode: '',
                img: '',
                desc: '',
                tools: [],
                test: []
            });
            alert('Done');
        }catch(err: any){
            console.log(err)
            alert(err.response?.data?.message);
        }
    }

    return(
        <main className='bg-gradient-to-r from-zinc-900 to-zinc-950 dark:bg-gradient-to-r h-screen p-10 flex flex-col items-center'>
            <Link href='/' className='duration-200 text-white hover:text-yellow-500 underline'>Go Back</Link>
                <div className='flex flex-row flex-wrap items-center justify-start gap-10 pt-24'>
                    <input autoFocus type='text' name='title' value={form.title} onChange={(e) => handleChange(e)} placeholder='Title' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                    <input type='text' name='liveLink' value={form.liveLink} onChange={(e) => handleChange(e)} placeholder='Live Link' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                    <input type='text' name='sourceCode' value={form.sourceCode} onChange={(e) => handleChange(e)} placeholder='Source Code' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                    <input type='text' name='img' value={form.img} onChange={(e) => handleChange(e)} placeholder='img' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                    <input type='text' name='desc' value={form.desc} onChange={(e) => handleChange(e)} placeholder='desc' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                    <span className='flex items-center gap-5'>
                        <input type='text' name='tools' id='tools' value={tool} onChange={(e) => handleToolsChange(e)} placeholder='Tools' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                        <button onClick={handleTools} className='duration-200 text-white hover:text-yellow-500'>Add</button>
                    </span>
                    <span className='flex items-center gap-5'>
                        <input type='text' id='test' name='test' value={test} onChange={(e) => handleTestChange(e)} placeholder='Test' className='bg-gray-600 text-white p-3 border-none outline-none rounded-md' />
                        <button onClick={handleTest} className='duration-200 text-white hover:text-yellow-500'>Add</button>
                    </span>                    
                    {loading ?
                        <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    :
                    <button onClick={(e) => addProject(e, form)} type='submit' className='duration-300 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-xl cursor-pointer'>Add Project</button>
                    }
                </div>
                <div className='grid grid-cols-1 gap-10 w-full'>
                    {projects && projects.map((project: projectData) => (
                        <span className='flex items-center gap-5' key={project._id}>
                            <img src={`${project.img}.png`} alt={project.title}/>
                            <Link className='duration-200 text-white hover:text-yellow-500' href={`project/${project._id}`}>{project.title}</Link>
                        </span>
                    ))}
                </div>
        </main>
    )
}