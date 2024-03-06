import axios from "axios"
import { useEffect, useState } from "react";
import { TrendingPostCard } from "./TendingPostCard";

interface Post {
    title : string,
    content : string,
    published : boolean
}

export function Trending(){

    const [trendingPosts , setTrendingPosts] = useState<Post[]>([]);

    async function getallpost(){
        try{
            const res = await axios.get("https://backend.krishsarma03.workers.dev/api/v1/post")
            console.log(res.data.allPosts)
            setTrendingPosts(res.data.allPosts)
        }
        catch(err){
            console.log(err);
            return;
        }   
    }
    useEffect(()=>{
        getallpost();
    },[])

    return <div className="w-full border-b border-black border-opacity-5">
        <div className="w-[85%] mx-auto p-2 pt-8 pb-8">
            <p>Trending on medium</p>
            <div className="flex flex-wrap justify-center">
                {trendingPosts.filter(posts => posts.published === true).slice(0, 6).
                map(post => <TrendingPostCard title = {post.title} content = {post.content}/> )}
                {}
            </div>
        </div>
        
    </div>
}