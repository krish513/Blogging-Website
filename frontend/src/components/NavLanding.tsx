import { Link } from "react-router-dom"

export function NavLanding() {

    return <nav className="flex bg-yellow-500 border-b border-black fixed top-0 w-full z-10">
                <div className="w-[85%] flex mx-auto justify-between p-4 ">
                    <div>
                        <p className=" text-3xl">Medium</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="text-sm font-light">Our story</p>
                        <p className="text-sm font-light">Membership</p>
                        <p className="text-sm font-light">Write</p>
                        <Link className="text-sm font-light" to="/signin">Sign in</Link>
                        <Link className=" bg-black text-white text-sm font-light p-2 pl-3 pr-3 rounded-3xl" to="/signup">
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
}