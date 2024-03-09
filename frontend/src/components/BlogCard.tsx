import { useNavigate } from "react-router-dom"

interface BlogCardProps {
    id: string
    author: string,
    title: string,
    content: string,
    user: string
}



export const BlogCard = ({id, author,title,content,user}:BlogCardProps) => {

    const navigate = useNavigate()

    function clickHandler(id:string){
        navigate(`/blog/${id}`, {state: {user}})
    }

    return <div className="w-[85%] flex mx-auto">
            <div onClick={()=> clickHandler(id)} className="flex flex-col gap-3 max-w-[50%] p-5 cursor-pointer">
                <div className="flex items-center gap-2">
                    <div className=" bg-slate-300 rounded-full w-6 flex justify-center items-center">
                        {author[0]}
                    </div>
                    <span className=" text-sm">
                        {author}
                    </span>
                    <div className="flex justify-center items-center h-0.5 w-0.5 bg-slate-400 rounded-full">
                
                    </div>
                    <span className=" text-sm text-slate-400">
                        Jul 19,2023
                    </span>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-2xl font-bold">{title}</p>
                    <p className="text-sm text-slate-700">{content.length > 150 ? content.substring(0,150)+ "..." : content}</p>
                </div>
                <div className=" pt-3 pb-3 flex justify-between items-center">
                    <p className=" text-sm text-slate-400">{Math.ceil(content.length / 100) === 1 ? Math.ceil(content.length / 100) + " minute read" : Math.ceil(content.length / 100) + " minutes read"}</p>
                   
                </div>
            </div> 
    </div>
}