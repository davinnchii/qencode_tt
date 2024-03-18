import { ButtonSSO } from '@/components/SSOAuth/ButtonSSO/ButtonSSO';

export default function SSOAuth() {
  return (
    <div className="flex gap-[16px] justify-center w-full">
      <ButtonSSO buttonText="Google" icon="/icon-google.svg" />
      <ButtonSSO buttonText="Github" icon="/icon-github.svg" />
    </div>
  )
}