type Props = {
  message: string;
}
export function ErrorMessage({ message }: Props) {
  return (
    <span role="alert" className="text-red-500 absolute -bottom-4 left-0 text-xs sm:text-sm">
      {message}
    </span>
  )
}