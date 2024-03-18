'use client'
import { useForm } from 'react-hook-form';
import { FormValuesType } from '@/types/FormValuesType';
import { confirmPasswordProps, newPasswordProps } from '@/utils/fieldsProps';
import { Logo } from '@/components/Logo/Logo';
import { HeadingText } from '@/components/HeadingText/HeadingText';
import { InputLogin } from '@/components/InputLogin/InputLogin';
import { ButtonBlue } from '@/components/ButtonBlue/ButtonBlue';
import { useState } from 'react';
import axios from 'axios';
import { useDisclosure } from '@nextui-org/react';
import { ModalSuccess } from '@/components/Modals/ModalSuccess';

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const {
    handleSubmit,
    control,
    clearErrors,
    setError,
    formState: { errors, isValid },
  } = useForm<FormValuesType>({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit'
  });

  newPasswordProps.control = control;
  confirmPasswordProps.control = control;

  const handleShowNewPassword = () => {
    setNewPasswordShown(!newPasswordShown);
  }
  const handleShowConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  }

  const onSubmit = async (data: FormValuesType) => {
    if (data.newPassword !== data.confirmPassword) {
      setError('confirmPassword', { type: 'custom', message: "Passwords don't match" });
      return;
    }

    if (!isValid) {
      return;
    }

    axios.post('https://auth-qa.qencode.com/v1/auth/password-set', {
      token: 'pasteTokenHere',
      secret: 'pasteSecretHere',
      password: data.newPassword,
      password_confirm: data.confirmPassword,
    })
      .then(() => {
        onOpen();
      })
      .catch((error) => {
          if (error.response.data.detail) {
            setError('newPassword', { type: 'custom', message: 'Here should be server error' });
            return;
          }
        }
      )
  }

  return (
    <main className="flex flex-col items-center pt-[180px] gap-[80px] font-grotes">
      <Logo />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px] items-center w-full max-w-[400px] p-5 lg:w-[400px]"
        noValidate
      >
        <HeadingText headingText="Create new Password?" classnames="mb-[20px]" />
        <InputLogin
          errors={errors}
          clearErrors={clearErrors}
          props={newPasswordProps}
          onClick={() => handleShowNewPassword()}
          type={newPasswordShown ? 'text' : 'password'}
          placeholder="Password"
          label="Password"
        />
        <InputLogin
          errors={errors}
          clearErrors={clearErrors}
          props={confirmPasswordProps}
          onClick={() => handleShowConfirmPassword()}
          type={confirmPasswordShown ? 'text' : 'password'}
          placeholder="Password"
          label="Confirm Password"
        />
        <ButtonBlue type="submit" buttonText="Reset Password" classNames="mt-4" />
      </form>
      <ModalSuccess isOpen={isOpen} onClose={onClose}>
        You successfully changed your password
      </ModalSuccess>
    </main>
  );
}