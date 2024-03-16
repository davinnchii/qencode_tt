type Props = {
  buttonText: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export const ButtonBlue: React.FC<Props> = ({ buttonText, type, onClick }) => {
  return (
    <button
      type={type}
      className="w-full bg-[#316FEA] text-white text-base font-medium flex justify-center items-center py-[13px] rounded-[8px]"
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}