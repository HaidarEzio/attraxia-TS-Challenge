import tw, { styled } from "twin.macro";

const BadgeStitched = styled.span({
  ...tw`flex items-center justify-center w-6 h-6 font-medium rounded-full`,
  variants: {
    color: {
      green: tw`bg-green-600`,
      red: tw`bg-red-600`,
      blue: tw`bg-blue-600`,
      purple: tw`bg-purple-900`,
      gray: tw`bg-neutral-600`,
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
