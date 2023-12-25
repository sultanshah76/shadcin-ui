import React from "react";
import Link from "next/link";
function Newlayout({children}:{children: React.ReactNode}){
    return <div className="flex gap-5">
    <div className="flex flex-col gap-5 bg-yellow-500 py-5 px-2">
    <Link href="/new/nested_2">nested_2</Link>
    <Link href="/new/nested_3">nested_3</Link>
    <Link href="/new/nested_4">nested_4</Link>
    </div>
        {children}
    </div>
}
export default Newlayout;