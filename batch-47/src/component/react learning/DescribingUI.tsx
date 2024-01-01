import Image from "next/image"
import couple from "@/component/assets/images/couple.jpg"
import {FaBeer} from "react-icons/fa"
export default function Gallery(){
const pfile= {
  name2:"XXX Return Of Xander Cage",
  name3:"baran and dilan",
  imagelink2:"https://m.media-amazon.com/images/M/MV5BMTY4NDYzNzE0N15BMl5BanBnXkFtZTgwNTQzNDk0MDI@._V1_.jpg"}
return <>
<div><FaBeer/></div>
<Image className="rounded-lg" src={pfile.imagelink2} alt="turkish couple pic" width={100} height={100}/>
<div className="font-bold">NAME:{pfile.name2}</div>
<Image className="rounded-lg" src={couple} alt="xxx.xander photo" width={100} height={100}/>
<div className="font-bold">NAME:{pfile.name3}</div>
</>}