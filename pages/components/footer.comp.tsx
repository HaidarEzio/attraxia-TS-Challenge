import Badge from "./reusable/badge.reusable";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex justify-between w-full mt-5 mb-10">
      <div className="flex w-28 justify-evenly">
        <Badge>1</Badge>
        <Badge>2</Badge>
        <Badge>3</Badge>
      </div>
      <div className="flex space-x-5 w-fit justify-evenly">
        <p>1-50 of 149</p>
        <div className="flex items-center justify-between space-x-3">
          <RiArrowLeftSLine size="1.5rem" className="p-0.5 align-bottom border rounded-sm" />
          <RiArrowRightSLine size="1.5rem" className="p-0.5 align-bottom border rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
