import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AmbassadorCard from "./components/ambassadorTabs/AmbassadorCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

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
  const { token } = useContext(AuthContext);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // ambassadorQuery
  const ambassadorQuery = useQuery({
    queryKey: ["ambassador"],
    queryFn: () => axios.get(`${baseUrl}/ambassador/all`, { headers }),
  });
  if (ambassadorQuery.error) {
    console.log(ambassadorQuery.error);
  } else {
    console.log(ambassadorQuery.data);
  }
  return (
    <div className="flex flex-col px-[32px] gap-y-[16px] pt-[24px]">
      {ambassadorQuery.data?.data?.data?.all?.map((ambassador, index) => (
        <div
          onClick={() => navigateTo(`${ambassador.email}`)}
          key={index}
          className=" flex flex-col gap-y-[8px]"
        >
          {/* Card */}
          <AmbassadorCard ambassador={ambassador} />
        </div>
      ))}
    </div>
  );
};

export default Ambassadors;
