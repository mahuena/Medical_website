import {Drawer, DrawerContent, DrawerOverlay, IconButton, useDisclosure} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

export const SideBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <div className="bg-[#1e1e1e] w-80 h-screen hidden lg:block">
                <div className={"sidebarContent"}>
                    <div className="border-b border-gray-700 border-dashed p-8 flex justify-between">
                        <h1 className="font-bold text-white text-4xl ">Logo</h1>
                    </div>
                </div>
            </div>

            <IconButton aria-label={'see menu'} icon={<HamburgerIcon />} onClick={onOpen} ml={3} mt={6} display={{ base: "block", lg: "none" }}/>
            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="#1e1e1e">
                    <div className="border-b border-gray-700 border-dashed p-8 ml-3">
                        <h1 className="font-bold text-white text-4xl ">Logo</h1>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}