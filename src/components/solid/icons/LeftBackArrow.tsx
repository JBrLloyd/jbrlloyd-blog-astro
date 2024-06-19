import { type Component } from "solid-js"

import image from '../../../images/arrow_back_left_icon.webp'

export type LeftBackArrowProps = {
  height: number | undefined
  width: number | undefined
  onClick: () => void
}

const defaultHeight = 40;
const defaultWidth = 40;

export const LeftBackArrow: Component<LeftBackArrowProps> = ({ onClick, height, width }) => {
  return (
    <button onClick={onClick} class="w-fit h-fit p-1">
      <img
        loading="eager"
        decoding="sync"
        src={image.src}
        alt="Go back"
        class="text-transparent"
        height={height ?? defaultHeight}
        width={width ?? defaultWidth}
      />
    </button>
  )
}

export default LeftBackArrow
