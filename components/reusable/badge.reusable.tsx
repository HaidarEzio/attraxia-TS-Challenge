const Badge = ({ children }) => {
  return (
    <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full items ">
      <span>{children}</span>
    </span>
  );
};

export default Badge;