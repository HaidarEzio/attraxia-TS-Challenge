import Image from "next/image";

interface SectionBodyProps {
  imgUrl: string;
  text: string;
  subText: string;
  children?: React.ReactNode;
}

const SectionBody = ({ imgUrl, text, subText, children }: SectionBodyProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 ">
      <Image src={imgUrl} width={64} height={64} alt="support-icon" />
      <h3 className="text-2xl font-bold">{text}</h3>
      <p className="text-center">{subText}</p>
      {children}
    </div>
  );
};

export default SectionBody;
