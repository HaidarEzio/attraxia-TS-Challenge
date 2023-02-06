import Image from "next/image";
import Badge from "../reusable/badge.reusable";

const Reply = ({ imgUrl, name, replyNumber, staff }: any) => {
  return (
    <div className="flex space-x-2">
      <Image className="rounded-full" src={imgUrl} alt="img" height={20} width={20} />
      <p className="text-sm">Last by {name}</p>
      <Badge cube>{replyNumber}</Badge>
      {staff ? (
        <p className="px-3 flex justify-between items-center rounded-full font-medium text-sm bg-[#EDEDED]">
          <span>
            <Image src="./staff.svg" className="mr-2" width={12} height={12} alt="no" />
          </span>
          STAFF
        </p>
      ) : null}
    </div>
  );
};

export default Reply;
