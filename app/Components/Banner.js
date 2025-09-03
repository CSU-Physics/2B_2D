import header from "../Assets/2B_2D.jpeg";
import Image from "next/image";
const Banner = () => {
    return (
        <div>
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