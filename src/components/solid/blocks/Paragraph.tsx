import { type ParentComponent, children } from "solid-js"

export type ParagraphProps = {
  className?: string
  itemProp?: string
}

export const Paragraph: ParentComponent<ParagraphProps> = ({ className, ...props }) => {
  const c = children(() => props.children);

  return (
    <p class={"pb-1 " + className} {...props}>{c()}</p>
  )
}

export default Paragraph