import { PiCaretUpDown } from "react-icons/pi";
import Checkbox from "../../../components/Checkbox";
// import LeadIcon from "../../../assets/images/lead.png";
// import { HiOutlinePencil } from "react-icons/hi";
import { TfiTrash } from "react-icons/tfi";
import { formatDate } from "../../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import DeleteModal from "../../../components/modal/DeleteModal";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CiUser } from "react-icons/ci";

const ViewAmb = ({ ambassadorQuery }) => {
  // //console.log(ambassadorQuery);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigateTo = useNavigate();
  const { token } = useContext(AuthContext);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const deleteMutation = useMutation({
    mutationFn: (email) =>
      axios.get(`${baseUrl}/ambassador/delete-amb/${email}`, {
        headers,
      }),
    onSuccess: (data) => {
      //console.log(data);
    },
    onError: (error) => {
      //console.log(error);
    },
  });
  return (
    <div className="">
      <table className="w-full">
        {/* Table Header */}
        <thead>
          <tr className="text-[8.97px] text-start  font-inter font-[500] leading-[13px] tracking-[-0.5%] text-[#D0D5DD]">
            <th className=" pl-[19.73px]">
              <div className="flex">
                <Checkbox className="pr-[8.97px] text" />
                <span className="pr-[2.99px] text-start">Name</span>
                <PiCaretUpDown />
              </div>
            </th>
            <th className="text-start">Email Address</th>
            <th className="text-start">Type</th>
            <th className="text-start">
              <div className="flex">
                <span>Date Added</span>
                <PiCaretUpDown />
              </div>
            </th>
            <th className="text-start">Status</th>
          </tr>
        </thead>
        <tbody>
          {ambassadorQuery &&
            ambassadorQuery?.map((ambassador, index) => (
              <tr
                onClick={() => navigateTo(`${ambassador.email}`)}
                key={index}
                className="bg-[#FAF9F6] "
              >
                {/* Name & Role */}
                <td className="py-[11.9px] px-[19.73px]">
                  <div className="flex gap-x-[8.9px] items-center">
                    <Checkbox className="" />
                    <div className="flex gap-x-[12.51px] justify-start items-center ">
                      {/* <img
                        src={LeadIcon}
                        className=" roundedfull size-[41.7px]"
                      /> */}
                      <CiUser className="size-[32px]" />

                      {/* </div>/ */}
                      <div className="flex flex-col font-inter text-[10.46px] leading-[21.17px] ">
                        <p className="text-[#101928]   font-[500]  ">{`${ambassador?.first_name}   ${ambassador?.last_name}  `}</p>
                        <p className="text-[#475367] font-[400]  ">
                          {ambassador?.type} Ambassador
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                {/* Email Address */}
                <td className="text-[#475367] leading-[15.17px] text-[10.46px] font-[400] font-inter">
                  {ambassador?.email}
                </td>
                {/* Type */}
                <td>
                  <p className="bg-[#22612A] text-[10.46px] leading-[15.17px] font-[500] text-center w-fit py-[1.49px] px-[8.97px] rounded-[8.97px] text-white">
                    {ambassador?.type} Ambassador
                  </p>
                </td>
                {/* Date Added */}
                <td>{formatDate(ambassador?.created_at)}</td>
                {/* Status & Edit, Delete */}
                <td className=" ">
                  <div className="flex  items-center gap-x-[44px]">
                    {/* Status */}
                    <span
                      className={`border w-[54px] text-center rounded-[8.97px] px-[8.97px] py-[1.40px] text-[10.46px] ${
                        ambassador?.status === "1"
                          ? "bg-[#E7F6EC] text-[#099137] "
                          : "bg-[#FFF9E8] text-[#FFC000]"
                      } `}
                    >
                      {ambassador?.status === "1" ? "Active" : "Inactive"}
                    </span>
                    {/* Edit & Delete */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDeleteModal(true);
                      }}
                      className="  flex gap-x-[8.97px] pl-[17.93px]"
                    >
                      {/* <HiOutlinePencil /> */}
                      <TfiTrash />
                    </div>
                  </div>
                </td>
                {showDeleteModal && (
                  <DeleteModal
                    deleteFn={() => deleteMutation.mutate(ambassador.email)}
                    name={`${ambassador.first_name} ${ambassador.last_name}`}
                    setShowDeleteModal={setShowDeleteModal}
                    isPending={deleteMutation.isPending}
                  />
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAmb;
