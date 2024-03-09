import { useEffect, useState } from "react"
import { GenNavbar } from "../components/GenNavbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const EditBlog = () => {
    const {id} = useParams<{id?: string}>()
    console.log(id)
    const [input, setInput] = useState({
        title: "",
        content: ""
    })
    const location = useLocation();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.blog) {
            const { title, content } = location.state.blog;
            setBlog(location.state.blog);
            setInput({title, content})
        }
    }, [location.state]);
  

    async function publishHandler(){
        try{
            await axios.put(`${BACKEND_URL}/api/v1/post/blog`,{
                id: id,
                title: input.title,
                content: input.content
            },{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            navigate(`/blog/${id}`)
        }
        catch(err){
            console.log(err)
        }  
    }

    return <div>
        <GenNavbar isCreate = {false} onclick={publishHandler} />
        <div className="w-[85%] mx-auto p-5">
            <div>
                <input onChange={(e) => setInput({
                    ...input,
                    title: e.target.value
                })} 
                value={input.title}
                className="w-full h-16 p-3 text-3xl" type="text" placeholder="Title"></input>
            </div>
            <div>
                <textarea onChange={(e) => setInput({
                    ...input,
                    content: e.target.value
                })} 
                value={input.content}
                className="w-full h-full shadow-lg p-3 text-xl" rows={15} placeholder="Tell your story....."/>
            </div>
            {/* <div className="flex justify-end pt-3">
                <button onClick={saveHandler} className=" p-2 pl-3 pr-3 rounded-lg bg-black text-sm text-white">Save</button>
            </div> */}
            
        </div>
    </div>
} 