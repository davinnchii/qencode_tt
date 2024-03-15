import Image from 'next/image';
import { ButtonSSO } from '@/components/ButtonSSO/ButtonSSO';
import { InputLogin } from '@/components/InputLogin/InputLogin';
import { ButtonBlue } from '@/components/ButtonBlue/ButtonBlue';
import { SignUpText } from '@/components/SignUpText/SignUpText';

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-[180px] gap-[80px] font-grotes">
      <Image src="/logo.png" alt="logo" width={178} height={32} />
      <div className="flex flex-col gap-[30px] items-center w-full max-w-[400px] p-5 lg:w-[400px]">
        <h3 className="text-3xl font-bold text-gray-900">Log in to your account</h3>
        <div className="flex gap-[16px] justify-center w-full">
          <ButtonSSO buttonText="Google" icon="/icon-google.svg" />
          <ButtonSSO buttonText="Github" icon="/icon-github.svg" />
        </div>
        <div className="flex items-center w-full gap-[10px]">
          <div className="h-[1px] bg-[#E3E6E9] w-[50%]" />
          <p className="text-xs text-[#BEC5CC]">OR</p>
          <div className="h-[1px] bg-[#E3E6E9] w-[50%]"/>
        </div>
        <InputLogin placeholder="Work email"/>
        <ButtonBlue buttonText="Log in to Qencode" />
        <SignUpText />
      </div>
    </main>
  );
}
