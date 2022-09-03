import { mergeClass } from '@utils/mergeClass'

interface BoxProps extends Tag {}

export const Box = ({ tag, children, className, ...rest }: BoxProps) => {
  const Tag = (tag || 'div') as React.ElementType

  return (
    <Tag {...rest} className={mergeClass('', className)}>
      {children}
    </Tag>
  )
}
