
import { Children } from "react";
function admin({children}: {children: React.ReactNode}){
    return <div>THIS IS ADMIN ROUTE
        {children}
    </div>
}
export default admin;