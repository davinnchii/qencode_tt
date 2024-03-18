import { UseControllerProps } from 'react-hook-form';
import { FormValuesType } from '@/types/FormValuesType';

const emailRules = { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }

export const emailProps: UseControllerProps<FormValuesType> = {
  name: 'email',
  rules: emailRules,
}

export const passwordProps: UseControllerProps<FormValuesType> = {
  name: 'password',
  rules: { required: true, minLength: 8 }
}

export const newPasswordProps: UseControllerProps<FormValuesType> = {
  name: 'newPassword',
  rules: { required: true, minLength: 8 }
}

export const confirmPasswordProps: UseControllerProps<FormValuesType> = {
  name: 'confirmPassword',
  rules: { required: true, minLength: 8 }
}