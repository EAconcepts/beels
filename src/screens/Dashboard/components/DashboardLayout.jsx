import { useContext, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import hambuger from "../../../assets/images/navbar.png";
import { AuthContext } from "../../../context/AuthContext";
import SideMenu from "./SideMenu";
import AddLeads from "./AddLeads";
// import Header from "../../components/Header";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAddLeads, setShowAddLeads] = useState(false);

  const menuRef = useRef(null);
  const { user } = useContext(AuthContext);

  // Closes Side menu on outside click
  const handlOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      console.log("Outside click");
      setShowSidebar(false);
    }
  };
  // Listen for outside click to close side menu
  useEffect(() => {
    window.addEventListener("mousedown", handlOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handlOutsideClick);
    };
  }, [menuRef]);

  return (
    <div className="w-full flex flex-col">
      {/* Side menu */}
      {/* {showSidebar && ( */}
      <SideMenu
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        menuRef={menuRef}
        setShowAddLeads={setShowAddLeads}
      />
      {/* )} */}
      <div className="w-full">
        {/* Show Add new Leads Modal */}
        {showAddLeads && <AddLeads setShowAddLeads={setShowAddLeads} />}
        {/*Header  */}
        <div className="w-full mt-[48px] flex justify-start  items-center px-[32px]">
          {/* Toggle SideMenu Hambuger */}
          <div
            // ref={menuRef}
            className="lg:hidden z-20"
            onClick={() => {
              console.log("toggle nav bar");
              setShowSidebar(true);
            }}
          >
            <img src={hambuger} />
          </div>
          {/* Header title */}
          <p className="text-[32px] mx-10 max-lg:text-2xl max-md:text-xl max-sm:text-lg max-xsm:text-sm font-[600] text-[#000000] font-[Poppins]  ">
            {" "}
            {user?.type ? user?.type : "Admin" + " Dashboard"}
          </p>
        </div>
        <Outlet context={[setShowAddLeads]}/>
      </div>
    </div>
  );
};

export default DashboardLayout;
