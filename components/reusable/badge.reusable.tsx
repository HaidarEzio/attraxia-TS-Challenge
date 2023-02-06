import tw, { styled } from "twin.macro"; //eslint-disable-line

const BadgeStitched = styled.span({
  ...tw`flex items-center justify-center w-6 h-6 font-medium rounded-full text-[#333333]`,
  variants: {
    color: {
      black: tw`text-white bg-black`,
      green: tw`bg-green-600`,
      red: tw`bg-red-600`,
      gray: tw`bg-neutral-200`,
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
