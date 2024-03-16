import Image from 'next/image';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormValues } from '@/utils/FormValues';
import { PassResetLink } from '@/components/PassResetLink/PassResetLink';

type Props = {
  props: UseControllerProps<FormValues>
  placeholder: string;
  type: string;
  onClick?: () => void;
}
export const InputLogin: React.FC<Props> = ({
  props,
  placeholder,
  type,
  onClick
}) => {
  const { field, fieldState } = useController(props)
  return (
    <>
      <div className="w-full text-right">
        <div className="flex justify-end items-center relative w-full">
          <input
            {...field}
            type={type}
            className="w-full px-[12px] py-[14px] rounded-[6px] border-[1px] text-sm font-normal text-[#060E1E] "
            placeholder={placeholder}
          />
          {props.name === 'password' && (
            <>
              <button
                type="button"
                className="absolute mr-[15px]"
                onClick={onClick}
              >
                <Image width={20}
                       height={20}
                       src="/icon-eye.svg"
                       alt="Show Password Icon" />
              </button>
            </>
          )}
        </div>
        {props.name === 'password' && <PassResetLink />}
      </div>
    </>
  )
}