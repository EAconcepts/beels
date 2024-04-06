import { IoMdClose } from "react-icons/io";
import Checkbox from "../../components/Checkbox";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const TaskCreate = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    type: "",
    points: "",
  });
  const { token } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const checkboxChange = () => {
    setTask((prev)=>({...prev, type: 'lead'}))
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const taskMutation = useMutation({
    mutationFn: axios.post(`${baseUrl}/ambassador/task/add`, task, { headers }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleCreateTask = (e) => {
    e.preventDefault();
    console.log(task)
  };
  return (
    <div className="w-full">
      <IoMdClose className="fixed top-[37px] right-[32px] text-[36px] text-[#E2E4E5] " />
      <div className="w-full flex flex-col px-[32px]">
        <h1 className="text-[24px] font-[700] leading-[34.8px] font-poppins text-black">
          Create Task
        </h1>
        <p className="font-[400] text-[16px] leading-[23.2px] font-poppins text-black mt-[14px]">
          Fill in the details for the tasks you want to assign.
        </p>
      </div>
      {/* Form */}
      <div className="w-full px-[28px] mt-[37px] py-[32px]">
        <form
          onSubmit={handleCreateTask}
          className="w-full flex flex-col px-[24px] "
          // onSubmit={handleSubmit}
        >
          <div className=" ">
            {/* Task Information */}
            <div className="flex flex-col gap-y-[2px]">
              <p className="text-[20px] font-[600] text-[#242731] font-poppins leading-[28px] ">
                {" "}
                Task Information{" "}
              </p>
              <p className="text-[12px] font-[300] text-[#343434] font-poppins ">
                {" "}
                Please fill in the required details{" "}
              </p>
            </div>
            {/* Name of Tasks */}
            <div className="pt-[32px] flex flex-col gap-y-[8px]">
              <p className="text-[14px]  font-[400] text-[#242426] font-poppins">
                {" "}
                Name of Tasks{" "}
              </p>
              <input
                type="text"
                name="name"
                value={task.name}
                onChange={handleChange}
                required
                className=" w-full text-black border-b-[1px] border-[#E2E4E5]"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Task Description */}
            <div className="pt-[32px] flex flex-col gap-y-[8px]">
              <p className="text-[14px]  font-[400] text-[#242426] font-poppins">
                {" "}
                Task Description
              </p>
              <textarea
                required
                // type="text"
                name="description"
                onChange={handleChange}
                value={task.description}
                className=" w-full focus-within:outline-none text-black border-b-[1px] border-[#E2E4E5]"
              />
            </div>
            {/* Point Allocation */}
            <div className="pt-[32px] flex flex-col gap-y-[8px]">
              <p className="text-[14px]  font-[400] text-[#242426] font-poppins">
                {" "}
                How many points do you want to allocate?
              </p>
              <input
                type="text"
                name="points"
                onChange={handleChange}
                value={task.points}
                className=" w-full text-black border-b-[1px] border-[#E2E4E5]"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Ambassadors to reach */}
            <div className="pt-[32px] flex flex-col gap-y-[16px]">
              <p className="text-[14px] font-[400] text-[#242426] font-poppins">
                Select the ambassadors you want to reach
              </p>
              {/* Checkboxes */}
              <div className="flex flex-col gap-y-[16px]">
                {/* Lead Ambassador */}
                <div className="flex justify-start items-center gap-x-[13px]">
                  <Checkbox onChange={checkboxChange} />
                  <p className="text-[14px] font-[400] text-[#242426] font-poppins leading-[20px] ">
                    {" "}
                    Lead Ambassador{" "}
                  </p>
                </div>
                {/* Sub Ambassador */}
                <div className="flex justify-start items-center gap-x-[13px]">
                  <Checkbox
                    onChange={checkboxChange}
                    className={"text-[#082C25]"}
                  />
                  <p className="text-[14px] font-[400] text-[#242426] font-poppins leading-[20px] ">
                    {" "}
                    Sub Ambassador{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Submit button */}
          <button
            className="bg-[#082C25] mt-[51px] w-full p-[10px] flex justify-center items-center rounded-[8px] text-white font-[400] font-inter leading-[29px] text-center"
            type="submit"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskCreate;
