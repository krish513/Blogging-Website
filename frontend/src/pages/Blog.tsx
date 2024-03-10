import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { GenNavbar } from "../components/GenNavbar";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";



export const Blog = () =>{
    const {id} = useParams<{id?: string}>()
    const location = useLocation();

    useEffect(() => {
        if ( location.state ) {
            const { user } = location.state;
            setUser(user)
        }
    }, [location.state]);

    const {loading, blog} = useBlog(id || "");
    const [user, setUser] = useState("")
    console.log(blog?.author)
    
    const navigate = useNavigate();

    if(loading){
        return <div>
            Loading....
        </div>
    }

    

    const paragraphs = blog?.content.split("\n\n") || [];

    return <div className="w-full">
        <GenNavbar onclick={()=> navigate("/create")} isCreate = {true} user = {user}/>
        <div className="w-[85%] mx-auto flex">
            <div className="w-[70%] p-5 flex flex-col gap-2">
                <p className=" text-4xl font-bold">{blog?.title}</p>   
                <div className="flex gap-3">
                    <p className="text-sm text-slate-400">Published on</p>
                    {/* conditional edit functionality added, logged in user can edit only his blogs  */}
                    {user === blog?.author.name && (
                        <Link 
                            to={`/edit/${id}`}
                            state={{ blog: blog, user }}>
                        <CiEdit className=" text-xl cursor-pointer"/>
                        </Link>)}
                </div>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="w-[30%] p-5 flex flex-col gap-2">
                <p>Author</p>
                <div className="flex gap-4 items-center">
                    <div className=" h-5 w-5 bg-slate-200 rounded-full flex items-center"></div>
                    <div>
                        <p className=" text-xl font-bold">{blog?.author.name}</p>
                        <p className=" text-sm text-slate-400">Author details</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}