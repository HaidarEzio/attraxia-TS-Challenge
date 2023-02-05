import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 py-6 mt-10 bg-white">
      <h3 className="font-bold">Support &nbsp;Resources</h3>
      <div className="flex items-center space-x-5">
        <h4 className="">Need Help?</h4>
        <button className="flex items-center py-3 space-x-2 bg-blue-600 rounded-lg px-7 ">
          <Image src="/lifebuoy.svg" width={20} height={20} alt="support-icon" />

          <span className="font-bold text-white">Get Support</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
