import { BiSearch, BiRightArrowAlt } from "react-icons/bi";

type SearchBarProps = {
  placeholder: string;
  setTicket?: any;
};
//* Make variant
const SearchBar = ({ placeholder, setTicket }: SearchBarProps) => {
  return (
    <div>
      <div className="h-11 px-4 w-[25rem] space-x-1 rounded-full text-neutral-700 bg-[#F2F2F2]  flex items-center">
        <BiSearch size="1.2rem" className="align-bottom" color="#707070" />
        <input
          type="text"
          className="text-sm bg-transparent placeholder:text-[#555555] focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
          onChange={(e) => setTicket!(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
