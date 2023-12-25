import About from "@/component/Aboutcomponent";
import Button from "@/component/Button";
import Mybutton from "@/component/react learning/My button";
import OnclickBUTTON from "@/component/Onclick"
import ConditionalRendering from "@/component/Conditionalrendering";
import Rendringlists from "@/component/Rendringlist";
import Updatestate from "@/component/Updatingstate";
import Profile from "@/component/react learning/Profile";

const user={
  name: "sultan ",
  rollno:"123"
}
export default function React() {
    return(<>
    <div className="">THIS IS REACT PAGE <div><Mybutton/></div>
    </div>
    <Button/>
    <div>THIS IS FRAGMENT TAG <div><About/></div>
    </div>
   <div>DISPLAYING DATA<div>user name:{user.name} user roll no:{user.rollno}</div>
    </div>
    <div>
   <div>DISPLAYING PROFILE<Profile/></div>
   </div>
  <div>ON CLICK EVENT <div><OnclickBUTTON/></div>
  </div>
  <div>CONDITIONAL RENDERING<div><ConditionalRendering/></div>
  </div>
  <div>RENDERING LIST<div><Rendringlists/></div>
  </div>
  <div>UPDATE STATE<div><Updatestate propcount={0} count1={10} /></div>
  </div>
  </>)}
  
 