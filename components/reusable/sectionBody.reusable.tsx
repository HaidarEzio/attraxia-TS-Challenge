import Image from "next/image";

interface SectionBodyProps {
  imgUrl: string;
  text: string;
  subText: string;
  children?: React.ReactNode;
  widthAndHeight?: number;
}

const SectionBody = ({ imgUrl, text, subText, children, widthAndHeight = 64 }: SectionBodyProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-5 bg-white ">
      <Image src={imgUrl} width={widthAndHeight} height={widthAndHeight} alt="support-icon" />
      <h3 className="text-2xl font-bold">{text}</h3>
      <p className="text-center">{subText}</p>
      {children}
    </div>
  );
};

export default SectionBody;
