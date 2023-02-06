import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
import tw, { styled } from "twin.macro"; //eslint-disable-line

const SearchBarStitched = styled.div({
  ...tw`flex justify-between w-full`,
  variants: {
    small: {
      true: tw`w-1/2 `,
    },
  },
});

type SearchBarProps = {
  placeholder: string;
  setTicket?: any;
  small?: boolean;
};
//* Make variant
const SearchBar = ({ placeholder, setTicket, small }: SearchBarProps) => {
  return (
    <SearchBarStitched small={small}>
      <div className="h-11 px-4 w-[25rem] space-x-1 rounded-full text-neutral-700 bg-[#F2F2F2]  flex items-center">
        <BiSearch size="1.2rem" className="align-bottom" color="#707070" />
        <input
          type="text"
          className="text-sm bg-transparent placeholder:text-[#555555] focus:outline-none focus:border-blue-500"
          placeholder={placeholder}
          onChange={(e) => setTicket!(e.target.value)}
        />
      </div>
    </SearchBarStitched>
  );
};

export default SearchBar;
