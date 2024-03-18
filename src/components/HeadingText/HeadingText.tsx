type Props = {
  headingText: string;
  classnames?: string;
}

export const HeadingText: React.FC<Props> = ({ headingText, classnames }) => {
  return(
    <h3 className={`text-3xl font-bold text-gray-900 ${classnames || ''} text-center`}>{headingText}</h3>
  )
}