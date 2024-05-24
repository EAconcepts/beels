import { useContext, useRef, useState } from "react";
import cameraICon from "../../../assets/images/camera.svg";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

const Account = () => {
  const { user } = useContext(AuthContext);
  const [updateForm, setUpdateForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    school: "",
    department: "",
    image: "",
  });
  const [avatar, setAvatar] = useState(null);
  const imgRef = useRef(null);

  const { token } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm((prevVals) => ({ ...prevVals, [name]: value }));
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

  const handleUpdate = () => {
    // //console.log(updateForm);
    const extracted = extractFilledValues(updateForm);
    //console.log(extracted);
    if (Object.keys(extracted).length > 0) {
      updateMutation.mutate();
    }
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

  const onFileChange = (e) => {
    //console.log(e.target.files[0]);
    const file = e.target.files[0];
    // const formData = new FormData()
    // formData.append('image')

    if (file) {
      setAvatar(file);
    }
    // //console.log(avatar);
  };
  const handleAvatarChange = () => {
    imgRef.current.click();
  };
  return (
    <div className="mt-[50px] pb-[100px] lg:W-full lg:flex flex-col lg:items-center">
      <div className="lg:self-start">
        <h2 className="font-poppins font-[600] text-[24px] leading-[34.8px] text-[#667185]">
          Personalize
        </h2>
        {/* Image Upload */}
        <div className=" flex mt-[40px] gap-x-[20px] items-center">
          {/*image Upload  */}
          <div
            onClick={handleAvatarChange}
            className="rounded-full size-[92px] bg-[#EFEFEF] flex justify-center items-center"
          >
            <input
              type="file"
              accept="image/*"
              hidden
              ref={imgRef}
              onChange={onFileChange}
            />
            <img
              src={(avatar && URL.createObjectURL(avatar)) || cameraICon}
              className={`size-[32px] ${
                avatar && "size-full rounded-full object-cover"
              }`}
            />
          </div>
          <p className="font-[600] text-[20px] font-poppins leading-[29px]  ">
            {" "}
            {user?.first_name} {user?.last_name}
          </p>
        </div>
      </div>
      {/* Form  inputs*/}
      <div className="flex flex-col w-full lg:w-[70%] mt-[33px] gap-y-[24px]">
        {/* Email */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            Email Address
          </label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className=" h-[44px] text-black/50 w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
        {/* First Name */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            First Name
          </label>
          <input
            name="first_name"
            value={updateForm.first_name}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
        {/* Last Name */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            Last Name
          </label>
          <input
            name="last_name"
            value={updateForm.last_name}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
        {/* Phone Number */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            Phone Number
          </label>
          <input
            name="phone"
            value={updateForm.phone}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
        {/* School */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            School
          </label>
          <input
            name="school"
            value={updateForm.school}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
        {/* Department */}
        <div className="flex w-full flex-col gap-y-[8px]">
          <label className="font-poppins text-[14px] leading-[20px] font-[700] text-[#242426]">
            Department
          </label>
          <input
            name="department"
            value={updateForm.department}
            onChange={handleInputChange}
            className=" h-[44px] w-full border-b-[1px] border-[#E2E4E5]"
          />
        </div>
      </div>
      {/* submit */}
      <button
        onClick={handleUpdate}
        className="bg-[#082C25] w-full text-center font-inter text-[20px] font-[400] rounded-[8px] leading-[29px] p-[10px] text-white lg:w-max lg:px-[32px] lg:mt-[24px]"
      >
        {updateMutation.isPending ? "Saving Changes..." : " Save Changes"}
      </button>
    </div>
  );
};

export default Account;
