import { useNavigate } from "react-router-dom";
import { BlogCard } from "../components/BlogCard"
import { GenNavbar } from "../components/GenNavbar"
import { useGetBlogs } from "../hooks";

// interface Blogs {
//     author: string,
//     id: string
//     title: string,
//     content: string
// }

export const Blogs = () => {

    const {blogs, loading} = useGetBlogs();

    const navigate = useNavigate();

    console.log(blogs)
    console.log(loading)

    if(loading){
        return <div>
            Loading.......
        </div>
    }

    return <div className="w-full">
        <GenNavbar onclick={()=> navigate("/create")} isCreate = {true} user = "Krishna"/>
        {blogs.map(blog => <BlogCard key={blog.id} id={blog.id} author={blog.author.name} title= {blog.title} content = {blog.content} />)}
    </div>
}