import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { GenNavbar } from "../components/GenNavbar";
import { CiEdit } from "react-icons/ci";



export const Blog = () =>{
    const {id} = useParams<{id?: string}>()
    const {loading, blog} = useBlog(id || "");
    console.log(blog?.author)

    const navigate = useNavigate();

    if(loading){
        return <div>
            Loading....
        </div>
    }

    return <div className="w-full">
        <GenNavbar onclick={()=> navigate("/create")} isCreate = {true} user = {blog?.author.name}/>
        <div className="w-[85%] mx-auto flex">
            <div className="w-[70%] p-5 flex flex-col gap-2">
                <p className=" text-4xl font-bold">{blog?.title}</p>   
                <div className="flex gap-3">
                    <p className="text-sm text-slate-400">Published on</p>
                    <CiEdit onClick={()=> navigate('/create')} className=" text-xl cursor-pointer"/>
                </div>
                <p>{blog?.content}</p>
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