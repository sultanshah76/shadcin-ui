import About from "@/component/Aboutcomponent";
import Button from "@/component/Button";
import Mybutton from "@/component/react learning/My button";
import Profile from "@/component/react learning/profile";
import OnclickBUTTON from "@/component/onclick";
const user={
  name: "sultan ",
  rollno:"123"
}
const React = () => {
    return(<>
    <div>This is react Page <div><Mybutton/></div>
    </div>
    <Button/>
    <p><About/></p>
   <div> user name:{user.name}
    user roll no:{user.rollno}</div>
   <div><Profile/></div>
  <div><OnclickBUTTON/></div>
  </>)}
  
  export default React;