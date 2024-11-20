import Link from "next/link";

export default function Navbar(){
    return (
        <div className="h-24 flex items-center">
                <h3 className=" h3 py-6 px-32 text-[24px] tracking-[0.1px] leading-10 font-bold">
               BrandName
                </h3>
                <div className="py-7 home gap-[21px] flex text-[14px] tracking-[0.2px] leading-[24px] text-center font-bold">
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>Product</Link>
                    <Link href={"#"}>Pricing</Link>
                    <Link href={"#"}>Contact</Link>
                </div>
                <span className=" flex gap-[45px]">
                    <h4 className=" btn leading-[22px] tracking-[0.2px] text-[14px] text-right font-bold pl-80 pt-4">Login</h4>
                    <button className="rounded-[5px] py-4 px-6 gap-[15px] bg-[#23A6F0] btn leading-[22px] tracking-[0.2px] text-[14px] font-bold ">
                        JOIN US
                    </button>

                </span>
        </div>
    )
} 