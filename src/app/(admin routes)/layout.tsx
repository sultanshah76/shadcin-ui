
import { Children } from "react";
function admin({children}: {children: React.ReactNode}){
    return <div>THIS IS ADMIN ROUTE LAYOUT.
        {children}
    </div>
}
export default admin;