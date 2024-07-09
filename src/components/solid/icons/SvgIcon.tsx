import { type Component } from "solid-js"

export type SvgElementCircle = {
  cx: number
  cy: number
  r: number
}

export type SvgElementPath = {
  d: string
}

type SvgElement = SvgElementPath | SvgElementCircle
type SvgElementType = 'path' | 'circle'

export type SvgElementObject = {
  type: SvgElementType
  element: SvgElement
}

export type SvgIconProps = {
  height: number
  width: number
  elements: SvgElementObject[]
  className?: string
}

const createSvgElement = (element: SvgElementObject) => {
  if (element.type === 'path') {
    const elm = element.element as SvgElementPath
    return <path d={elm.d} />
  }

  if (element.type === 'circle') {
    const elm = element.element as SvgElementCircle
    return <circle cx={elm.cx} cy={elm.cy} r={elm.r} />
  }

  assertUnreachable(element.type)
}

export const SvgIcon: Component<SvgIconProps> = ({
  height,
  width,
  elements,
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
      {elements.map(createSvgElement)}
    </g>
  </svg>
)