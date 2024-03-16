import { UseControllerProps } from 'react-hook-form';
import { FormValues } from '@/utils/FormValues';

const emailRules = { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }

export const emailProps: UseControllerProps<FormValues> = {
  name: 'email',
  rules: emailRules,
}

export const passwordProps: UseControllerProps<FormValues> = {
  name: 'password',
  rules: { required: true, minLength: 8 }
}

export const newPasswordProps: UseControllerProps<FormValues> = {
  name: 'newPassword',
  rules: { required: true, minLength: 8 }
}

export const confirmPasswordProps: UseControllerProps<FormValues> = {
  name: 'confirmPassword',
  rules: { required: true, minLength: 8 }
}