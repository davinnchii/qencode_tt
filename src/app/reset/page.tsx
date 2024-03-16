'use client';
import { Logo } from '@/components/Logo/Logo';
import { HeadingText } from '@/components/HeadingText/HeadingText';
import { InputLogin } from '@/components/InputLogin/InputLogin';
import { ButtonBlue } from '@/components/ButtonBlue/ButtonBlue';
import { UseControllerProps, useForm } from 'react-hook-form';
import { FormValues } from '@/utils/FormValues';
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function Page() {
  const router = useRouter();
  const { handleSubmit, control,
    formState: { errors }, setValue } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
    reValidateMode: "onSubmit"
  });

  const emailProps: UseControllerProps<FormValues> = {
    control,
    name: 'email',
    rules: { required: true }
  }

  const onSubmit = async (data: FormValues) => {
    await axios.post('/api/auth_data', { email: data.email });

    router.push('/password');
  }

  return (
    <main className="flex flex-col items-center pt-[180px] gap-[80px] font-grotes">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px] items-center w-full max-w-[400px] p-5 lg:w-[400px]">
        <HeadingText headingText="Forgot Password?" classnames="mb-[20px]" />
        <InputLogin
          errors={errors}
          props={emailProps} type="email"
          placeholder="Work email"
        />
        <ButtonBlue type="submit" buttonText="Send" />
        <button
          type="reset"
          className="w-full bg-white text-[#060E1E] text-base border-[#D3D8DC] border-1
          font-medium flex justify-center items-center py-[13px] rounded-[8px]">
          Cancel
        </button>
      </form>
    </main>
  );
}