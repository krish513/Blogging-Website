import { useEffect, useState } from "react"
import { GenNavbar } from "../components/GenNavbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const CreatePost = () => {
    const [input, setInput] = useState({
        title: "",
        content: ""
    })
    const [user, setUser] = useState("")
    
    const [newBlogId, setNewBlogId] = useState("")
    // const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    async function saveHandler(){
        try{
            const res = await axios.post(`https://backend.krishsarma03.workers.dev/api/v1/post`,input,{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            setNewBlogId(res.data.id);
            // setLoading(false)
        }
        catch(err){
            console.log(err)
        }  
    }

    async function publishHandler(){
        try{
            await axios.put(`https://backend.krishsarma03.workers.dev/api/v1/post/blog/publish`,{
                id: newBlogId
            },{
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            // setNewBlogId(res.data.id);
            // setLoading(false)
            navigate("/blogs")
        }
        catch(err){
            console.log(err)
        }  
    }

    useEffect(()=>{
        let userFromLocalStorage: string = localStorage.getItem("username") ?? '';
        setUser(userFromLocalStorage);
    },[])

    return <div>
        <GenNavbar isCreate = {false} onclick={publishHandler} user={user} />
        <div className="w-[85%] mx-auto p-5">
            <div>
                <input onChange={(e) => setInput({
                    ...input,
                    title: e.target.value
                })} 
                className="w-full h-16 p-3 text-5xl" type="text" placeholder="Title"/>
            </div>
            <div>
                <textarea onChange={(e) => setInput({
                    ...input,
                    content: e.target.value
                })} 
                className="w-full h-full shadow-lg p-3 text-2xl" rows={15} placeholder="Tell your story....."/>
            </div>
            <div className="flex justify-end pt-3">
                <button onClick={saveHandler} className=" p-2 pl-3 pr-3 rounded-lg bg-black text-sm text-white">Save</button>
            </div>
            
        </div>
    </div>
} 