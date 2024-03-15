type Props = {
  buttonText: string;
}

export const ButtonBlue: React.FC<Props> = ({ buttonText }) => {
  return (
    <button
      className="w-full bg-[#316FEA] text-white text-base font-medium flex justify-center items-center py-[13px] rounded-[8px]"
    >
      {buttonText}
    </button>
  )
}