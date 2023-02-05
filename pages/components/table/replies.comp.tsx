import Image from "next/image";
import Badge from "../reusable/badge.reusable";

const Reply = ({ imgUrl, name, replyNumber, staff }: any) => {
  return (
    <div className="flex space-x-2">
      <Image className="rounded-full" src={imgUrl} alt="img" height={20} width={20} />
      <p>Last by {name}</p>
      <Badge variant>{replyNumber}</Badge>
      {staff ? <p className="">staff</p> : null}
    </div>
  );
};

export default Reply;
