import { mergeClass } from '@utils/mergeClass'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconPos?: 'before' | 'after'
  icon?: JSX.Element
}

export const Button = ({
  children,
  className,
  iconPos,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={mergeClass(
        'flex items-center gap-4 rounded-full py-2 text-callout transition-colors duration-200 ease-in-out',
        `${iconPos === undefined && 'px-6'}`,
        `${iconPos === 'before' && 'pl-6 pr-8'}`,
        `${iconPos === 'after' && 'pl-8 pr-6'}`,
        className
      )}
      {...props}
    >
      {iconPos === 'before' && icon}
      {children}
      {iconPos === 'after' && icon}
    </button>
  )
}

