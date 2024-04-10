import { useContext, useEffect } from "react";
import TaskCard from "./components/TaskCard";
import { AuthContext } from "../../context/AuthContext";
import Tasks from "./components/tasks/Tasks";
import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllTasks = () => {
  // const tasks = [
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  //   {
  //     title: "Onboard 20 new users",
  //     role: "lead",
  //     dateAdded: "03/01/2024",
  //   },
  // ];

  // eslint-disable-next-line no-unused-vars
  const [showAddLeads, setHeaderTitle] = useOutletContext();
  useEffect(() => {
    setHeaderTitle(`View all tasks`);
  }, []);
  const { user, token } = useContext(AuthContext);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () => axios.get(`${baseUrl}/ambassador/dashboard`, { headers }),
  });
  // console.log(ambassadorQuery?.data)
  return (
    <div className="flex flex-col w-full lg:pt-[57px] px-[32px] mt-[14px] pb-[100px  ]">
      <h2 className="hidden font-poppins font-[600] text-[24px] leading-[34.8px] text-black">
        View all Tasks
      </h2>
      {user.type === "Admin" ? (
        <div className="flex flex-col gap-y-[16px] mt-[8px]">
          {ambassadorQuery.data &&
            ambassadorQuery.data?.data?.data?.tasks?.map((item, index) => (
              <TaskCard key={index} tasks={item} />
            ))}
        </div>
      ) : (
        <Tasks
          tasks={
            ambassadorQuery.data && ambassadorQuery.data?.data?.data?.tasks
          }
        />
      )}
    </div>
  );
};

export default AllTasks;
