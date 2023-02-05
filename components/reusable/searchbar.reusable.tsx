import { BiSearch, BiRightArrowAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div>
      <div className="h-11 px-4 w-[25rem] space-x-1 rounded-full text-neutral-700 bg-[#F2F2F2]  flex items-center">
        <BiSearch size="1.2rem" className="align-bottom" color="#707070" />
        <input
          type="text"
          className="text-sm bg-transparent placeholder:text-[#555555] focus:outline-none focus:border-blue-500"
          placeholder="Search Support Forum"
        />
      </div>
    </div>
  );
};

export default SearchBar;
