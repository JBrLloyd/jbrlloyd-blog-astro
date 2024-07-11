import { type Component } from "solid-js"

type HamburgerMenuButtonProps = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export const HamburgerMenuButton: Component<HamburgerMenuButtonProps> = ({ isOpen, onClick, className }) => (
  <button
    title="Menu Icon"
    class={`first-letter:text-gray-500 focus:outline-none shadow-md border border-gray-200 rounded-2xl p-3 max-sm:p-1.5 ${className}`}
    onClick={onClick}
  >
    <div class="flex flex-col flex-nowrap items-center justify-center align-middle w-[32px] h-[30px]">
      <span
        aria-hidden="true"
        class={"block h-[3px] sm:h-[4px]  w-[32px] bg-current rounded-full transform transition delay-50 duration-300 ease-in-out"
          + (isOpen ? ' rotate-45 bg-salmon-dark' : ' -translate-y-[4px]')}
      ></span>
      <span
        aria-hidden="true"
        class={"block h-[3px] sm:h-[4px] w-[32px] bg-current rounded-full transform transition duration-300 ease-in-out"
          + (isOpen ? ' opacity-0' : '')}
      ></span>
      <span
        aria-hidden="true"
        class={"block h-[3px] sm:h-[4px] w-[32px] bg-current rounded-full transform transition delay-50 duration-300 ease-in-out"
          + (isOpen ? ' -rotate-45 bg-salmon-dark' : ' translate-y-[4px]')}
      ></span>
    </div>
  </button>
)

export default HamburgerMenuButton
