import { type Component } from "solid-js"

export type SvgIconProps = {
  height: number
  width: number
  path: string
  className?: string
}

export const SvgIcon: Component<SvgIconProps> = ({
  height,
  width,
  path,
  className
}) => (
  <svg
    class={className ? className : ""}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    stroke="black"
  >
    <g>
      <path d={path}></path>
    </g>
  </svg>
)