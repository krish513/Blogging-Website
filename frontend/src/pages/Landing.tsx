
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
                    <div className=" pt-20 pb-11 max-w-[55%]">
                        <h2 className=" text-6xl pt-11">Where Ideas Resonate and Insight Amplifies.</h2>
                        <p className="text-2xl pt-11 pb-11">Welcome to InsightfulEcho, a platform where profound thoughts and meaningful ideas find their voice and resonate with a global audience.</p>
                        <button className="text-lg p-2 pl-8 pr-8 rounded-3xl bg-black text-white" >Start reading</button>
                    </div>
                    <img className=" absolute right-10 top-24 object-contain h-[350px]" src={blogImage} alt="" />
                </div>
               
            </div>
            <Trending/>
            <Allblogs/>
    </div>
}