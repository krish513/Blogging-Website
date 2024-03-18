import axios from "axios";
import { useEffect, useState } from "react"

export interface Blogs {
    author: {
        name: string
    },
    id: string
    title: string,
    content: string,
    published?: boolean,
    createdAt?: string;
}

export const useBlog = (id:string) => {
    const [blog, setBlog] = useState<Blogs>();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://backend.krishsarma03.workers.dev/api/v1/post/blog/${id}`)
            .then(response=> {
                setBlog(response.data.blog)
                setLoading(false)
            })
    },[id])

    return  {
        blog,
        loading
    }
}

export const useGetBlogs = () => {
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://backend.krishsarma03.workers.dev/api/v1/post`)
            .then(response=> {
                setBlogs(response.data.allPosts)
                setLoading(false)
            })
    },[])

    return  {
        blogs,
        loading
    }
} 

export const useAuth = () => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://backend.krishsarma03.workers.dev/api/v1/user`,{
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
                console.log("db call success")
                if(response.data.msg === "Authentication failed"){
                    setLoading(false)
                    setIsLoggedin(false);
                    return;
                }
                setIsLoggedin(true);
                setLoading(false)  
        })
    },[])

    return {
        loading,
        isLoggedin
    }
}