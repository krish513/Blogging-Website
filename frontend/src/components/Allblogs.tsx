
import { BlogDisplayCard } from "./BlogDisplayCard";
import { useGetBlogs } from "../hooks";

export function Allblogs(){

  const {blogs, loading} = useGetBlogs();
  console.log(blogs)

  if(loading){
    return <div>
        Loading....
    </div>
  }

    return <div className="w-[85%] mx-auto flex">
        {/* left div */}
        <div className="w-[60%] flex flex-col gap-5 border">
            {blogs.filter(filteredPost => filteredPost.published === true).
            map(post => <BlogDisplayCard title = {post.title} content={post.content}/>)}
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