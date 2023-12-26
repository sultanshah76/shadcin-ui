import About from "@/component/react learning/Aboutcomponent";
import Button from "@/component/Button";
import Mybutton from "@/component/react learning/My button";
import OnclickBUTTON from "@/component/react learning/Onclick"
import ConditionalRendering from "@/component/react learning/Conditionalrendering";
import Rendringlists from "@/component/react learning/Rendringlist";
import Updatestate from "@/component/react learning/Updatingstate";
import Profile from "@/component/react learning/deathpack";
import { UpdateUIProps } from "@/component/react learning/UpdateuUIprops";


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
  <div>UPDATE STATE<div><Updatestate/></div>
  </div>
  <div>UPDATE UI PROPS<div><UpdateUIProps propValue={100}/></div>
  </div>
  </>)}
  
 