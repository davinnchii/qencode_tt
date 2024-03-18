type Props = {
  buttonText: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  classNames?: string;
  onClick?: () => void;
}

export const ButtonBlue: React.FC<Props> = ({
  buttonText,
  type,
  onClick,
  classNames,
}) => {
  return (
    <button
      type={type}
      className={`w-full bg-[#316FEA] text-white text-[16px] leading-[21px]  font-medium flex justify-center items-center py-[13px] rounded-[8px] ${classNames}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}