import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { StatusType } from "utils/placeholder.data";
import { useAtom } from "jotai";
import { statusAtom } from "@/pages";
import Badge from "./badge.reusable";

const DropDown = () => {
  const data = [
    {
      label: "All",
      value: 10,
      color: "gray",
    },
    {
      label: "Open",
      value: 5,
      color: "lightBlue",
    },
    {
      label: "Feedback",
      value: 2,
      color: "darkBlue",
    },
    {
      label: "Resolved",
      value: 3,
      color: "green",
    },
  ] as const;

  const [openDropDown, setOpenDropDown] = useState<Boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<StatusType>("All");
  const [selectedValue, setSelectedValue] = useState<number>(data[0].value);
  const [selectedColor, setSelectedColor] = useState<string>(data[0].color);

  const [status, setStatus] = useAtom(statusAtom);

  return (
    <div className="relative w-[10rem]" onClick={() => setOpenDropDown(!openDropDown)}>
      <div className="flex justify-between">
        <h4 className="ml-5 font-bold">{selectedLabel}</h4>
        <div className="flex space-x-1">
          <Badge color={selectedColor}>{selectedValue}</Badge>
          <button className="align-middle">
            <RiArrowDownSLine />
          </button>
        </div>
      </div>
      {openDropDown && (
        <div className="absolute right-0 z-10 w-full p-2 bg-white border rounded-sm shadow-md -top-3">
          {data.map(({ label, value, color }, idx) => (
            <p
              className="flex justify-between px-2 py-1 text-sm font-bold text-[#333333] hover:bg-neutral-100"
              key={idx}
              onClick={() => {
                setStatus(label);
                setSelectedLabel(label);
                setSelectedValue(value);
                setSelectedColor(color);
              }}
            >
              {label}
              <Badge color={color}>{value}</Badge>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
