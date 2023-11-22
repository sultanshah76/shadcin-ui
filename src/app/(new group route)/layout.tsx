import { Children } from "react";
import Link from "next/link";
function Newlayout({children}:{children: React.ReactNode}){
    return <div className="flex gap-5">
    <div className="flex flex-col gap-5 bg-yellow-800 py-5 px-2">
    <Link href="/new">new</Link>
    <Link href="/new_2">new2</Link>
    </div>
        {children}
    </div>
}
export default Newlayout;