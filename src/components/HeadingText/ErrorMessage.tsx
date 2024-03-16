type Props = {
  message: string;
}
export function ErrorMessage({ message }: Props) {
  return (
    <span role="alert" className="text-red-500 absolute -bottom-6 left-0">
      {message}
    </span>
  )
}