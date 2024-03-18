
import { useGetBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";

export function Allblogs(){

  const {blogs, loading} = useGetBlogs();
  console.log(blogs)

  const sortedBlogs = blogs.slice().sort((a,b)=>{
    const dateA = a.createdAt ? new Date(a.createdAt) : null;
    const dateB = b.createdAt ? new Date(b.createdAt) : null;

    if(!dateA || !dateB){
        return 0;
    }
    return dateB.getTime() - dateA.getTime();
  })

  const navigate = useNavigate()


    if(loading){
        return <div>
            Loading....
        </div>
    }

    function clickHandler(id:string){
        navigate(`/blog/${id}`)
    }

    return <div className="w-[85%] mx-auto flex pt-5">
        {/* left div */}
        <div className="w-[60%] flex flex-col gap-5">
            {sortedBlogs.filter(filteredPost => filteredPost.published === true).
            map(post => <div onClick={()=> clickHandler(post.id)} className=" p-4 cursor-pointer">
                <p className=" text-sm">{post.author.name}</p>
                <p className=" text-xl font-bold">{post.title}</p>
                <p className=" text-sm text-slate-500">{post.content.length <= 50 ? post.content : post.content.substring(0, 200)+"..."}</p>
            </div>)}
        </div>
        {/* right div */}
        <div className="w-[40%] p-6 flex flex-col gap-3">
            <p>Discover more of what matters to you</p>
            <div className="flex flex-wrap gap-3">
                <p className=" text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Programming</p>
                <p className="text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Data Science</p>
                <p className="text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Technology</p>
                <p className="text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Self Improvement</p>
                <p className="text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Writing</p>
                <p className="text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Relationships</p>
                <p className="text-sm font-light bg-slate-200 p-2 pl-3 pr-3 rounded-3xl">Machine Learning</p>
            </div>
        </div>
    </div>
}