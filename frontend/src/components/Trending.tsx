import { TrendingPostCard } from "./TendingPostCard";
import { IoIosTrendingUp } from "react-icons/io";
import { useGetBlogs } from "../hooks";


// interface Post {
//     id?: string
//     title?: string,
//     content? : string,
//     published? : boolean
//     author: {
//         name: string
//     }
//     count: number,
//     date?: string
// }

export function Trending(){

    // const [trendingPosts , setTrendingPosts] = useState<Post[]>([]);
    let count:number  = 1;

    // async function getallpost(){
    //     try{
    //         const res = await axios.get(`https://backend.krishsarma03.workers.dev/api/v1/post`)
    //         console.log(res.data.allPosts)
    //         setTrendingPosts(res.data.allPosts)
    //     }
    //     catch(err){
    //         console.log(err);
    //         return;
    //     }   
    // }
    // useEffect(()=>{
    //     getallpost();
    // },[])

    const {blogs} = useGetBlogs();
  console.log(blogs)

  const sortedBlogs = blogs.slice().sort((a,b)=>{
    const dateA = a.createdAt ? new Date(a.createdAt) : null;
    const dateB = b.createdAt ? new Date(b.createdAt) : null;

    if(!dateA || !dateB){
        return 0;
    }
    return dateB.getTime() - dateA.getTime();
  })

    return <div className="w-full border-b border-black border-opacity-5">
        <div className="w-[85%] mx-auto p-2 pt-8 pb-8">
            <div className=" flex items-center gap-2">
            <IoIosTrendingUp/>
            <p className=" text-md font-semibold">Trending on medium</p>
            </div>
            
            <div className="flex flex-wrap justify-center">
                {sortedBlogs.filter(posts => posts.published === true).slice(0, 6).
                map(post => <TrendingPostCard key={post.id} count = {count++}  id={post.id} author={post.author} title= {post.title} content = {post.content} created = {post.createdAt} />)}   
            </div>
        </div>
        
    </div>
}