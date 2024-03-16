'use client';

import { ButtonSSO } from '@/components/ButtonSSO/ButtonSSO';
import { InputLogin } from '@/components/InputLogin/InputLogin';
import { ButtonBlue } from '@/components/ButtonBlue/ButtonBlue';
import { SignUpText } from '@/components/SignUpText/SignUpText';
import { HeadingText } from '@/components/HeadingText/HeadingText';
import { UseControllerProps, useForm } from 'react-hook-form';
import { FormValues } from '@/utils/FormValues';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo/Logo';

export default function Home() {
  const router = useRouter();

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }, mode: 'onChange'
  })

  const inputProps: UseControllerProps<FormValues> = {
    control,
    name: 'email',
    rules: { required: true }
  }

  const onSubmit = async (data: FormValues) => {
    await axios.post('/api/auth_data', {
      email: data.email
    });

    router.push('/login');
  }

  return (
    <main className="flex flex-col items-center pt-[180px] gap-[80px] font-grotes">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[30px] items-center w-full max-w-[400px] p-5 lg:w-[400px]">
        <HeadingText headingText="Log in to your account" />
        <div className="flex gap-[16px] justify-center w-full">
          <ButtonSSO buttonText="Google" icon="/icon-google.svg" />
          <ButtonSSO buttonText="Github" icon="/icon-github.svg" />
        </div>
        <div className="flex items-center w-full gap-[10px]">
          <div className="h-[1px] bg-[#E3E6E9] w-[50%]" />
          <p className="text-xs text-[#BEC5CC]">OR</p>
          <div className="h-[1px] bg-[#E3E6E9] w-[50%]" />
        </div>
        <InputLogin
          props={inputProps}
          type="email"
          placeholder="Work email"
        />
        <ButtonBlue type="submit" buttonText="Log in to Qencode" />
        <SignUpText />
      </form>
    </main>
  );
}
