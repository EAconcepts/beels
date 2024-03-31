import logo from "../assets/images/logo.png";
import { twMerge } from "tailwind-merge";

export const Logo = ({ className, logoImg }) => {
  return (
    <div className={twMerge("flex gap-x-[8.94px] items-center", className)}>
      <img src={logoImg || logo} className="lg:hidden" />
      <svg
        className="lg:block hidden"
        width="27"
        height="32"
        viewBox="0 0 27 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          clipRule="evenodd"
          d="M1.67094 17.5916C0.037405 22.3555 4.1198 28.0713 10.7892 30.3583C17.4586 32.6452 24.1895 30.6373 25.823 25.8734C27.4566 21.1095 23.3742 15.3937 16.7048 13.1068C10.0353 10.8198 3.30447 12.8278 1.67094 17.5916ZM3.56019 18.4528C2.37871 21.8983 5.0227 25.9265 9.4657 27.45C13.9087 28.9735 18.4682 27.4154 19.6497 23.9699C20.8312 20.5243 18.1872 16.4961 13.7442 14.9726C9.30121 13.4491 4.74167 15.0072 3.56019 18.4528Z"
          fill="#082C25"
        />
        <path
          d="M15.4526 16.9768C10.5531 21.1745 4.30447 21.6543 1.43259 18.0268C-1.46561 14.366 0.172626 7.90863 5.09169 3.60375C10.0108 -0.70112 16.3479 -1.22329 19.2461 2.43745C21.386 5.14042 21.0528 9.36811 18.7517 13.1282C18.2893 12.9277 17.813 12.7429 17.3237 12.5751C16.7091 12.3644 16.094 12.1874 15.4818 12.0432C16.3227 9.8443 16.2094 7.58451 14.965 6.01264C12.8888 3.39022 8.45039 3.67565 5.05147 6.65017C1.65256 9.6247 0.58027 14.1619 2.65644 16.7844C4.73261 19.4068 9.17104 19.1213 12.57 16.1468C12.7439 15.9946 12.9118 15.8382 13.0735 15.6782C13.9623 16.0051 14.763 16.4497 15.4526 16.9768Z"
          fill="#082C25"
        />
      </svg>

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
