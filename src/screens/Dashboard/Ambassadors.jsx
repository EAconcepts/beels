import { useContext, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import AmbassadorCard from "./components/ambassadorTabs/AmbassadorCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import ViewAmb from "./components/ViewAmb";
import { BsPlus } from "react-icons/bs";

export const allAmbassadors = [
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
  {
    email: "Sandy04@gmail.com",
    name: "Sandra Akpotu",
    role: "Lead",
    DateAdded: "03/01/2024",
  },
];
const Ambassadors = () => {
  const navigateTo = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { token, user } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const [showAddLeads, setHeaderTitle] = useOutletContext();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    setHeaderTitle(
      `View all ${user.type !== "Admin" ? "Sub" : ""} Ambassadors`
    );
  }, []);
  // ambassadorQuery
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () =>
      axios.get(
        `${baseUrl}/ambassador/${user.type === "Admin" ? "all" : "dashboard"}`,
        { headers }
      ),
  });
  // const ambassadorQuery = useQuery({
  //   queryKey: ["ambassador"],
  //   queryFn: () => axios.get(`${baseUrl}/ambassador/dashboard`, { headers }),
  // });
  let data;
  if (ambassadorQuery.error) {
    //console.log(ambassadorQuery.error);
  } else {
    //console.log(ambassadorQuery.data);
    data =
      user?.type == "Admin"
        ? ambassadorQuery.data?.data?.data?.all
        : ambassadorQuery.data?.data?.data?.sub;
  }
  return (
    <div className="flex flex-col xsm:px-[32px] px-[16px] gap-y-[16px]max-lg:pt-[24px] ">
      <div className="lg:hidden mt-[18px] flex flex-col gap-y-[16px]">
        {
          // ambassadorQuery.data?.data?.data?.sub?
          data?.map((ambassador, index) => (
            <div
              onClick={() => navigateTo(`${ambassador.email}`)}
              key={index}
              className="lg:hidden flex flex-col gap-y-[8px] "
            >
              {/* Card */}
              <AmbassadorCard ambassador={ambassador} />
            </div>
          ))
        }
      </div>
      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="mt-[57px] mb-[19px] flex justify-between w-full">
          <h2 className="font-poppins text-[32px] leading-[46.6px] font-[600] text-black hidden lg:block ">
            View all {user.type === "Admin" && "Lead"} Ambassadors
          </h2>
          <button className="flex items-center gap-x-[10px] bg-[#082C25] text-white py-[12px] px-[20px] rounded-[8px]">
            <BsPlus className="text-[24px]" />
            <span className="text-[14px] leading-[20.3px] font-[400]">Add</span>
          </button>
        </div>

        {ambassadorQuery?.data?.data && (
          <ViewAmb ambassadorQuery={data && data} />
        )}
      </div>
    </div>
  );
};

export default Ambassadors;
