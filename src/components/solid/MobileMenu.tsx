import { type Component, createSignal } from "solid-js"

import { sortedAllStaticRoutes } from '../../routes'
import { LeftBackArrow } from './icons/LeftBackArrow'
import { NavigationLink } from './blocks/NavigationLink'
import { HamburgerMenuButton } from './HamburgerMenuButton'

export const MobileMenu: Component = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = createSignal(false);

  const toggleSideDrawer = () => {
    setIsSideDrawerOpen(prev => !prev)
  }

  return (
    <>
      <div class={"z-50 w-full h-screen fixed inset-0" + (isSideDrawerOpen() ? '' : ' invisible')}>
        <div
          class={"absolute w-full h-full duration-500 ease-out transition-all inset-0 bg-gray-900"
            + (isSideDrawerOpen() ? ' opacity-50' : ' opacity-0')}
          onClick={() => toggleSideDrawer()}
        ></div>
        <div
          class={"absolute w-52 -left-52 sm:w-64 sm:-left-64 h-full bg-white duration-300 ease-out transition-all flex flex-col"
            + (isSideDrawerOpen() ? ' translate-x-full' : '')}
        >
          <div class="self-end mr-3 pt-3">
            <LeftBackArrow height={40} width={40} onClick={() => toggleSideDrawer()}>
              Close Menu
            </LeftBackArrow>
          </div>
          {sortedAllStaticRoutes()
            .map((route) => (
              <NavigationLink
                className="text-lg"
                href={route.link}
                getCurrentPath={() => window.location.pathname}
                onClick={() => toggleSideDrawer()}
              >
                <div class="py-4 px-7">{route.text}</div>
              </NavigationLink>
            ))
          }
        </div>
      </div>
      <HamburgerMenuButton isOpen={isSideDrawerOpen()} onClick={() => toggleSideDrawer()} />
    </>
  )
}

export default MobileMenu