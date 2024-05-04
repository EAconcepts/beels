import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import hambuger from "../../../assets/images/navbar.png";
import { AuthContext } from "../../../context/AuthContext";
import SideMenu from "./SideMenu";
import AddLeads from "./AddLeads";
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn, CiUser } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";
// import avatar from "../../../assets/images/avatarImg.png";
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAddLeads, setShowAddLeads] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(null);

  const menuRef = useRef(null);
  const { user, token } = useContext(AuthContext);
  // console.log(token);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!token || token == undefined || token === "") {
      navigateTo(`/`);
    }
  }, []);

  // Closes Side menu on outside click
  const handlOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      // console.log("Outside click");
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
      <SideMenu
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
        menuRef={menuRef}
        setShowAddLeads={setShowAddLeads}
      />
      <div className="w-full">
        {/* Show Add new Leads Modal */}
        {showAddLeads && <AddLeads setShowAddLeads={setShowAddLeads} />}
        {/*Header  */}
        <div className="w-full max-lg:mt-[48px] flex justify-start items-center max-lg:px-[32px] max-xsm:gap-x-[18px] max-lg:gap-x-[65px] lg:h-[138px] menu-toggle">
          {/* Toggle SideMenu Hambuger */}
          <div
            // ref={menuRef}
            className="xlg:hidden z-20 lg:"
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <img src={hambuger} />
          </div>
          {/* Header title */}
          <p className="lg:hidden text-[24px]  font-[600] text-[#000000] font-[Poppins]  ">
            {headerTitle
              ? headerTitle
              : user && user?.type !== "Admin"
              ? user.type == "Lead" && "Lead" + " Ambassador Dashboard"
              : "Admin Dashboard"}
          </p>
          {/* Top Nav */}
          <div className="w-full hidden xlg:pl-[54px] lg:pl-[16px] pr-[44px] xlg:pt-[53px] xlg:pb-[35px] lg:flex bg-[#F5F5F5] items-center justify-between ">
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
                {/* <div className="absolute top-[-2px] right-[-2px] size-[14px] text-center rounded-full bg-[#FF4D4D] text-white font-[700] font-inter text-[10px] leading-[12.1px]">
                  4
                </div> */}
              </div>
              {/* Profile details */}
              <div className="flex gap-x-[8px] items-center px-[8px]">
                {/* Avatar Image */}
                <Link
                  to="profile"
                  className=" relative rounded-full items-center flex justify-center border-[2.34px] border-white size-[50px]"
                >
                  {/* {user?.image ? (
                    <img
                      src={avatar}
                      className="object-cover object-center size-full rounded-full"
                    />
                  ) : ( */}
                  <CiUser className="size-[40px]" />
                  <BsCheckCircleFill className="absolute bottom-0 right-0 text-[#1671D9] " />
                  {/* )} */}
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
        <div className="lg:overflow-y-scroll lg:h-[calc(100vh-138px)] ">
          <Outlet context={[setShowAddLeads, setHeaderTitle]} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
