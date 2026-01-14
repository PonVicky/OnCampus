type ButtonProps = {
  content: string;
  bgColor: string;
  textColor: string;
};
const Button = ({ content, bgColor, textColor }: ButtonProps) => {
  return (
    <div className="font-inter ">
      <button
        style={{
          backgroundColor: bgColor,
          borderColor: bgColor,
          color: textColor,
        }}
        className={`  border  px-4 py-2 rounded-sm hover:cursor-pointer`}
      >
        <p className={`font-medium text-[16px]`}>{content}</p>
      </button>
    </div>
  );
};

export default Button;
