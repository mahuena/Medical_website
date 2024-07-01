import { GiBrain } from "react-icons/gi";
import { BsFillLungsFill } from "react-icons/bs";
import { GiHeartOrgan } from "react-icons/gi";
import {Link} from "@chakra-ui/react";

export const ModulesContainer = () => {
    return (
        <>
            <div className="py-8 m-auto mx-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
                    <Link href={"/tumorPage"}>
                        <div
                            className="bg-[#72A0C1] p-8 rounded-lg shadow-md flex justify-between cursor-pointer hover:opacity-90"
                            style={{alignItems: "center"}}>
                            <GiBrain size={70}/>
                            <h1 className=" text-xl lg:text-3xl font-bold text-[#264e70]">Tumor</h1>
                        </div>
                    </Link>
                    <Link href={"/pneumoniaPage"}>
                        <div
                            className="bg-[#ffb5b5] p-8 rounded-lg shadow-md flex justify-between cursor-pointer hover:opacity-90"
                            style={{alignItems: "center"}}>
                            <BsFillLungsFill color={'#3c0303'} size={70}/>
                            <h1 className="text-xl lg:text-3xl font-bold text-[#3c0303]">Pneumonia</h1>
                        </div>
                    </Link>
                    <Link href={"/heartAttackPage"}>
                        <div
                            className="bg-white p-8 rounded-lg shadow-md flex justify-between cursor-pointer hover:opacity-90 border border-[#8B0000]"
                            style={{alignItems: "center"}}>
                            <GiHeartOrgan color={'#8B0000'} size={70}/>
                            <h1 className="text-xl lg:text-3xl font-bold text-[#8B0000]">Heart attack</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}