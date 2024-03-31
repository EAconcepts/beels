import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import hambuger from "../../../assets/images/navbar.png";
import { AuthContext } from "../../../context/AuthContext";
import SideMenu from "./SideMenu";
import AddLeads from "./AddLeads";
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import avatar from "../../../assets/images/avatarImg.png";
import { useNavigate } from "react-router-dom";

// import Header from "../../components/Header";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAddLeads, setShowAddLeads] = useState(false);

  const menuRef = useRef(null);
  const { user, token } = useContext(AuthContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!token || token == undefined) {
      navigateTo("/sub-ambassador/login");
    }
  }, []);

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
    <div className="w-full flex max-lg:flex-col lg:h-screen lg:overflow-hidden">
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
        <div className="w-full max-lg:mt-[48px] flex justify-start  items-center max-lg:px-[32px] lg:h-[138px] ">
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
          <p className="lg:hidden text-[32px] mx-10 max-lg:text-2xl max-md:text-xl max-sm:text-lg max-xsm:text-sm font-[600] text-[#000000] font-[Poppins]  ">
            {" "}
            {user?.type ? user?.type : "Admin" + " Dashboard"}
          </p>
          <div className="w-full hidden pl-[54px] pr-[44px] pt-[53px] pb-[35px] lg:flex bg-[#F5F5F5] items-center justify-between ">
            {/* Title & Search */}
            <div className="flex gap-x-[24px] ">
              <h2 className="font-poppins font-[600] leading-[40.46px] text-[32px] text-black">
                Dashboard
              </h2>
              <div className="px-[12px] py-[10px] flex items-center gap-x-[8px] bg-white w-[467px] h-[40px]">
                <IoSearchOutline className="text-[#475367] " />
                <input
                  placeholder="Search here..."
                  className="bg-transparent placeholder:text-[#475367]"
                />
              </div>
            </div>
            {/* Notification & Profile */}
            <div className="flex">
              {/* Notification */}
              <div className="relative p-[8px]">
                <CiBellOn className="text-[24px]" />
                <div className="absolute top-[-2px] right-[-2px] size-[14px] text-center rounded-full bg-[#FF4D4D] text-white font-[700] font-inter text-[10px] leading-[12.1px]">
                  4
                </div>
              </div>
              {/* Profile details */}
              <div className="flex gap-x-[8px] items-center px-[8px]">
                {/* Avatar Image */}
                <Link
                  to="profile"
                  className=" relative rounded-full items-center flex justify- border-[2.34px] border-white size-[50px]"
                >
                  {user?.image ? (
                    <img
                      src={avatar}
                      className="object-cover object-center size-full rounded-full"
                    />
                  ) : (
                    <FaUser className="size-[30px] text-black" />
                  )}
                </Link>
                {/* Profile Name */}
                <Link
                  to="profile"
                  onClick={() => setShowSidebar(false)}
                  className="text-black mt[36px] flex flex-col gap-y-[8px] "
                >
                  <div className="flex gap-x-[37px]">
                    <h5 className=" text-[16px] font-inter font-[700] leading-[19.83px]">
                      {user?.first_name} {user?.last_name}
                    </h5>
                    {/* <MdKeyboardArrowDown /> */}
                  </div>
                  <p className="font-[400] leading-[14.52px] text-[12px] uppercase">
                    {user?.type} {user?.type !== "Admin" && "Ambassador"}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {token && (
          <div className="lg:overflow-y-scroll lg:h-[calc(100vh-138px)]">
            <Outlet context={[setShowAddLeads]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
