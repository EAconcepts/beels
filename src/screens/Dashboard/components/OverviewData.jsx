import { twMerge } from "tailwind-merge";

const OverviewData = ({ props, IconClass }) => {
  // console.log(props);
  return (
    <div className="w-full">
      <div className="w-full flex max-lg:flex-col lg:gap-x-[19px] justify-between max-lg:justify-center items-center max-lg:items-start max-lg:pl-[32px] pr-[76px] gap-y-[40px]">
        {/* Category Data */}
        {props?.map((item, index) => (
          <div
            key={index}
            className="flex px-[15px] gap-x-[9px] py-[27px] w-full  items-center border rounded-md"
          >
            {/* Icon image */}
            <div
              className={twMerge(
                " w-fit p-[20px] rounded-full lg:bg-[#B9FFC2] bg-[#B6F485] flex justify-center items-center",
                IconClass
              )}
            >
              <img src={item.iconImg} />
            </div>
            <div className="flex flex-col ">
              <p className="text-[20px] leading-[29px] font-[500] text-[#667185] font-[Inter]">
                {" "}
                {item.title}
              </p>
              <p className="text-[32px] font-[700] text-[#000000] font-inter leading-[46.4px]">
                {" "}
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewData;
