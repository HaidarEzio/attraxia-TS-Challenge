//? varients and colors

const StatusBadge = ({ title }: any) => {
  return (
    <div className="flex justify-center">
      <span className="px-3 py-1 text-center bg-red-500 rounded-full">{title}</span>
    </div>
  );
};

export default StatusBadge;
