import { useContext, useState } from "react";
import cameraICon from "../../../assets/images/camera.svg";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

const Security = () => {
  const { user, token } = useContext(AuthContext);
  const [verifiedInfo, setVerifiedInfo] = useState({
    first_name: "",
    email: "",
    phone: "",
    bvn: "",
    nin: "",
    image: "",
  });
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVerifiedInfo((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const extractFilledValues = (values) => {
    let obj = {};
    for (const key in values) {
      if (values[key].trim() !== "") {
        obj[key] = values[key];
      }
    }
    return obj;
  };
  const updateMutation = useMutation({
    mutationFn: (values) =>
      axios.post(`${baseUrl}/ambassador/profile/update`, values, { headers }),
    onSuccess: (data) => {
      //console.log(data);
      toast.success(data?.data?.message);
    },
    onError: (error) => {
      //console.log(error);
      toast.error(error?.response?.data?.message || error?.message);
    },
  });
  const handleUpdate = () => {
    // //console.log(updateForm);
    const extracted = extractFilledValues(verifiedInfo);
    //console.log(extracted);
    if (Object.keys(extracted).length > 0) {
      updateMutation.mutate();
    }
  };
  return (
    <div className="pb-[100px] mt-[50px]">
      {/* Image Upload */}
      <div className="">
        <h2 className="font-poppins font-[600] text-[24px] leading-[34.8px] text-[#667185]">
          Verified Information
        </h2>
        <div className="flex mt-[40px] gap-x-[20px] items-center">
          {/*image Upload  */}
          <div className="rounded-full size-[92px] bg-[#EFEFEF] flex justify-center items-center">
            <img src={cameraICon} className="size-[32px] " />
          </div>
          <p className="font-[600] text-[20px] font-poppins leading-[29px]  ">
            {" "}
            {user.first_name} {user.last_name}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full mt-[33px] gap-y-[24px]">
        {/* Email */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            Email Address
          </label>
          <input
            name="email"
            value={verifiedInfo.email}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>

        {/* Bank verification Number*/}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            Bank Verification Number (BVN)
          </label>
          <input
            name="bvn"
            readOnly
            value={verifiedInfo.bvn}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
        {/* National Identification Number (NIN) */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            National Identification Number (NIN)
          </label>
          <input
            name="nin"
            value={verifiedInfo.nin}
            onChange={handleInputChange}
            readOnly
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
      </div>
      {/* submit */}
      <button
        onClick={handleUpdate}
        className="bg-[#082C25] mt-[50px] w-full text-center font-inter text-[20px] font-[400] rounded-[8px] leading-[29px] p-[10px] text-white"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Security;
