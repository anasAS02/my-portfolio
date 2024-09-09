'use client'
import { useEffect, useState } from "react";
import axios from 'axios';
import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, LOGIN, UPDATE_PROJECT } from "../Utils/Apis";
import Link from "next/link";
import { fetchProjects, projectData } from "../Utils/FetchProjects";
import { ThemeProvider } from "next-themes";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Cookies from 'js-cookie';

export default function Dashboard(){
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const [projectId, setProjectId] = useState<string>('');
    const [tool, setTool] = useState<string>('');
    const [test, setTest] = useState<string>('');
    const [projects, setProjects] = useState<projectData[]>();
    
    const token = Cookies.get('token');
    useEffect(() => {
        fetchProjects(GET_PROJECTS).then((data) => setProjects(data));
        
        const checkLoggedIn = () => {
            if(token){
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
        }
        checkLoggedIn();
    }, [token, projects]);

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
    
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });

    const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginForm({...loginForm, [name]: value})
    }

    const handleLogin = async(e: React.MouseEvent, loginForm: {userName: string, password: string}) => {
        e.preventDefault();
        setLoading(true);
        try{
            const res = await axios.post(LOGIN, loginForm);
            const token = res.data.data.token;
            Cookies.set('token', token);
            setLoading(false);
        }catch(err: any){
            console.log(err);
            setLoading(false);
            alert(err.response?.data?.message);
        }
    }

    const handleLogout = () => {
        Cookies.remove('token');
        window.location.reload();
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
            setProjects(res.data.data.projects);
        }catch(err: any){
            console.log(err);
            setLoading(false);
            alert(err.response?.data?.message);
        }
    }

    const startUpdate = (id: any) => {
        setUpdate(true);
        const findProject = projects?.find((project) => project._id === id);
        if(findProject){
            setProjectId(findProject?._id || '');
            setForm({
                title: findProject?.title,
                liveLink: findProject?.liveLink,
                sourceCode: findProject?.sourceCode,
                img: findProject?.img,
                desc: findProject?.desc,
                tools: findProject?.tools,
                test: findProject?.test
            });
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const handleUpdate = async(e: React.MouseEvent, form: projectData) => {
        e.preventDefault();
        setLoading(true);
        try{
            const res = await axios.put(UPDATE_PROJECT + projectId, form);
            setLoading(false);
            setUpdate(false);
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
            setProjects(res.data.data.projects);
        }catch(err: any){
            console.log(err);
            setLoading(false);
            alert(err.response?.data?.message);
        }
    }

    const handleDelete = async(id: any) => {
        setLoading(true);
        try{
            const res = await axios.delete(DELETE_PROJECT + id);
            setProjects(res.data.data.projects);
            alert('Done');
            setProjects(res.data.data.projects);
        }catch(err: any){
            console.log(err);
            alert(err.response?.data?.message);
        }
    }

    return(
        <ThemeProvider enableSystem={true} attribute='class'>
            <main className='flex flex-col items-center gap-20'>
                <Header />
                {!isLoggedIn ?
                    <div className='min-h-screen p-10 flex flex-col items-center justify-center gap-10 mt-48'>
                    <input autoFocus type='text' name='userName' value={loginForm.userName} onChange={(e) => handleLoginFormChange(e)} placeholder='UserName' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    <input type='password' name='password' value={loginForm.password} onChange={(e) => handleLoginFormChange(e)} placeholder='Password' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    {loading ?
                        <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    :
                    <button onClick={(e) => handleLogin(e, loginForm)} type='submit' className='duration-300 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-xl cursor-pointer'>Login</button>
                    }
                </div>
                :
                <>
                <button onClick={handleLogout} className='mt-36 duration-200 p-3 rounded-md bg-yellow-500 hover:bg-yellow-400 text-xl text-white'>Logout</button>
                <div className='p-10 flex flex-row flex-wrap items-center justify-start gap-10'>
                    <input autoFocus type='text' name='title' value={form.title} onChange={(e) => handleChange(e)} placeholder='Title' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    <input type='text' name='liveLink' value={form.liveLink} onChange={(e) => handleChange(e)} placeholder='Live Link' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    <input type='text' name='sourceCode' value={form.sourceCode} onChange={(e) => handleChange(e)} placeholder='Source Code' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    <input type='text' name='img' value={form.img} onChange={(e) => handleChange(e)} placeholder='img' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    <input type='text' name='desc' value={form.desc} onChange={(e) => handleChange(e)} placeholder='desc' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                    <span className='flex items-center gap-5'>
                        <input type='text' name='tools' id='tools' value={tool} onChange={(e) => handleToolsChange(e)} placeholder='Tools' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                        <button onClick={handleTools} className='duration-200 text-black dark:text-white hover:text-yellow-500'>Add</button>
                    </span>
                    <span className='flex items-center gap-5'>
                        <input type='text' id='test' name='test' value={test} onChange={(e) => handleTestChange(e)} placeholder='Test' className='bg-slate-200 dark:bg-zinc-700 dark:text-white text-black p-3 border-none outline-none rounded-md' />
                        <button onClick={handleTest} className='duration-200 text-black dark:text-white hover:text-yellow-500'>Add</button>
                    </span>                    
                    {loading ?
                        <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    :
                    <button onClick={update? (e) => handleUpdate(e, form) : (e) => addProject(e, form)} type='submit' className='duration-300 bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-xl cursor-pointer'>{update? 'Update' : 'Add Project'}</button>
                    }
                </div>
                <div className='p-10 grid grid-cols-1 gap-10 w-full'>
                    {projects && projects.map((project: projectData) => (
                        <span className='flex items-center gap-5' key={project._id}>
                            <img className='w-2/4' src={`${project.img}.png`} alt={project.title}/>
                            <span className='flex flex-col gap-3'>
                                <Link target={"_blank"} className='duration-200 text-2xl dark:text-white hover:text-yellow-500' href={`project/${project._id}`}>{project.title}</Link>
                                <span className='flex gap-3 items-center'>
                                    <FontAwesomeIcon onClick={() => startUpdate(project._id)} icon={faPenToSquare} className='text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-400 text-lg duration-200 cursor-pointer' />
                                    <FontAwesomeIcon onClick={() => handleDelete(project._id)} icon={faTrash} className='text-black dark:text-white hover:text-red-500 dark:hover:text-red-500 text-lg duration-200 cursor-pointer' />
                                </span>
                            </span>
                        </span>
                    ))}
                </div>
                </>
                }
                <Footer />
            </main>
        </ThemeProvider>
    )
}