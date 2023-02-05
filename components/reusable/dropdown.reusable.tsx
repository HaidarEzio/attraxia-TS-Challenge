import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { StatusType } from "utils/placeholder.data";

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

  return (
    <div className="relative w-[7rem]" onClick={() => setOpenDropDown(!openDropDown)}>
      <div className="flex justify-between">
        <h4 className="">{selectedLabel}</h4>
        <div className="flex justify-evenly">
          <span className="px-1 bg-red-700 rounded-full">{selectedValue}</span>
          <button className="align-middle">
            <RiArrowDownSLine />
          </button>
        </div>
      </div>
      {openDropDown && (
        <div className="absolute top-0 right-0 w-full bg-white border shadow-md n">
          {data.map(({ label, value }, idx) => (
            <p
              className="flex justify-between px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
              key={idx}
              onClick={() => {
                setSelectedLabel(label);
                setSelectedValue(value);
              }}
            >
              {label}
              <span>{value}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
