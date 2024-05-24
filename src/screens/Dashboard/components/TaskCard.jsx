import { twMerge } from "tailwind-merge";

const TaskCard = ({ tasks, roleColor }) => {
  //console.log(tasks)
  return (
    <div className="">
      <div className="flex flex-col gap-y-[9px] justify-between mt[8px] pl-[13px] pt-[15px] pb-[21px] pr-[30px] border-[0.4px] rounded-[12px] border-black ">
        {/* Tasks & role*/}
        <div className="flex justify-between items-center ">
          <h3 className="max-w-[187px] text-wrap font-inter text-[20px] font-[700] leading-[29px] text-[#101928]">
            {tasks.name}
          </h3>
          {/* role */}
          <div
            className={twMerge(
              "bg-[#082C25] px-[8.97px] py-[1.49px] rounded-2xl text-[#FAF9F6] flex justify-center items-center",
              roleColor
            )}
          >
            <p className=" text-[10.46px] font-[500] font-inter leading-[15.17px] text-center">
              {" "}
              {tasks?.type}{" "}
            </p>
          </div>
        </div>
        {/* Date & Delete */}
        <div className="flex justify-between items-center">
          <p className="text-[#475367] text-[14.6px] leading-[21.7px] font-[400] font-inter ">
            Date Added{" "}
          </p>
          <div className="flex justify-between items-center gap-x-[8px]">
            <p className="text-[#475367] text-[14.6px] font-[700] font-Inter leading-[12.17px] ">
              {tasks?.createdAt}
            </p>
            {tasks && (
              <div className="flex justify-center items-center gap-1">
                {/* <img src={EditIcon} /> */}
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 18C2.45 18 1.97933 17.8043 1.588 17.413C1.19667 17.0217 1.00067 16.5507 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8043 17.021 14.413 17.413C14.0217 17.805 13.5507 18.0007 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
                    fill="black"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
