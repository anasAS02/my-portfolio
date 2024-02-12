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
    const projectId = params.id;
    const [project, setProject] = useState<projectData>();
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        fetchProject(GET_PROJECT + projectId).then((data) => {setProject(data); setLoading(false)});
    }, [projectId])
    return(
    <ThemeProvider enableSystem={true} attribute='class'>
        <main>
            <Header />
            {
            loading ?            
            <div className="h-screen relative items-center block p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20 text-center">Loading ...</h5>
            <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            </div>
            </div>
            :
            project &&
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
                            {project.tools.map((tool, i) => <p key= { i } className='p-2 duration-200 bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-black dark:text-white rounded-md'>{tool}</p>)}
                        </span>
                    </span>
                    {project.test.length > 0 &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Fake Payment for test</h2>
                            <span className='flex flex-col items-start gap-5'>
                                {project.test.map((tst, i) => <p key={ i } className='text-xl max-md:text-sm text-blue-400 dark:text-yellow-500'>{tst}</p>)}
                            </span>
                        </span>
                    }
                    {project.title === 'Okko Hotels' &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Admin Account</h2>
                            <span className='flex items-center gap-5'>
                                <p className='text-xl max-md:text-sm text-blue-400 dark:text-yellow-500'>admin@gmail.com - 11111111 </p>
                            </span>
                        </span>
                    }
                    {project.title === 'Audiophile' &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Admin Account</h2>
                            <span className='flex items-center gap-5'>
                                <p className='text-xl max-md:text-sm text-blue-400 dark:text-yellow-500'>admin@gmail.com - 1111 </p>
                            </span>
                        </span>
                    }
                    {project.title === 'AS-Shop' &&
                        <span className='flex flex-col gap-4 mt-10'>
                            <h2 className='text-2xl'>Admin Account</h2>
                            <span className='flex items-center gap-5'>
                                <p className='text-xl max-md:text-sm text-blue-400 dark:text-yellow-500'>asShop660@gmail.com - 00000000 </p>
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