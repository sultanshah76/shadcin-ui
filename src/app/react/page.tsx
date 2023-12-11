import About from "@/component/Aboutcomponent";
import Button from "@/component/Button";
import Mybutton from "@/component/react learning/My button";
import Profile from "@/component/react learning/profile";
import OnclickBUTTON from "@/component/onclick";
import ConditionalRendering from "@/component/conditionalrendering";
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
  </>)}
  
 