import { useContext } from "react";
import TaskCard from "./components/TaskCard";
import { AuthContext } from "../../context/AuthContext";
import LeadTasks from "./components/tasks/LeadTasks";

const AllTasks = () => {
  const tasks = [
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
    {
      title: "Onboard 20 new users",
      role: "lead",
      dateAdded: "03/01/2024",
    },
  ];
  const { user } = useContext(AuthContext);
  const leadTasks = [
    { title: "Onboard 20 Ambassadors", max: 20, value: 10 },
    { title: "Users with Virtual Cards   ", max: 20, value: 20 },
    { title: "Refer 50 uses", max: 50, value: 45 },
    { title: "60 Users to collect loans", max: 60, value: 54 },
  ];
  return (
    <div className="flex flex-col w-full lg:pt-[57px] px-[32px] mt-[14px] pb-[100px  ]">
      <h2 className="lg:hidden font-poppins font-[600] text-[24px] leading-[34.8px] text-black">
        View all Tasks
      </h2>
      {user.type === "Admin" ? (
        <div className="flex flex-col gap-y-[16px] mt-[8px]">
          {tasks?.map((item, index) => (
            <TaskCard key={index} tasks={item} />
          ))}
        </div>
      ) : (
        <LeadTasks tasks={leadTasks} />
      )}
    </div>
  );
};

export default AllTasks;
