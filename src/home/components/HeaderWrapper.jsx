import {BellIcon} from "@chakra-ui/icons";
import {IconButton, Image} from "@chakra-ui/react";

export const HeaderWrapper = () => {
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png";

    return (
        <>
            <div className="py-8 px-10">
                <div className="flex justify-between">
                    <h1 className={'text-3xl text-[#3c3c3c] bold'}>My Dashboard</h1>

                    <div className="flex justify-around gap-5" style={{alignItems: "center"}}>
                        <IconButton variant="ghost" color="" cursor="pointer" icon={<BellIcon boxSize={6} />} aria-label={'see notifications'} />
                        <Image src={defaultImage} cursor="pointer" width="50px" height="50px" objectFit="cover" borderRadius={"50%"}  />
                    </div>
                </div>
            </div>
        </>
    )
}