
interface BlogDisplayCardProps {
    title: string,
    content: string
}

export function BlogDisplayCard({title,content}: BlogDisplayCardProps){
    return <div className=" p-4">
        <p className=" text-sm">Author name</p>
        <p className=" text-xl font-bold">{title}</p>
        <p className=" text-sm text-slate-500">{content.length <= 50 ? content : content.substring(0, 200)+"..."}</p>
    </div>
}