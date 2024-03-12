import { useActionData, useLocation, useNavigate } from "react-router-dom";
import { BlogCard } from "../components/BlogCard"
import { GenNavbar } from "../components/GenNavbar"
import { useGetBlogs } from "../hooks";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../store/atom";
import { useEffect } from "react";
import { Loading } from "../components/Loading";



export const Blogs = () => {
    
    const [username, setUsername] = useRecoilState(userAtom)
    console.log("username is" + username)

    const {blogs, loading} = useGetBlogs();

    const sortedBlogs = blogs.slice().sort((a, b) => {
        // Convert createdAt to Date objects
        const dateA = a.createdAt ? new Date(a.createdAt) : null;
        const dateB = b.createdAt ? new Date(b.createdAt) : null;
    
        // Handle cases where createdAt is undefined
        if (!dateA || !dateB) {
            return 0; // Return 0 to maintain the order unchanged
        }
    
        // Compare dates for sorting
        return dateB.getTime() - dateA.getTime();
    });

    useEffect(()=>{
        const storedUsername = localStorage.getItem('username');
        if(storedUsername){
            setUsername(storedUsername)
        }
    },[])

    const navigate = useNavigate();

    console.log(blogs)
    console.log(loading)

    if(loading){
        return <div>
            <Loading/>
        </div>
    }

    return <div className="w-full">
        <GenNavbar onclick={()=> navigate("/create")} isCreate = {true} user = {username}/>
        {sortedBlogs.map(blog => <BlogCard key={blog.id} id={blog.id} user= {username} author={blog.author.name} title= {blog.title} content = {blog.content} />)}
    </div>
}