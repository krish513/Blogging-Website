
interface TrendingPostCardProps {
    title: string,
    content: string
}

export function TrendingPostCard({title}: TrendingPostCardProps){

    return <div className="flex gap-2 w-[33%] pt-5">
        <p>01</p>
        <div>
            <p>from trending post card</p>
            <p>Author name</p>
            <p>{title}</p>
            <p>Time stamp</p>
        </div>
        
    </div>
}