import CheckIcon from "../../assets/images/invite.png";

const Invite = ({ setShowSuccessModal }) => {
  // if (!modal) {
  //   return null;
  // }
  //console.log("Hi");
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white p-5 rounded-lg w-[80%] max-w-md">
        <div className="justify-center flex items-center">
          <img src={CheckIcon} />
        </div>

        <p className="text-[#202020] text-center my-3 text-[20px] max-lg:text-lg max-md:text-base max-sm:text-sm font-[500] font-[Poppins] ">
          Invite Successfully sent
        </p>
        <p className="text-[#202020] text-center my-3 text-[16px] max-lg:text-sm max-sm:text-xs font-[400] font-[Poppins] ">
          Your invite has been sent to the Lead Ambassador’s mail.
        </p>
        <button
          className="justify-center w-[100%] flex items-center bg-[#082C25] mb-4 rounded-md py-2"
          onClick={() => setShowSuccessModal(false)}
        >
          <p className="text-[#FFFFFF] text-center text-[14px] max-md:text-xs max-sm:text-[10px] font-[400] font-[Rockwell] ">
            close
          </p>
        </button>
      </div>
    </div>
  );
};

export default Invite;
