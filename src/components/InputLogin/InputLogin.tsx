import Image from 'next/image';
import { FieldErrors, useController, UseControllerProps, UseFormClearErrors } from 'react-hook-form';
import { FormValues } from '@/utils/FormValues';
import { PassResetLink } from '@/components/PassResetLink/PassResetLink';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { getFieldLabelByName } from '@/utils/getFieldLabelByName';

type Props = {
  props: UseControllerProps<FormValues>
  placeholder: string;
  type: string;
  errors: FieldErrors<FormValues>;
  clearErrors: UseFormClearErrors<FormValues>;
  onClick?: () => void;
  label?: string;
}
export const InputLogin: React.FC<Props> = ({
  props,
  placeholder,
  type,
  errors,
  clearErrors,
  onClick,
  label
}) => {
  const { field, fieldState } = useController(props);

  const handleClearErrors = () => {
    if (errors[props.name]) {
      clearErrors(props.name);
    }
  }

  const showEyeIcon = props.name.toLowerCase().includes('password');

  return (
    <>
      <div className={`w-full text-right ${label?.length ? 'mt-[25px]' : ''}`}>
        <div className="flex justify-end items-center relative w-full">
          <p className=" absolute left-0 -top-8 font-medium text-[15px] leading-[21px] text-[#060E1E]">
            {label}
          </p>
          <input
            {...field}
            type={type}
            className="w-full px-[12px] py-[14px] rounded-[6px] border-[1px] text-sm font-normal text-[#060E1E] "
            placeholder={placeholder}
            aria-invalid={errors[props.name] ? 'true' : 'false'}
            onClick={() => handleClearErrors()}
          />


          {errors[props.name]?.type === 'required' && (
            <ErrorMessage message="This field is required" />
          )}

          {errors[props.name]?.type === 'pattern' && (
            <ErrorMessage message="Email should be in valid format, f.e: name@domain.com" />
          )}

          {errors[props.name]?.type === 'minLength' && (
            <ErrorMessage message="Password should be at least 8 characters long" />
          )}

          {errors[props.name]?.type === 'custom' && (
            <ErrorMessage message={errors.password?.message || 'Invalid data'} />
          )}

          {showEyeIcon && (
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

        {(props.name === 'password' && !label?.length) && <PassResetLink />}
      </div>
    </>
  )
}