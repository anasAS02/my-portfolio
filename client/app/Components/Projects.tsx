import Link from "next/link";
import { useEffect, useState } from "react";
import { GET_PROJECTS } from "../Utils/Apis";
import { fetchProjects, projectData } from "../Utils/FetchProjects";

export default function Projects(){
    const [projects, setProjects] = useState<projectData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchProjects(GET_PROJECTS).then((data) => {setProjects(data); setLoading(false)});
    }, [])

    return(
        <section id='projects' className='opacity-25 duration-300 projects flex flex-col items-center justify-center gap-10 mt-16'>
            <h2 className='underline underline-offset-8 text-5xl max-md:text-2xl text-center'>My Projects</h2>
            <div className='flex flex-wrap gap-5 items-center justify-center p-10'>
                {loading ?
                <p className='text-5xl max-md:text-2xl absolute left-2/4 -translate-x-2/4 -translate-y-2/4 animate-pulse'>Loading ...</p>
                :
                projects.map((project: projectData) => (
                    <span className='relative' key={project._id}>
                        <div className='desc flex flex-col items-center'>
                            <Link target={"_blank"} href={`project/${project._id}`} className='p-3 duration-200 text-white text-sm rounded-xl bg-blue-500 hover:bg-blue-400'>View</Link>
                        </div>
                        <img className='rounded-tr-3xl rounded-bl-3xl w-[400px]' src={`${project.img}.png`} alt={project.title} />
                    </span>
                ))}
            </div>
        </section>
    )
}