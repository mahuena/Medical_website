import {BellIcon, HamburgerIcon} from "@chakra-ui/icons";
import {Drawer, DrawerContent, DrawerOverlay, IconButton, Image, useDisclosure} from "@chakra-ui/react";

export const HeaderWrapper = () => {
    const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png";
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="py-8 px-3 lg:px-10">
                <div className="flex justify-between">
                   <div className="flex justify-around gap-5" style={{alignItems: "center"}}>
                       <IconButton aria-label={'see menu'} icon={<HamburgerIcon />} onClick={onOpen} display={{ base: "block", lg: "none" }}/>
                       <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                           <DrawerOverlay />
                           <DrawerContent bg="#1e1e1e">
                               <div className="border-b border-gray-700 border-dashed p-8 ml-3">
                                   <h1 className="font-bold text-white text-4xl ">Logo</h1>
                               </div>
                           </DrawerContent>
                       </Drawer>
                       <h1 className={'text-lg lg:text-2xl text-[#3c3c3c] bold'}>My Dashboard</h1>
                   </div>

                    <div className="flex justify-around gap-5" style={{alignItems: "center"}}>
                        <IconButton variant="ghost" color="" cursor="pointer" icon={<BellIcon boxSize={6} />} aria-label={'see notifications'} />
                        <Image src={defaultImage} cursor="pointer" width="50px" height="50px" objectFit="cover" borderRadius={"50%"}  />
                    </div>
                </div>
            </div>
        </>
    )
}