import { atom } from "nanostores";

export const mobileNavSidebarIsOpen = atom(false)

export const toggleMobileNavSidebar = () => {
  mobileNavSidebarIsOpen.set(!mobileNavSidebarIsOpen.get());
}