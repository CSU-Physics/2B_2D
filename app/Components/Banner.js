import header from "../Assets/2B_2D.jpeg";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center px-6  mt-0 " >
            <div className="flex-1 h-[225px]" >
                <div className="w-12 " >
                    <a className="" target="" href={"https://csu-physics.github.io/"} >
                        <FaHome size={60} className="w-[45px] h-[30px] " />
                    </a>
                </div>
            </div>
            <div className={"flex-4"} >
                <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
                    <Image src={header} className="w-[1250px] my-2 " alt={"#"} />
                </div>
            </div>
            <div className="flex-1" ></div>
        </div>
    )
}
export default Banner;