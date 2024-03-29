import Image from 'next/image';

type Props = {
  buttonText: string;
  icon: string;
}

export const ButtonSSO: React.FC<Props> = ({ buttonText, icon }) => {
  return (
    <div className="w-[50%] px-[20px] py-[14px] rounded-[6px] border-[1px] border-[#D3D8DC] flex justify-center items-center">
      <button type="button">
      <span className="font-medium text-sm">
        <Image width={18} height={18} src={icon} alt="icon" className="inline mr-2" />
        {buttonText}
      </span>
      </button>
    </div>
  )
}