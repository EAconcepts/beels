import  { useContext } from "react";
("@ramonak/react-progress-bar");
import "./task.css";
import { AuthContext } from "../../../../context/AuthContext";
import TaskProgress from "./TaskProgress";

const LeadTasks = ({ tasks }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full flex flex-col px-[32px">
      <h3 className="text-[20px] mt-[44px] leading-[29px] text-black font-poppins font-[600]">
        In progress Tasks
      </h3>
      {/* Tasks */}
      <div className="flex flex-col mt-[11px] gap-y-[19px]">
        {tasks?.map((task, index) => (
          <TaskProgress key={index} task={task} />
        ))}
      </div>
      <div className="mt-[40px] flex flex-col  ">
        <h2 className="text-[20px] font-[600] leading-[29px] font-poppins">
          To-Do-Tasks
        </h2>
        <div className=" mt-[8px] grid grid-cols-2 gap-y-[16.5px] gap-x-[16px]">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="h-[135px] w-full w[174px] rounded-[10px] border-[1px] px-[15px] py-[11px] bg-[#FAF9F6] border-[#E4E7EC]"
            >
              <div className="w-full flex justify-end">
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
    </div>
  );
};

export default LeadTasks;
