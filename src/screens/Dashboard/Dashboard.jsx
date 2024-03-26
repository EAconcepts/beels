import { useContext } from "react";
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
  // const [ambassadors, setAmbassadors] = useState(null);
  const subAmbTasks = [
    { title: "Onboard 20 Ambassadors", max: 20, value: 20 },
    { title: "Users with Virtual Cards   ", max: 20, value: 20 },
    { title: "Refer 50 uses", max: 50, value: 45 },
    { title: "60 Users to collect loans", max: 60, value: 54 },
  ];
  const { user, token } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () => axios.get(`${baseUrl}/ambassador/dashboard`, { headers }),
  });
  if (ambassadorQuery.error) {
    console.log(ambassadorQuery.error);
  } else {
    console.log(ambassadorQuery.data);
    // setAmbassadors(ambassadorQuery.data?.data?.data.all);
  }
  let props = [];
  // If user is Admin
  if (user.type === "Admin") {
    let data = ambassadorQuery.data?.data?.data.all;
    let obj1 = {
      title: "Total of Ambassadors",
      iconImg: AmbassadorsIcon,
      value: data?.length,
    };
    props.push(obj1);
    const totalLead = data?.filter((amb) => amb.type === "Lead");
    let obj2 = {
      title: "Lead Ambassadors",
      iconImg: AmbassadorsIcon,
      value: totalLead?.length,
    };
    props.push(obj2);
    const totalSub = data?.filter((amb) => amb.type === "Sub");
    let obj3 = {
      title: "Sub Ambassadors",
      iconImg: AmbassadorsIcon,
      value: totalSub?.length,
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
    const totalUsers = data?.users.length;
    let obj2 = {
      title: "Total USers",
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
      <div className="min-h-screen bg-white flex flex-col relative pb-[100px]">
        {/* Hero */}
        <div className="mt-[44px] px-[32px]">
          {user.type !== "Sub" ? (
            <DashboardHero setShowAddLeads={setShowAddLeads} />
          ) : (
            <SubOverview />
          )}
        </div>
        {/* Overview */}
        <div className="mt-[48px]">
          <OverviewData
            props={props}
            IconClass={user.type === "Sub" && "bg-[#B6F485]"}
          />
        </div>
        {user.type === "Sub" && (
          <>
            {/* Tasks */}
            <div className="flex flex-col mt-[40px] pl-[32px] pr-[27px] gap-y-[19px]">
              {subAmbTasks?.map((tasks, index) => (
                <TaskProgress key={index} task={tasks} />
              ))}
            </div>
            {/*leaderboard  */}
            <div className="flex flex-col px-[32px] mt-[64px] gap-y-[21px]">
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
