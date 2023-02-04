import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDown = () => {
  const [openDropDown, setOpenDropDown] = useState<Boolean>(false);

  return (
    <div className="relative flex space-x-1">
      <h4> All Tickets</h4>
      <span className="px-1 bg-red-700 rounded-full">10</span>
      <button className="align-middle" onClick={() => setOpenDropDown(!openDropDown)}>
        <RiArrowDownSLine />
      </button>{" "}
      {openDropDown && <div className="absolute h-[10rem] p-5 bg-white border w-[14rem]">hello there</div>}
    </div>
  );
};

export default DropDown;
