import {SideBar} from "./components/SideBar.jsx";
import {HeaderWrapper} from "./components/HeaderWrapper.jsx";
import {ModulesContainer} from "./components/ModulesContainer.jsx";

export const Home = () => {

  return (
    <>
      <div className="flex">
          <SideBar />
          <div className="w-full">
              <HeaderWrapper />
              <ModulesContainer />
          </div>
      </div>
    </>
  );
};
