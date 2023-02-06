import tw, { styled } from "twin.macro"; //eslint-disable-line

interface BadgeProps {
  children: React.ReactNode;
  color?: "black" | "green" | "lightBlue" | "darkBlue" | "gray";
  cube?: boolean;
}

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
    cube: {
      true: {
        "&:before": {
          content: "",
          position: "absolute",
          left: "-2px",
          top: "8px",
          width: "8px",
          height: "8px",
          "background-color": "#E6E6E6",
          transform: "rotate(45deg)",
          " border-radius": "1.2px",
        },
        ...tw`rounded-sm bg-[#E6E6E6] text-black relative `,
      },
    },
  },
});

const Badge = ({ children, color, cube }: BadgeProps) => {
  return (
    <BadgeStitched cube={cube} color={color} className="flex items-center justify-center w-6 h-6 font-medium bg-green-600 rounded-full items">
      <span>{children}</span>
    </BadgeStitched>
  );
};

export default Badge;
