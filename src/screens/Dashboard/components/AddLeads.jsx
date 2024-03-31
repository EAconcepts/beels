// import React from "react";
import { useContext, useState } from "react";
import CancelIcon from "../../../assets/images/cancel.png";
// import Invite from "../../../components/modal/Invite";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import Invite from "../../../components/modal/Invite";

const AddLeads = ({ setShowAddLeads }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [leadInfo, setLeadInfo] = useState({
    email: "",
    first_name: "",
    type: "Lead",
    last_name: "",
    phone: "",
    school: "",
    department: "",
  });
  // Form onchange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeadInfo((prevVals) => ({ ...prevVals, [name]: value }));
  };
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const { token } = useContext(AuthContext);

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  // Submit lead invite
  const handleSendInvite = (e) => {
    e.preventDefault();
    console.log(leadInfo);
    inviteMutation.mutate();
  };

  // InviteMutation
  const inviteMutation = useMutation({
    mutationFn: () =>
      axios.post(`${apiUrl}/ambassador/invite/send`, leadInfo, { headers }),
    onSuccess: (data) => {
      console.log(data);
      setShowSuccessModal(true);
      setLeadInfo(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      <div className="left-0 w-full top-0 bottom-0 h-screen fixed bg-black/40 z-[999] "></div>

      <div className="w-full lg:w-[50%] max-lg:left-0 lg:right-0 lg:pl-[44px] pr-[164px] bg-white z-[999] fixed top-0 bottom-0 overflow-y-scroll">
        <div className="max-lg:flex max-lg:flex-col max-lg:justify-cente  px-[32px] pb-[100px]">
          {/* Close Icon */}
          <div className="flex justify-end items-center pt-[37px] ">
            <img
              src={CancelIcon}
              className="size-[48px] lg:absolute top-[49px] right-[45px]"
              onClick={() => setShowAddLeads(false)}
            />
          </div>
          {/* Header */}
          <div className="flex flex-col gap-y-[12px] lg:pt-[131px]">
            <h3 className="text-[24px] lg:text-[32px] lg:leading-[36px] lg:text-[#242731] pt-[9px] font-[700] leading-[34.8px] text-black font-Poppins">
              {" "}
              Lead Ambassador Info{" "}
            </h3>
            <p className="text-[16px] font-[400] text-black lg:font-[300] leading-[22px] font-poppins">
              Fill in the data for the lead ambassador. A email will be sent to
              their address to onboard them.
            </p>
          </div>
          {/* Lead Ambassador form */}
          <div className="lg:w-max flex flex-col px-[24px] mt-[72px]">
            <form
              className="lg:w-full flex flex-col gap-y-[32px] font-poppins lg:border-[1px] lg:border-[#E2E4E5] lg:p-[32px] lg:rounded-[8px]"
              onSubmit={handleSendInvite}
            >
              {/* Form header */}
              <div className="flex flex-col gap-y-[2px] ">
                <h2 className="text-[20px] font-[600] text-[#242731] ">
                  {" "}
                  Lead Ambassador Info{" "}
                </h2>
                <p className="text-[12px] leading-[16px] font-[300] text-[#575F6E] ">
                  Please fill in the required details{" "}
                </p>
              </div>
              {/* Email Address */}
              <div className="lg:w-full flex flex-col gap-y-[8px]">
                <p className="text-[14px] font-[400] leading-[20px] text-[#242426]">
                  Lead Ambassador Email Address{" "}
                </p>
                <input
                  type="email"
                  required
                  onChange={handleInputChange}
                  value={leadInfo.email}
                  name="email"
                  className=" w-full lg:w-[392px] py-[8px] px-[16px] email-input text-black border-b-[1px] border-[#E2E4E5] "
                />
                {/* {emailError && <p className="text-red-500">
                    {emailError}
                    </p>} */}
              </div>
              {/* First Name */}
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[14px] font-[400] leading-[20px] text-[#242426]">
                  Lead’s First Name
                </p>
                <input
                  type="text"
                  required
                  name="first_name"
                  className=" w-full py-[8px] px-[16px] email-input text-black border-b-[1px] border-[#E2E4E5] "
                  value={leadInfo.first_name}
                  onChange={handleInputChange}
                />
                {/* {emailError && <p className="text-red-500">
                    {emailError}
                    </p>} */}
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[14px] font-[400] leading-[20px] text-[#242426]">
                  Lead’s Last Name
                </p>
                <input
                  required
                  type="text"
                  name="last_name"
                  className=" w-full py-[8px] px-[16px] email-input text-black border-b-[1px] border-[#E2E4E5] "
                  value={leadInfo.last_name}
                  onChange={handleInputChange}
                />
                {/* {emailError && <p className="text-red-500">
                    {emailError}
                    </p>} */}
              </div>
              {/* Phone Number */}
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[14px] font-[400] leading-[20px] text-[#242426]">
                  Lead’s Phone Number
                </p>
                <input
                  required
                  type="text"
                  name="phone"
                  className=" w-full py-[8px] px-[16px] email-input text-black border-b-[1px] border-[#E2E4E5] "
                  value={leadInfo.phone}
                  onChange={handleInputChange}
                />
                {/* {emailError && <p className="text-red-500">
                    {emailError}
                    </p>} */}
              </div>
              {/* School */}
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[14px] font-[400] leading-[20px] text-[#242426]">
                  Lead’s School
                </p>
                <input
                  type="text"
                  name="school"
                  required
                  className=" w-full py-[8px] px-[16px] email-input text-black border-b-[1px] border-[#E2E4E5] "
                  value={leadInfo.school}
                  onChange={handleInputChange}
                />
                {/* {emailError && <p className="text-red-500">
                    {emailError}
                    </p>} */}
              </div>
              {/* Department */}
              <div className="flex flex-col gap-y-[8px]">
                <p className="text-[14px] font-[400] leading-[20px] text-[#242426]">
                  Lead’s Department
                </p>
                <input
                  type="text"
                  required
                  name="department"
                  className=" w-full py-[8px] px-[16px] email-input text-black border-b-[1px] border-[#E2E4E5] "
                  value={leadInfo.department}
                  onChange={handleInputChange}
                />
                {/* {emailError && <p className="text-red-500">
                    {emailError}
                    </p>} */}
              </div>
              {/* Submut button */}
              <div className="flex lg:justify-start justify-center lg:mt-[24px] mt-[53px]">
                <button
                  className="lg:w-fit w-full bg-[#082C25] lg:px-[84px] lg:py-[15px] p-[10px] flex justify-center items-center rounded-[8px] text-white text-[20px] font-[400] font-inter"
                  type="submit"
                >
                  {inviteMutation.isPending ? (
                    <div className="loader"></div>
                  ) : (
                    " Send Invite"
                  )}
                </button>
              </div>
              {/* {isErrorVisible && (
              <>
                <p className="text-red-500 text-center">{error} </p>
                <p className="text-red-500 text-center"> Try again </p>
              </>
            )} */}
            </form>
          </div>
          {showSuccessModal && (
            <Invite setShowSuccessModal={setShowSuccessModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddLeads;
