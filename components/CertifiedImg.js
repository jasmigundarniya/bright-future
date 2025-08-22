
import Secure from "@/public/assets/secure.png"
import NortonSecure from "@/public/assets/norton.png"
import Trustwave from "@/public/assets/trustwave.png"
import Telesign from "@/public/assets/telesign.png"
import Image from "next/image"
const Certified = () => {
    return (
        <section className="bg-[#F8F8F8] py-4 mb-20 rounded-[30px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[62px]">
            <div className=" grid grid-cols-2 lg:grid-cols-4 lg:gap-4 items-center">
            {/* <div className="sm:divide-x divide-x-0 divide-[#D2D2D2] grid grid-cols-2 sm:grid-cols-4 gap-4 items-center"> */}
                <div className="flex items-center justify-center px-4 sm:block border-r-2 border-[#D2D2D2] border-b-2 lg:border-b-0 h-[120px]">
                    <Image src={Secure} alt="" />
                </div>
                <div className="flex items-center justify-center px-4 border-r-0 lg:border-r-2 border-[#D2D2D2] border-b-2 lg:border-b-0 h-[120px]">
                    <Image src={NortonSecure} alt="" />
                </div>
                <div className="flex items-center justify-center px-4 border-r-2 border-[#D2D2D2] h-[120px]">
                    <Image src={Trustwave} alt="" />
                </div>
                <div className="flex items-center justify-end px-4 h-[120px]">
                    <Image src={Telesign} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Certified
