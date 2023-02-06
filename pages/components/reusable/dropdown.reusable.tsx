import { useState, useMemo } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { StatusType, defaultData } from "utils/placeholder.data";
import { useAtom } from "jotai";
import { statusAtom } from "@/pages";
import Badge from "./badge.reusable";

const DropDown = () => {
  const data = [
    {
      label: "All",
      value: 2,
    },
    {
      label: "Open",
      value: 65,
    },
    {
      label: "Feedback",
      value: 27,
    },
    {
      label: "Resolved",
      value: 35,
    },
  ] as const;

  const [openDropDown, setOpenDropDown] = useState<Boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<StatusType>("All");
  const [selectedValue, setSelectedValue] = useState<number>(data[0].value);

  const [status, setStatus] = useAtom(statusAtom);

  return (
    <div className="relative w-[10rem]" onClick={() => setOpenDropDown(!openDropDown)}>
      <div className="flex justify-between">
        <h4 className="ml-5 font-bold">{selectedLabel}</h4>
        <div className="flex justify-evenly">
          <Badge>{selectedValue}</Badge>
          <button className="align-middle">
            <RiArrowDownSLine />
          </button>
        </div>
      </div>
      {openDropDown && (
        <div className="absolute right-0 w-full p-2 bg-white border rounded-sm shadow-md -top-3 ">
          {data.map(({ label, value }, idx) => (
            <p
              className="flex justify-between px-2 py-1 text-sm font-bold text-[#333333] hover:bg-neutral-100"
              key={idx}
              onClick={() => {
                setStatus(label);
                setSelectedLabel(label);
                setSelectedValue(value);
              }}
            >
              {label}
              <Badge>{value}</Badge>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
