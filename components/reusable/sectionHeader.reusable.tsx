import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const SectionHeader = ({ title, children }: SectionHeaderProps) => {
  return (
    <section className="flex items-center justify-between px-8 py-6 mt-10 bg-white">
      <h3 className="font-bold">{title}</h3>
      {children}
    </section>
  );
};

export default SectionHeader;
