import { useContext, useEffect } from "react";
import DashboardHero from "./components/Hero";
import OverviewData from "./components/OverviewData";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AmbassadorsIcon from "../../assets/images/ambassadorsIcon.png";
import SubOverview from "./components/SubOverview";
// import { BsFileEarmarkCheck } from "react-icons/bs";
import taskIcon from "../../assets/images/tasks.svg";
import TaskProgress from "./components/tasks/TaskProgress";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [setShowAddLeads] = useOutletContext();

  const { user, token } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [showAddLeads, setHeaderTitle] = useOutletContext();
  useEffect(() => {
    setHeaderTitle(
      user?.type == "Sub"
        ? "Ambassador"
        : user?.type == "Lead"
        ? "Lead Ambassador"
        : "Admin" + " Dasboard"
    );
  }, []);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () => axios.get(`${baseUrl}/ambassador/dashboard`, { headers }),
  });
  if (ambassadorQuery.error) {
    //console.log(ambassadorQuery.error);
  } else {
    // //console.log(ambassadorQuery.data);
  }
  let props = [];
  // If user is Admin
  if (user.type === "Admin") {
    let data = ambassadorQuery.data?.data?.data;
    let obj1 = {
      title: "Total of Ambassadors",
      iconImg: AmbassadorsIcon,
      value: data?.all_amb,
    };
    props.push(obj1);
    const totalLead = data?.lead_amb;
    let obj2 = {
      title: "Lead Ambassadors",
      iconImg: AmbassadorsIcon,
      value: totalLead,
    };
    props.push(obj2);
    const totalSub = data?.sub_amb;
    let obj3 = {
      title: "Sub Ambassadors",
      iconImg: AmbassadorsIcon,
      value: totalSub,
    };
    props.push(obj3);
  }
  // If user is Sub Ambasssador
  else if (user.type === "Sub") {
    let data = ambassadorQuery.data?.data?.data;
    let obj1 = {
      title: "Total Users",
      iconImg: AmbassadorsIcon,
      value: data?.users?.length,
    };
    props.push(obj1);
    const totalLead = data?.tasks?.length;
    let obj2 = {
      title: "Tasks",
      iconImg: taskIcon,
      value: totalLead,
    };
    props.push(obj2);
    const totalSub = data?.users?.length;
    let obj3 = {
      title: "Onboarded User",
      iconImg: AmbassadorsIcon,
      value: totalSub,
    };
    props.push(obj3);
  }
  // If user is Lead Ambassador
  else if (user.type === "Lead") {
    let data = ambassadorQuery.data?.data?.data;
    let obj1 = {
      title: "Sub Ambassadors",
      iconImg: AmbassadorsIcon,
      value: data?.sub_amb,
    };
    props.push(obj1);
    const totalUsers = data?.users?.length;
    let obj2 = {
      title: "Total Users",
      iconImg: AmbassadorsIcon,
      value: totalUsers,
    };
    props.push(obj2);
    const totalSub = "";
    let obj3 = {
      title: "Total Earning",
      iconImg: AmbassadorsIcon,
      value: totalSub?.length,
    };
    props.push(obj3);
  }

  return (
    <div>
      <div className=" bg-white lg:flex-col-reverse flex flex-col relative pb-[100px]">
        {/* Hero */}
        <div className="lg:mt-[69px] lg:px-[65px] mt[44px] px-[32px]">
          {user.type !== "Sub" ? (
            <DashboardHero setShowAddLeads={setShowAddLeads} />
          ) : (
            // Sub Amb Desktop
            <div className="flex w-full mt-[40px]">
              <div className="hidden lg:flex w-full flex-col  max-lg:pl-[32px] pr-[27px] gap-y-[19px]">
                <h4 className="text-[32px] leading-[46.4px] font-[600] font-poppins text-black">
                  My Tasks
                </h4>
                {ambassadorQuery.data?.data?.data?.tasks?.map(
                  (tasks, index) => (
                    <TaskProgress key={index} task={tasks} />
                  )
                )}
              </div>
              <SubOverview />
            </div>
          )}
        </div>
        {/* Desktop */}
        {/*  Sub Overview Data */}
        <div
          className={`mt-[48px] ${
            user.type == "Sub" && "mt-[57px] "
          } lg:pl-[54px]`}
        >
          <div
            className={`${
              user.type !== "Sub" && "hidden"
            } hidden lg:flex flex-col `}
          >
            {/* Header */}
            <h3 className="font-poppins font-[600] text-[32px] leading-[46.6px] text-black pb-[26px] ">
              <span className="hidden lg:inline-block">
                {user?.type === "Lead" && "Lead"}
              </span>{" "}
              <span className="">
                {user?.type !== "Admin" ? "Ambassador" : "Admin"}{" "}
              </span>
              Dashboard Overview
            </h3>
          </div>
          <OverviewData
            props={props}
            IconClass={user.type === "Sub" && "bg-[#B6F485]"}
          />
        </div>
        {/* Mobile View */}
        {/* Sub Amb Tasks Progress and Leaderboard */}
        {user.type === "Sub" && (
          <>
            {/* Tasks */}
            <div className="lg:hidden flex flex-col mt-[40px] pl-[32px] pr-[27px] gap-y-[19px]">
              {ambassadorQuery.data?.data?.data?.tasks?.map((tasks, index) => (
                <TaskProgress key={index} task={tasks} />
              ))}
            </div>
            {/*leaderboard  */}
            <div className="lg:hidden flex flex-col px-[32px] mt-[64px] gap-y-[21px]">
              <div className="flex justify-between">
                <p className="font-poppins text-black leading-[23.2px] text-[16px] font-[400]">
                  Leaderboard Position
                </p>
                <h2 className="text-[20px] leading-[29px] text-[#082C25] font-[700] font-poppins">
                  1st
                </h2>
              </div>
              <div className="flex justify-between">
                <p className="font-poppins text-black leading-[23.2px] text-[16px] font-[400]">
                  Points Earned
                </p>
                <h2 className="text-[20px] leading-[29px] text-[#082C25] font-[700] font-poppins">
                  200points
                </h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;
