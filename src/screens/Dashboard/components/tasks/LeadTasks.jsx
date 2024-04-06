import { useContext } from "react";
("@ramonak/react-progress-bar");
import "./task.css";
import { AuthContext } from "../../../../context/AuthContext";
import TaskProgress from "./TaskProgress";
import OverviewData from "../OverviewData";
import { useQuery } from "@tanstack/react-query";
import AmbassadorsIcon from "../../../../assets/images/ambassadorsIcon.png";
import taskIcon from "../../../../assets/images/tasks.svg";
import award from "../../../../assets/images/Award.png";

import axios from "axios";

const LeadTasks = ({ tasks }) => {
  const { user, token } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () => axios.get(`${baseUrl}/ambassador/dashboard`, { headers }),
  });

  let props = [];
  if (user.type === "Sub") {
    let data = ambassadorQuery.data?.data?.data;
    let obj1 = {
      title: "Total Tasks",
      iconImg: AmbassadorsIcon,
      value: data?.users?.length,
    };
    props.push(obj1);
    const totalLead = data?.tasks?.length;
    let obj2 = {
      title: "Ongoing Tasks",
      iconImg: taskIcon,
      value: totalLead,
    };
    props.push(obj2);
    const totalSub = data?.users?.length;
    let obj3 = {
      title: "Completed Tasks",
      iconImg: AmbassadorsIcon,
      value: totalSub,
    };
    props.push(obj3);
  }
  return (
    <div className="w-full flex flex-col px-[32px">
      <h3 className="text-[20px] lg:hidden mt-[44px] leading-[29px] text-black font-poppins font-[600]">
        In progress Tasks
      </h3>
      {/* Tasks */}
      <div className="lg:hidden flex flex-col mt-[11px] gap-y-[19px]">
        {tasks?.map((task, index) => (
          <TaskProgress key={index} task={task} />
        ))}
      </div>
      {/* Todo Tasks */}
      <div className="lg:hidden mt-[40px] flex flex-col  ">
        <h2 className="text-[20px] font-[600] leading-[29px] font-poppins">
          To-Do-Tasks
        </h2>
        <div className=" mt-[8px] grid grid-cols-2 gap-y-[16.5px] gap-x-[16px]">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="h-[135px] w-full w[174px] rounded-[10px] border-[1px] px-[15px] py-[11px] bg-[#FAF9F6] border-[#E4E7EC]"
            >
              <div
                className={`w-full flex justify-end ${
                  user?.type == "Sub" && "max-lg:hidden"
                }`}
              >
                <p
                  className={`bg-[#22612A] py-[1.49px] px-[8.97px] font-inter font-[500] text-[10.46px] leading-[15.17px] text-[#FAF9F6] rounded-[8.97px] ${
                    user.type === "sub" && "invisible"
                  }`}
                >
                  20 Points
                </p>
              </div>
              <div className="flex flex-col mt-[27.51px] gap-y-[10px]">
                <p className="text-[12px] font-[700] font-inter leading-[17.4px] text-[#FF2E3B]">
                  Todo
                </p>
                <h5 className="text-black text-[14px] font-[700] leading-[20.3px] font-inter">
                  {task.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deskktop View */}
      <div className="lg:flex-col lg:flex hidden">
        <div className="flex justify-between mb-[35px]">
          <h2 className="font-poppins font-[600] text-[32px] leading-[46.4px] text-black">
            My tasks
          </h2>
          <div className="flex gap-x-[8px]">
            <span className="font-poppins font-[700] text-[20px] leading-[29px] text-[#3AB54A]">
              200points
            </span>
            <img src={award} className="size-[32px] object-cover" />
          </div>
        </div>
        <OverviewData props={props} />
      </div>
    </div>
  );
};

export default LeadTasks;
