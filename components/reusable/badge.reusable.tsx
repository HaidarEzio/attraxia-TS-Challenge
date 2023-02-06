import tw, { styled } from "twin.macro"; //eslint-disable-line

const BadgeStitched = styled.span({
  ...tw`flex items-center justify-center w-6 h-6 font-bold rounded-full text-[#333333]`,
  variants: {
    color: {
      black: tw`text-white bg-black`,
      green: tw`text-white bg-[#52D194]`,
      lightBlue: tw`bg-[#286EF1] text-white`,
      darkBlue: tw`bg-[#9026B1] text-white`,
      gray: tw`bg-[#E6E6E6] text-black`,
    },
  },
});

const Badge = ({ children, color }: any) => {
  return (
    <BadgeStitched color={color} className="flex items-center justify-center w-6 h-6 font-medium bg-green-600 rounded-full items">
      <span>{children}</span>
    </BadgeStitched>
  );
};

export default Badge;
