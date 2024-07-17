import { type Component } from "solid-js"
import { useStore } from '@nanostores/solid';

import { sortedAllStaticRoutes, type RouteKey } from '../../routes'
import { NavigationLink } from './blocks/NavigationLink'
import { HamburgerMenuButton } from './HamburgerMenuButton'
import { NavIcon, type NavIconType } from "./icons/NavIcon"
import { mobileNavSidebarIsOpen } from "@stores/navigationStore";

const RouteNavIconTypeMap: Record<RouteKey, NavIconType> = {
  'home': 'home',
  'blog': 'blogs',
  'privacyPolicy': 'userPrivacy'
}

export const MobileMenu: Component = () => {
  const $mobileNavSidebarIsOpen  = useStore(mobileNavSidebarIsOpen);

  const toggleSideDrawer = () => {
    mobileNavSidebarIsOpen.set(!$mobileNavSidebarIsOpen());
  }

  return (
    <>
      <div class={"z-50 w-full h-screen fixed inset-0" + ($mobileNavSidebarIsOpen() ? '' : ' invisible')}>
        <div
          class={"absolute w-full h-full duration-500 ease-out transition-all inset-0 bg-gray-900"
            + ($mobileNavSidebarIsOpen() ? ' opacity-50' : ' opacity-0')}
          onClick={() => toggleSideDrawer()}
        ></div>
        <div
          class={"absolute w-48 -left-48 sm:w-56 sm:-left-56 h-full bg-white duration-300 ease-out transition-all flex flex-col rounded-r-lg"
            + ($mobileNavSidebarIsOpen() ? ' translate-x-full' : '')}
        >
          {sortedAllStaticRoutes()
            .map((route) => (
              <NavigationLink
                className="text-lg py-4 pl-3 first:pt-8"
                href={route.link}
                getCurrentPath={() => window.location.pathname}
                onClick={() => toggleSideDrawer()}
              >
                <NavIcon
                  iconType={RouteNavIconTypeMap[route.key]}
                  className="inline-block"
                />
                <p class="pl-3 inline-block">{route.text}</p>
              </NavigationLink>
            ))
          }
        </div>
      </div>
      <HamburgerMenuButton isOpen={$mobileNavSidebarIsOpen()} onClick={() => toggleSideDrawer()} />
    </>
  )
}

export default MobileMenu