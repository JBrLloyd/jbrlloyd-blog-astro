import { type ParentComponent, children } from "solid-js"
import { assertUnreachable } from "../../../helpers/type"

export type HeadingSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type HeadingProps = {
  size: HeadingSize
  className?: string
  itemProp?: string
}

const commonStyles = "font-bold"

export const Heading: ParentComponent<HeadingProps> = ({ size, className, ...props }) => {
  const c = children(() => props.children);

  if (!c()) {
    return null
  }

  const addedStyles = className ? `${commonStyles} ${className}` : `${commonStyles} pb-3`;

  switch (size) {
    case 'sm':
      return <h6 class={"text-sm " + addedStyles} {...props}>{c()}</h6>
    case 'md':
      return <h5 class={"text-md " + addedStyles} {...props}>{c()}</h5>
    case 'lg':
      return <h4 class={"text-lg " + addedStyles} {...props}>{c()}</h4>
    case 'xl':
      return <h3 class={"text-xl " + addedStyles} {...props}>{c()}</h3>
    case '2xl':
      return <h2 class={"text-2xl " + addedStyles} {...props}>{c()}</h2>
    case '3xl':
      return <h1 class={"text-3xl " + addedStyles} {...props}>{c()}</h1>
  }

  assertUnreachable(size)
}

export default Heading