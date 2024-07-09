import { type Component } from "solid-js"

type HamburgerMenuButtonProps = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const HamburgerMenuButton: Component<HamburgerMenuButtonProps> = ({ isOpen, onClick, className }) => (
  <button
    class={`relative first-letter:text-gray-500 w-16 h-10 focus:outline-none shadow-md border-2 border-grey-50 rounded-md p-8 max-sm:p-6 ${className}`}
    onClick={onClick}
  >
    <div class="block absolute w-9 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        aria-hidden="true"
        class={"block absolute h-1 w-8 bg-current rounded-full transform transition delay-50 duration-300 ease-in-out"
          + (isOpen ? ' rotate-45 bg-salmon-dark' : ' -translate-y-2')}
      ></span>
      <span
        aria-hidden="true"
        class={"block absolute h-1 w-8 bg-current rounded-full transform transition duration-300 ease-in-out"
          + (isOpen ? ' opacity-0' : '')}
      ></span>
      <span
        aria-hidden="true"
        class={"block absolute h-1 w-8 bg-current rounded-full transform transition delay-50 duration-300 ease-in-out"
          + (isOpen ? ' -rotate-45 bg-salmon-dark' : ' translate-y-2')}
      ></span>
    </div>
  </button>
)

export default HamburgerMenuButton
