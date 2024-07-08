import { type Component, Suspense, lazy } from "solid-js"
import { SvgIcon } from "./SvgIcon";

export const navIcons = [
  'home',
  'about',
  'blogs',
  'userPrivacy'
] as const;

export type NavIconType = typeof navIcons[number];

const svgIconPaths: Record<NavIconType, string> = {
  'home': 'M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H20.8a3.2,3.2,0,0,0,3.2-3.2v-10.4ZM15,22.026H9V17a3,3,0,0,1,6,0Zm7-1.2a1.2,1.2,0,0,1-1.2,1.2H17V17A5,5,0,0,0,7,17v5.026H3.2a1.2,1.2,0,0,1-1.2-1.2V11.319l10-9,10,9Z',
  'about': '',
  'blogs': '',
  'userPrivacy': ''
}

const iconPicker = (iconType: NavIconType) => {
  switch (iconType) {
    case 'home':
      return <SvgIcon height={25} width={25} path={svgIconPaths[iconType]} />;
    default:
      return null;
  }

  // @ts-ignore: Unreachable code error
  assertUnreachable(iconType);
}

export type NavIconProps = {
  iconType: NavIconType
}

export const NavIcon: Component<NavIconProps> = ({
  iconType
}) => iconPicker(iconType)

export default NavIcon