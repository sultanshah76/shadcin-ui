import { Children } from "react";
function shop({children}:{children: React.ReactNode}){
    return <div>THIS IS SHOP ROUTE
        {children}
    </div>
}
export default shop;