import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps extends NextLinkProps {
  children: React.ReactNode
  className?: string
}

export const Link = ({ children, className, ...rest }: LinkProps) => {
  return (
    <NextLink {...rest}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}
