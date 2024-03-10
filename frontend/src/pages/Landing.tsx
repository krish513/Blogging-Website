
import { Allblogs } from "../components/Allblogs";
import { NavLanding } from "../components/NavLanding";
import { Trending } from "../components/Trending";
import blogImage from "../assets/imgblog.png"

export function Landing(){
    
    return <div className="w-full">
             <NavLanding/>
            {/* body-1 */}
            <div className="flex bg-yellow-500 border-b border-black">
                <div className="w-[85%] flex mx-auto justify-between p-4 relative">
                    <div className=" pt-20 pb-11">
                        <h2 className=" text-8xl pt-11">Stay curious.</h2>
                        <p className="text-2xl pt-11">Discover stories, thinking, and expertise </p>
                        <p className="text-2xl pb-11">from writers on any topic.</p>
                        <button className="text-lg p-2 pl-8 pr-8 rounded-3xl bg-black text-white" >Start reading</button>
                    </div>
                    <img className=" absolute right-10 top-24 object-contain h-[350px]" src={blogImage} alt="" />
                </div>
               
            </div>
            <Trending/>
            <Allblogs/>
    </div>
}