declare interface Tag extends React.HTMLAttributes<HTMLOrSVGElement> {
  tag?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
  className?: string
}
