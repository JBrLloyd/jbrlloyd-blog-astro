import { type Component } from "solid-js"
import { SvgIcon, type SvgElementObject } from "./SvgIcon";

export const navIcons = [
  'home',
  'blogs',
  'userPrivacy'
] as const;

export type NavIconType = typeof navIcons[number];

const svgIconPaths: Record<NavIconType, SvgElementObject[]> = {
  'home': [{
    type: 'path',
    element: {
      d: 'M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z',
    }
  }],

  // 'about': [
  //   {
  //     type: 'path',
  //     element: {
  //       d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z'
  //     }
  //   },
  //   {
  //     type: 'path',
  //     element: {
  //       d: 'M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z'
  //     }
  //   },
  //   {
  //     type: 'circle',
  //     element: {
  //       cx: 12,
  //       cy: 6.5,
  //       r: 1.5
  //     }
  //   }
  // ],

  'blogs': [{
    type: 'path',
    element: {
      d: 'M19,2H5C2.24,2,0,4.24,0,7v10c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V7c0-2.76-2.24-5-5-5ZM5,4h14c1.65,0,3,1.35,3,3H2c0-1.65,1.35-3,3-3Zm14,16H5c-1.65,0-3-1.35-3-3V9H22v8c0,1.65-1.35,3-3,3ZM10,12c0,.55-.45,1-1,1h-1v4c0,.55-.45,1-1,1s-1-.45-1-1v-4h-1c-.55,0-1-.45-1-1s.45-1,1-1h4c.55,0,1,.45,1,1Zm10,0c0,.55-.45,1-1,1h-6c-.55,0-1-.45-1-1s.45-1,1-1h6c.55,0,1,.45,1,1Zm0,4c0,.55-.45,1-1,1h-6c-.55,0-1-.45-1-1s.45-1,1-1h6c.55,0,1,.45,1,1Z'
    }
  }],

  'userPrivacy': [{
    type: 'path',
    element: {
      d: 'm8,12c3.309,0,6-2.691,6-6S11.309,0,8,0,2,2.691,2,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm-3,12h5v2h-5c-1.654,0-3,1.346-3,3v5H0v-5c0-2.757,2.243-5,5-5Zm17,0v-1c0-2.206-1.794-4-4-4s-4,1.794-4,4v1h-2v7c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3v-7h-2Zm-6-1c0-1.103.897-2,2-2s2,.897,2,2v1h-4v-1Zm6,8c0,.551-.449,1-1,1h-6c-.551,0-1-.449-1-1v-5h8v5Zm-3-1h-2v-2h2v2Z'
    }
  }],
}

const iconPicker = (iconType: NavIconType, className?: string) => {
  switch (iconType) {
    case 'home':
    case 'blogs':
    case 'userPrivacy':
      return <SvgIcon height={25} width={25} elements={svgIconPaths[iconType]} className={className} />;
    default:
      return null;
  }
}

export type NavIconProps = {
  iconType: NavIconType
  className?: string
}

export const NavIcon: Component<NavIconProps> = ({
  iconType,
  className
}) => iconPicker(iconType, className)

export default NavIcon