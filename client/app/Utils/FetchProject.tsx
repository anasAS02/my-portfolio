import axios from "axios";

export interface projectData{
    _id?: string;
    title: string;
    liveLink: string;
    sourceCode: string;
    img: string;
    desc: string;
    tools: string[];
    test: string[];
}

export const fetchProject = async(url: string) => {
    try{
        const res = await axios.get(url);
        const projects = res.data.data;
        return projects;
    }catch(err){
        console.log(err)
    }
}