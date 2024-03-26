import logo from "../assets/images/logo.png";
import { twMerge } from "tailwind-merge";

export const Logo = ({ className, logoImg }) => {
  return (
    <div className={twMerge("flex gap-x-[8.94px] items-center", className)}>
      <img src={logoImg || logo} className="" />
      <div className="flex items-baseline gap-x-[2px]">
        <span className="text-[28px] font-[700]">Beels</span>
        {/* Registered Trademark */}
        <div className=" bg-[#082C25] size-[10.43px] flex items-center justify-center">
          <div className="rounded-full size-[9.32px] border-[0.98px] border-[#ffffff] flex items-center justify-center">
            <span className="text-white text-[8px]">R</span>
          </div>
        </div>
      </div>
    </div>
  );
};
