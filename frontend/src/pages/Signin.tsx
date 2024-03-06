import { SigninType } from "@krishna513/common-app"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const Signin = () =>{
    const [formInput, setFormInput] = useState<SigninType>({
        email: "",
        password: "String"
    })

    const navigate = useNavigate();

    async function signinHandler(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,formInput); // {} not required
        console.log(response)
        const jwt = response.data.token;
        console.log(jwt)
        localStorage.setItem("token", `Bearer ${jwt}`)
        navigate("/home")
        }
        catch(err){
            console.log(err)
        }
    }

    return <div className="w-full h-[100vh] p-11 flex items-center">
        {/* {JSON.stringify(formInput)} */}
        <div className="w-[30%] shadow-lg shadow-black mx-auto flex flex-col justify-center rounded-lg p-4 z-10">
            {/* form */}
            <div className="flex flex-col p-2 pt-4 gap-6">
                <p className=" text-center text-2xl">Welcome Back</p>
                <div className="flex flex-col gap-1 pl-6">
                    <label className=" font-bold">Enter your email</label>
                    <input onChange={(e)=> {setFormInput({
                        ...formInput,
                       email: e.target.value 
                    })}} 
                     className="border rounded-md p-2 pr-8 w-[90%]" placeholder="johndoe@example.com"/>
                </div>
                <div className="flex flex-col pb-2 gap-1 pl-6">
                    <label className=" font-bold">Enter your password</label>
                    <input onChange={(e)=> {setFormInput({
                        ...formInput,
                        password: e.target.value
                    })}} className="border rounded-md p-2 pr-8 w-[90%]" type="password" placeholder="********"/>
                </div>
            </div>
            <div className="pl-7 pr-9 pt-3 pb-4">
                <button onClick={signinHandler} className=" p-2 bg-black text-white w-full rounded-lg">Submit</button>
                <span className="text-sm text-slate-400 pl-10 p-2">Doesn't have an account ?</span>
                <Link className="text-sm text-slate-400 underline" to={"/signup"}> Signup</Link>
            </div>
        </div>
        
    </div>
}