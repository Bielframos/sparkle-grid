import { mergeClass } from '@utils/mergeClass'

interface StackProps extends Tag {}

export const Stack = ({ tag, children, className, ...rest }: StackProps) => {
  const Tag = (tag || 'div') as React.ElementType

  return (
    <Tag
      {...rest}
      className={mergeClass('flex flex-col justify-start', className)}
    >
      {children}
    </Tag>
  )
}
