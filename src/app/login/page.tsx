'use client';
import { ButtonSSO } from '@/components/ButtonSSO/ButtonSSO';
import { InputLogin } from '@/components/InputLogin/InputLogin';
import { ButtonBlue } from '@/components/ButtonBlue/ButtonBlue';
import { SignUpText } from '@/components/SignUpText/SignUpText';
import { HeadingText } from '@/components/HeadingText/HeadingText';
import { UseControllerProps, useForm } from 'react-hook-form';
import { FormValues } from '@/utils/FormValues';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { AuthDataType } from '@/utils/AuthDataType';
import { Logo } from '@/components/Logo/Logo';
import { ModalSuccess } from '@/components/Modals/ModalSuccess';
import { useDisclosure } from '@nextui-org/react';

export default function Page() {
  const [passwordShown, setPasswordShown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }, mode: 'onChange'
  })

  useEffect(() => {
    axios.get<AuthDataType>('/api/auth_data')
      .then(res => {
        setValue('email', res.data.email)
      });
  }, []);

  const emailProps: UseControllerProps<FormValues> = {
    control,
    name: 'email',
    rules: { required: true }
  }

  const passwordProps: UseControllerProps<FormValues> = {
    control,
    name: 'password',
    rules: { required: true, minLength: 8 }
  }

  const onSubmit = async (data: FormValues) => {
    await axios.post('https://auth-qa.qencode.com/v1/auth/login', {
      email: data.email,
      password: data.password,
    })
      .then(res => {
        localStorage.setItem('token', JSON.stringify({
          access_token: res.data.access_token,
          refresh_token: res.data.refresh_token,
          token_expire: res.data.token_expire,
          refresh_token_expire: res.data.refresh_token_expire,
        }))
      })
      .catch(error => {
        console.error(error);
      });

    onOpen();

    const timeout = setTimeout(() => {
      onClose();
    }, 5000);
  }

  const handleShowPassword = () => {
    setPasswordShown(!passwordShown);
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
          props={emailProps} type="email"
          placeholder="Work email"
        />
        <InputLogin
          props={passwordProps}
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
          onClick={() => handleShowPassword()}
        />
        <ButtonBlue type="submit" buttonText="Log in to Qencode" />
        <SignUpText />
      </form>
      <ModalSuccess isOpen={isOpen} onClose={onClose} />
    </main>
  );
}
