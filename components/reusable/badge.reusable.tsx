import tw,{styled} from 'twin.macro'



const Badge = ({ children }: any) => {
  return (
    <span className="flex items-center justify-center w-6 h-6 font-medium bg-green-600 rounded-full items">
      <span>{children}</span>
    </span>
  );
};

export default Badge;
