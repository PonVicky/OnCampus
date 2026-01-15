type ButtonProps = {
  content: string;
};
const Button = ({ content }: ButtonProps) => {
  return (
    <div className="font-inter ">
      <button
        className={`bg-[#d3fb52] hover:bg-[#a1dd3b] transition-colors duration-150  px-4 py-2 rounded-sm hover:cursor-pointer`}
      >
        <p className={`font-medium text-[16px]`}>{content}</p>
      </button>
    </div>
  );
};

export default Button;
