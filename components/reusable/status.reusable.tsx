import tw, { styled } from "twin.macro"; //eslint-disable-line

const StatusBadgeStitched = styled.span({
  ...tw`px-3 py-1 text-center rounded-full`,
  variants: {
    status: {
      Resolved: tw`text-white bg-[#52D194]`,
      Open: tw`bg-[#286EF1] text-white`,
      Feedback: tw`bg-[#9026B1] text-white`,
      All: tw`bg-[#E6E6E6] text-black`,
    },
  },
});
//* there's a bug with the title type, it's not being recognized as a string or it's own type,
const StatusBadge = ({ title }: any) => {
  return (
    <div className="flex justify-center">
      <StatusBadgeStitched status={title}>{title}</StatusBadgeStitched>
    </div>
  );
};

export default StatusBadge;
