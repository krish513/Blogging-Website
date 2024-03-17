import { useNavigate } from "react-router-dom";


interface TrendingPostCardProps {
    count: number
    id?: string;
    title?: string;
    content: string;
    author: {
        name: string
    },
    created?: string
}

export function TrendingPostCard({title,author,id,count,content,created}: TrendingPostCardProps){

    const navigate = useNavigate()
    function clickHandler(id:string | undefined){
        navigate(`/blog/${id}`)
    }

    let formattedDate: string | null = null; // Initialize formattedDate as null initially

  if (created) {
    const date = new Date(created);
    formattedDate = date.toLocaleDateString('en-US', {
      month: 'short', // Display month as a short name (e.g., Mar)
      day: '2-digit', // Display day as two digits (e.g., 13)
      year: 'numeric', // Display year as four digits (e.g., 2024)
    });
  }

    return <div onClick={()=> clickHandler(id)} className="flex gap-3 w-[33%] pt-5 pb-3 cursor-pointer">
        <p className=" text-3xl text-slate-200">0{count}</p>
        <div className=" pt-1.5">
            <div className="flex gap-2">
                <div className=" bg-black text-slate-400 rounded-full w-6 h-6 flex justify-center text-sm items-center">{author.name[0]}</div>
                <p className="text-xs flex items-center">{author.name}</p>
            </div>
            <p className=" font-semibold text-base">{title}</p>
            <div className="flex gap-2 items-center">
                <span className=" text-sm text-slate-400 ">{formattedDate}</span>
                <div className="flex justify-center items-center h-0.5 w-0.5 bg-slate-400 rounded-full"></div>
                <span className=" text-sm text-slate-400">{Math.ceil(content.length / 1000) === 1 ? Math.ceil(content.length / 1000) + " minute read" : Math.ceil(content.length / 1000) + " minutes read"}</span>
            </div>
        </div>
        
    </div>
}