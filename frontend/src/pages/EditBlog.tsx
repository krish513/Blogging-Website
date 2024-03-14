import { useEffect, useState } from "react"
import { GenNavbar } from "../components/GenNavbar"
import axios from "axios"
import { useLocation, useNavigate, useParams } from "react-router-dom"

export const EditBlog = () => {
    const {id} = useParams<{id?: string}>()
    console.log(id)
    const [input, setInput] = useState({
        title: "",
        content: ""
    })
    const [user, setUser] = useState("")
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.blog) {
            const { title, content } = location.state.blog;
            const {user} = location.state;
            setInput({title, content})
            setUser(user)
        }
    }, [location.state]);
  

    async function publishHandler(){
        try{
            await axios.put(`https://backend.krishsarma03.workers.dev/api/v1/post/blog`,{
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
        <GenNavbar isCreate = {false} user={user} onclick={publishHandler} />
        <div className="w-[85%] mx-auto p-5">
            <div>
                <input onChange={(e) => setInput({
                    ...input,
                    title: e.target.value
                })} 
                value={input.title}
                className="w-full h-16 p-8 shadow-lg text-3xl" type="text" placeholder="Title"></input>
            </div>
            <div className=" pt-11">
                <textarea onChange={(e) => setInput({
                    ...input,
                    content: e.target.value
                })} 
                value={input.content}
                className="w-full h-full shadow-lg p-8 text-xl" rows={50} placeholder="Tell your story....."/>
            </div>
            {/* <div className="flex justify-end pt-3">
                <button onClick={saveHandler} className=" p-2 pl-3 pr-3 rounded-lg bg-black text-sm text-white">Save</button>
            </div> */}
            
        </div>
    </div>
} 