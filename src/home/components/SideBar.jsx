

export const SideBar = () => {

    return (
        <>
            <div className="bg-[#1e1e1e] w-80 h-screen hidden lg:block">
                <div className={"sidebarContent"}>
                    <div className="border-b border-gray-700 border-dashed p-8 flex justify-between">
                        <h1 className="font-bold text-white text-4xl ">Logo</h1>
                    </div>
                </div>
            </div>
        </>
    )
}