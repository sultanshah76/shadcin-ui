/* eslint-disable */
import About from "@/component/react learning/Aboutcomponent";
import Button from "@/component/Button";
import Mybutton from "@/component/react learning/My button";
import OnclickBUTTON from "@/component/react learning/Onclick"
import ConditionalRendering from "@/component/react learning/Conditionalrendering";
import Rendringlists from "@/component/react learning/Rendringlist";
import Updatestate from "@/component/react learning/Updatingstate";
import { UpdateUIProps } from "@/component/react learning/UpdateuUIprops";
import Gallery from "@/component/react learning/DescribingUI";



const user={
  name: "sultan ",
  rollno:"123"
}
export default function React() {
    return(<>
    <div  className="font-bold">THIS IS REACT PAGE </div>
    <div><Mybutton/></div>
    <Button/>
    <div  className="font-bold">THIS IS FRAGMENT TAG </div>
    <div><About/></div>
   <div  className="font-bold">DISPLAYING DATA</div>
   <div>user name:{user.name} user roll no:{user.rollno}</div>
   <div  className="font-bold">DISPLAYING PROFILE</div>
   <div><Gallery/></div>
  <div  className="font-bold">ON CLICK EVENT</div>
  <div><OnclickBUTTON/></div>
  <div  className="font-bold">CONDITIONAL RENDERING</div>
  <div><ConditionalRendering/></div>
  <div  className="font-bold">RENDERING LIST</div>
  <div><Rendringlists/></div>
  <div  className="font-bold">UPDATE STATE</div>
  <div><Updatestate/></div>
  <div  className="font-bold">UPDATE UI PROPS</div>
  <div><UpdateUIProps propValue={100}/></div>

  </>)
  }
  
 