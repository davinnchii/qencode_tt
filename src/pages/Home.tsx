'use client';

import { InputLogin } from '@/components/InputLogin/InputLogin';
import { ButtonBlue } from '@/components/ButtonBlue/ButtonBlue';
import { SignUpText } from '@/components/SignUpText/SignUpText';
import { HeadingText } from '@/components/HeadingText/HeadingText';
import { useForm } from 'react-hook-form';
import { FormValuesType } from '@/types/FormValuesType';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Logo } from '@/components/Logo/Logo';
import SSOAuth from '@/components/SSOAuth/SSOAuth';
import { emailProps } from '@/utils/fieldsProps';

export default function Home() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    clearErrors
  } = useForm<FormValuesType>({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  })

  emailProps.control = control;

  const onSubmit = async (data: FormValuesType) => {
    if (!isValid) {
      return;
    }

    axios.post('/api/auth_data', {
      email: data.email
    }).then(res => {
      router.push('/login');
    }).catch(e => console.error(e));
  }

  return (
    <main className="flex flex-col items-center pt-[180px] gap-[80px] font-grotes">
      <Logo />
      <form onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[30px] items-center w-full max-w-[400px] p-5 lg:w-[400px]"
            noValidate
      >
        <HeadingText headingText="Log in to your account" />
        <SSOAuth />
        <div className="flex items-center w-full gap-[10px]">
          <div className="h-[1px] bg-[#E3E6E9] w-[50%]" />
          <p className="text-xs text-[#BEC5CC]">OR</p>
          <div className="h-[1px] bg-[#E3E6E9] w-[50%]" />
        </div>
        <InputLogin
          props={emailProps}
          errors={errors}
          clearErrors={clearErrors}
          type="email"
          placeholder="Work email"
        />
        <ButtonBlue type="submit" buttonText="Log in to Qencode" />
        <SignUpText />
      </form>
    </main>
  );
}
