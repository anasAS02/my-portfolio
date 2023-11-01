'use client'

import { GET_PROJECT } from "@/app/Utils/Apis";
import { fetchProject } from "@/app/Utils/FetchProject";
import { useEffect, useState } from "react";
import {projectData} from '@/app/Utils/FetchProjects';
import Header from "@/app/Components/Header";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import Footer from "@/app/Components/Footer";

export default function project({params}: any){
    const [project, setProject] = useState<projectData>()
    const projectId = params.id;
    useEffect(() => {
        fetchProject(GET_PROJECT + projectId).then((data) => setProject(data[0]));
    }, [projectId])
    return(
    <ThemeProvider enableSystem={true} attribute='class'>
        <main>
            <Header />
            {project &&
            <section>
                <div className='flex flex-col items-center gap-10 text-center p-10 mt-48'>
                    <h2 className='text-4xl'>{project.title}</h2>
                    <Link target={"_blank"} href={project?.liveLink} className='p-5 rounded-lg duration-200 bg-yellow-500 hover:bg-yellow-400 text-black'>Live Link</Link>
                    <img src={`${project.img}.png`} alt={project.title} className='w-full' />
                </div>
                <div className='p-10'>
                    <span className='flex flex-col gap-4'>
                        <h2 className='text-2xl'>{project.title}</h2>
                        <p className='text-xl text-gray-950 dark:text-slate-300'>{project.desc}</p>
                    </span>
                    <span className='flex flex-col gap-4 mt-10'>
                        <h2 className='text-2xl'>Tools Used</h2>
                        <span className='flex items-center justify-start gap-5 flex-wrap'>
                            {project.tools.map((tool) => <p className='p-2 duration-200 bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-black dark:text-white rounded-md'>{tool}</p>)}
                        </span>
                    </span>
                    {project.test.length > 0 &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Fake Payment for test</h2>
                            <span className='flex flex-col items-start gap-5'>
                                {project.test.map((tst) => <p className='text-xl text-blue-400 dark:text-yellow-500'>{tst}</p>)}
                            </span>
                        </span>
                    }
                    {project.title === 'Okko Hotels' &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Admin Account</h2>
                            <span className='flex items-center gap-5'>
                                <p className='text-xl text-blue-400 dark:text-yellow-500'>admin@gmail.com - 11111111 </p>
                            </span>
                        </span>
                    }
                    {project.title === 'Audiophile' &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Admin Account</h2>
                            <span className='flex items-center gap-5'>
                                <p className='text-xl text-blue-400 dark:text-yellow-500'>admin@gmail.com - 1111 </p>
                            </span>
                        </span>
                    }
                    <span className='flex flex-col gap-4 mt-10'>
                        <h2 className='text-2xl'>Source Code</h2>
                        <span className='flex items-center gap-5'>
                            <Link target={"_blank"} href={project.sourceCode} className='p-5 rounded-lg duration-200 bg-yellow-500 hover:bg-yellow-400 hover:-translate-y-2 text-black'>Source Code</Link>
                            <Link href='/' className='p-5 rounded-lg duration-200 bg-black dark:bg-white dark:text-zinc-950 hover:bg-zinc-900 border-yellow-500 hover:-translate-y-2 text-white'>Go Back</Link>
                        </span>
                    </span>
                </div>
            </section>
            }
            <Footer />
        </main>
    </ThemeProvider>
    )
}