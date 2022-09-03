import { mergeClassNames } from '$utils'

interface ClusterProps extends Tag {
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
}

const justifyContent = new Map([
  ['start', 'justify-start'],
  ['end', 'justify-end'],
  ['center', 'justify-center'],
  ['space-between', 'justify-between'],
  ['space-around', 'justify-around'],
]) as Map<ClusterProps['justify'], string>

const alignItems = new Map([
  ['start', 'items-start'],
  ['end', 'items-end'],
  ['center', 'items-center'],
  ['baseline', 'items-baseline'],
  ['stretch', 'items-stretch'],
]) as Map<ClusterProps['items'], string>

export const Cluster = ({
  tag,
  children,
  className,
  justify,
  items,
  ...rest
}: ClusterProps) => {
  const Tag = (tag || 'div') as React.ElementType

  return (
    <Tag
      {...rest}
      className={mergeClassNames(
        'flex flex-wrap',
        justifyContent.get(justify) || 'justify-start',
        alignItems.get(items) || 'items-start',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
