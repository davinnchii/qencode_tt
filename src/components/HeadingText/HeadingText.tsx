type Props = {
  headingText: string;
}

export const HeadingText: React.FC<Props> = ({ headingText }) => {
  return(
    <h3 className="text-3xl font-bold text-gray-900">{headingText}</h3>
  )
}