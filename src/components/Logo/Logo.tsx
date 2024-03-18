import Image from 'next/image';

export const Logo = () => {
  return (
    <a href="/">
      <Image src="/logo.png" alt="logo" width={178} height={32} />
    </a>
  )
}