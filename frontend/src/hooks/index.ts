import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface Blogs {
    author: {
        name: string
    },
    id: string
    title: string,
    content: string,
    published?: boolean
}

export const useBlog = (id:string) => {
    const [blog, setBlog] = useState<Blogs>();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/post/blog/${id}`)
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
        axios.get(`${BACKEND_URL}/api/v1/post`)
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