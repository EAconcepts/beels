import { Logo } from "../../../components/logo";
import logo from "../../../assets/images/logo-white.png";
import avatar from "../../../assets/images/avatarImg.png";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import dashboardIcon from "../../../assets/images/dashboardIcon.png";
import circleIcon from "../../../assets/images/Circle.svg";
import ambassadorIcon from "../../../assets/images/ambassador.svg";
import { Link, NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SideMenu = ({
  setShowSidebar,
  menuRef,
  showSidebar,
  setShowAddLeads,
}) => {
  const [showAmbassadorMenu, setShowAmbassadorMenu] = useState(false);
  const [showTasksMenu, setShowTasksMenu] = useState(false);
  const { user } = useContext(AuthContext);
  const activePath = useLocation();
  console.log(activePath.pathname, activePath.pathname.endsWith("dashboard"));
  // console.log(user)
  const dashboardMenu = [
    {
      name: "Dashboard",
      path: "",
      pathname: "/dashboard",
      iconImg: dashboardIcon,
    },
    // Ambassador
    user?.type !== "Sub" && {
      name: "Ambassador",
      path: "#",
      // pathname: "/dashboard/tasks",
      iconImg: ambassadorIcon,
      dropdownIcon: !showAmbassadorMenu
        ? MdKeyboardArrowRight
        : MdKeyboardArrowDown,
    },
    showAmbassadorMenu && {
      name: "View Ambassador",
      path: "ambassadors",
      pathname: "/dashboard/ambassadors",
      iconImg: circleIcon,
    },
    showAmbassadorMenu && {
      name: "Add Ambassador",
      path: "#",
      iconImg: circleIcon,
    },
    // Tasks
    user?.type === "Admin" && {
      name: "Tasks",
      path: "#",
      pathname: "/dashboard/ambassadors",
      iconImg: ambassadorIcon,
      dropdownIcon: !showTasksMenu ? MdKeyboardArrowRight : MdKeyboardArrowDown,
    },
    user?.type === "Admin" &&
      showTasksMenu && {
        name: "View all tasks",
        path: "tasks",
        pathname: "/dashboard/tasks",
        iconImg: circleIcon,
      },

    user?.type !== "Admin" && {
      name: "My tasks",
      path: "tasks",
      pathname: "/dashboard/tasks",
      iconImg: ambassadorIcon,
    },
  ];

  return (
    <aside
      ref={menuRef}
      className={`lg:translate-x-0 lg:relative lg:w-[316px] lg:shrink-0 lg:h-screen lg:overflow-x-hidden lg:flex lg:flex-col lg:items-center lg:bg-[#F5F5F5] ${
        showSidebar
          ? "translate-x-0 transition-all duration-300 w-[256px] h-screen z-[99] overflow-hidden bg-primaryGreen fixed top-0 bottom-0 pt-[44px]"
          : "translate-x-[-100%] duration-300 transition-all w-[256px] h-screen z-[99] overflow-hidden bg-primaryGreen fixed top-0 bottom-0 pt-[44px]"
      }  `}
    >
      {/* Header */}
      <div
        // ref={menuRef}
        className="flex flex-col gap-y-[36.7px] px-[21px]"
      >
        {/* Logo */}
        <div className="">
          <Logo logoImg={logo} className={"text-white lg:text-[#082C25]"} />
        </div>
        {/* Profile details */}
        <div className="flex flex-col lg:hidden">
          {/* Avatar Image */}
          <Link
            to="profile"
            onClick={() => setShowSidebar(false)}
            className=" relative rounded-full items-center flex justify-center border-[2.34px] border-white size-[50px]"
          >
            {user?.image ? (
              <img
                src={avatar}
                className="object-cover object-center size-full rounded-full"
              />
            ) : (
              <FaUser className="size-[30px] text-white" />
            )}
            {/* Online dot */}
            <div className="absolute bottom-0 right-0 rounded-full size-[12.5px] border-white border-[1.56px] bg-lightgreen "></div>
          </Link>
          {/* Profile Name */}
          <Link
            to="profile"
            onClick={() => setShowSidebar(false)}
            className="text-white mt-[36px] flex flex-col gap-y-[8px] "
          >
            <div className="flex gap-x-[37px]">
              <h5 className=" text-[16px] font-inter font-[700] leading-[19.83px]">
                Mac Roger
              </h5>
              {/* <MdKeyboardArrowDown /> */}
            </div>
            <p className="font-[400] leading-[14.52px] text-[12px] uppercase">
              Admin
            </p>
          </Link>
        </div>
      </div>
      {/* Nav Menu */}
      <nav className="flex flex-col gap-y-[15px] mt-[24px] lg:mt-[90.7px]">
        {dashboardMenu
          ?.filter((menu) => menu !== false)
          ?.map((menu, index) => (
            <NavLink
              to={menu.path}
              onClick={() => {
                if (menu.path === "#" && menu.name === "Ambassador") {
                  setShowAmbassadorMenu((prev) => !prev);
                  return;
                }
                if (menu.path === "#" && menu.name === "Tasks") {
                  setShowTasksMenu((prev) => !prev);
                  return;
                }
                if (menu.path == "#" && menu.name === "Add Ambassador") {
                  setShowAddLeads(true);
                }
                setShowSidebar(false);
              }}
              key={index}
              className={` 
              pl-[16px] pr-[36px] lg:text-[#667185] text-white flex gap-x-[18px] justify-between lg:items-center ${
                menu.path === "tasks" && "lg:hidden"
              } ${menu.name == "Tasks" && menu.path == "#" && "lg:hidden"} ${
                activePath.pathname == menu.pathname &&
                "pl-[16px] pr-[36px] lg:text-white flex justify-between lg:bg-[#3AB54A] lg:rounded-[8px]"
              }`}
            >
              <div className="w-full flex gap-x-[16px] lg:items-center">
                <img src={menu.iconImg} className="" />
                <span>{menu.name}</span>
              </div>
              {menu.dropdownIcon && <menu.dropdownIcon />}
            </NavLink>
          ))}
      </nav>
      {/* Logout */}
      <button className="absolute bottom-[37px] left-[16px] flex gap-x-[9px] text-white items-end">
        <TbLogout className="text-[24px]" />
        <span className="text-[14px] font-inter leading-[16.94px] font-[600] underline underline-offset-4">
          Logout
        </span>
      </button>
    </aside>
  );
};

export default SideMenu;
