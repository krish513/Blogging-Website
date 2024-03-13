import { SignupType } from "@krishna513/common-app"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const Signup = () =>{
    const [formInput, setFormInput] = useState<SignupType>({
        name: "",
        email: "",
        password: "String"
    })

    const navigate = useNavigate();

    async function signupHandler(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,formInput); // {} not required
        console.log(response)
        navigate("/signin")
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
                <p className=" text-center text-2xl">Create Your Account</p>
                <div className="flex flex-col gap-1 pl-6">
                    <label className=" font-bold">Enter your Name</label>
                    <input onChange={(e)=> {setFormInput({
                        ...formInput,
                       name: e.target.value 
                    })}} 
                     className="border rounded-md p-2 pr-8 w-[90%]" placeholder="john Doe"/>
                </div>
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
                <button onClick={signupHandler} className=" p-2 bg-black text-white w-full rounded-lg">Submit</button>
                <span className="text-sm text-slate-400 pl-10 p-2">Already have an account ?</span>
                <Link className="text-sm text-slate-400 underline" to={"/signin"}> Sign In</Link>
            </div>
        </div>
        
    </div>
}