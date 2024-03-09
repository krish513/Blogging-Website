import { useNavigate } from "react-router-dom";


interface TrendingPostCardProps {
    count: number
    id?: string;
    title?: string;
    content?: string;
    author: {
        name: string
    }
}

export function TrendingPostCard({title,author,id,count}: TrendingPostCardProps){

    const navigate = useNavigate()
    function clickHandler(id:string | undefined){
        navigate(`/blog/${id}`)
    }

    return <div onClick={()=> clickHandler(id)} className="flex gap-3 w-[33%] pt-5 cursor-pointer">
        <p className=" text-3xl text-slate-200">0{count}</p>
        <div className=" pt-1.5">
            <div className="flex gap-2">
                <div className=" bg-black text-slate-400 rounded-full w-6 h-6 flex justify-center text-sm items-center">{author.name[0]}</div>
                <p className="text-xs flex items-center">{author.name}</p>
            </div>
            <p>{title}</p>
            <p>19-Jul-2024</p>
        </div>
        
    </div>
}