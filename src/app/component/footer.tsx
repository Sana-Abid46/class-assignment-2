import Image from "next/image";
import Line from "@/app/Assests/fixed-width fixed-height.png"
import whiteLine from "@/app/Assests/fixed-width fixed-height (1).png"

export default function Footer() {
    return (
        // main parent div
        <div className="flex justify-center items-center pt-[80px] pb-[80px]">
            {/* is div ke andr 3no boxes ayen gy */}
            <div className="flex gap-[30px]">
                {/* is ma 1st box ki sb cheezen */}
                <div className="grid p-[35px] gap-[20px] bg-white w-[328px]  shadow-md">
                    {/* Icon Section */}
                    <div className="flex justify-center items-center bg-[#FFDCD1] w-[70px] h-[76px] rounded-[10px]">
                        {/* Icon ko yahan add karein */}
                    </div>

                    {/* Heading */}
                    <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] font-bold">
                        training Courses
                    </h5>
                    <div>
                            <Image src={Line} alt="Line"/>
                        </div>

                    {/* Paragraph */}
                    <p className="text-[14px] tracking-[0.2px] leading-[20px] text-[#737373] font-semibold">
                        The gradual accumulation of information about atomic and small-scale behaviour...
                    </p>
                </div>
                 {/* is ma 1st box ki sb cheezen */}
                 <div className="grid p-[35px] gap-[20px] bg-white w-[328px]  shadow-md">
                    {/* Icon Section */}
                    <div className="flex justify-center items-center bg-[#B9EAA8] w-[70px] h-[76px] rounded-[10px]">
                        {/* Icon ko yahan add karein */}
                    </div>

                    {/* Heading */}
                    <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42] font-bold">
                    2,769 online courses
                    </h5>
                    <div>
                            <Image src={Line} alt="Line"/>
                        </div>

                    {/* Paragraph */}
                    <p className="text-[14px] tracking-[0.2px] leading-[20px] text-[#737373] font-semibold">
                        The gradual accumulation of information about atomic and small-scale behaviour...
                    </p>
                </div>
                 {/* is ma 1st box ki sb cheezen */}
                 <div className="grid p-[35px] gap-[20px] bg-[#23A6F0] w-[328px]  shadow-md">
                    {/* Icon Section */}
                    <div className="flex justify-center items-center bg-white w-[70px] h-[76px] rounded-[10px]">
                        {/* Icon ko yahan add karein */}
                        
                    </div>

                    {/* Heading */}
                    <h5 className="text-[16px] leading-[24px] tracking-[0.1px] text-white font-semibold">
                        training Courses
                    </h5>
                    <div>
                            <Image src={whiteLine} alt="Lines" />
                        </div>

                    {/* Paragraph */}
                    <p className="text-[14px] tracking-[0.2px] leading-[20px] text-white font-semibold">
                        The gradual accumulation of information about atomic and small-scale behaviour...
                    </p>
                </div>
            </div>
        </div>
    );
}
