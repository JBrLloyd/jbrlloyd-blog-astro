import { type ParentComponent, children } from "solid-js"

import image from '../../../images/arrow_back_left_icon.webp'

export type LeftBackArrowProps = {
  height: number | undefined
  width: number | undefined
  onClick: () => void
}

const defaultHeight = 40;
const defaultWidth = 40;

export const LeftBackArrow: ParentComponent<LeftBackArrowProps> = ({
  onClick,
  height,
  width,
  ...props
}) => {
  const c = children(() => props.children);

  return (
    <button onClick={onClick} class="p-1 inline-block">
      <img
        loading="eager"
        decoding="sync"
        src={image.src}
        alt="Go back"
        class="text-transparent inline-block pr-2"
        height={height ?? defaultHeight}
        width={width ?? defaultWidth}
      />
      {c()}
    </button>
  )
}

export default LeftBackArrow
