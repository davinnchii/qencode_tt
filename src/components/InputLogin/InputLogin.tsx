type Props = {
  placeholder: string;
}
export const InputLogin: React.FC<Props> = ({ placeholder }) => {
  return (
    <input
      className="w-full px-[12px] py-[14px] rounded-[6px] border-[1px] text-sm font-normal text-[#060E1E]"
      placeholder={placeholder}
    />
  )
}