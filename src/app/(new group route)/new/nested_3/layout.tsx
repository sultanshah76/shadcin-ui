import { Children } from "react";
import Link from "next/link";
function Newlayout({children}:{children: React.ReactNode}){
    return <div>
  THIS IS NESTED_3 ROUTE LAYOUT
        {children}
    </div>
}
export default Newlayout;