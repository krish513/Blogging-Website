
interface GenNavbarProps {
    user? : string;
    isCreate?: boolean;
    onclick?: ()=> void;
}

export const GenNavbar = ({isCreate,user,onclick}:GenNavbarProps) => {
    const userInitial = user ? user[0] : 'A';

    return <div className="w-full border flex items-center">
        <div className=" w-[85%] flex justify-between items-center mx-auto p-5">
            <p>Medium</p>
            <div className="flex gap-5 justify-center">
                {isCreate ? (
                <div onClick={onclick} className="border rounded-full w-8 h-8 flex justify-center pt-0.5 cursor-pointer">+</div>
                ) : (
                <button onClick={onclick} className=" p-2 pl-3 pr-3 rounded-xl bg-black text-white text-sm">Publish</button>
                )}
                <div className=" bg-slate-300 rounded-full w-8 h-8 flex justify-center pt-1">{userInitial}</div>
            </div>
        </div>
    </div>
}