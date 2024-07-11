import { type ParentComponent, children } from "solid-js"

import { trimTrailingSlash } from '../../../helpers/string'

export type NavigationLinkProps = {
  href: string
  className?: string
  getCurrentPath?: (() => string)
  onClick?: (() => void)
};

export const NavigationLink: ParentComponent<NavigationLinkProps> = ({
  href,
  className,
  getCurrentPath,
  onClick,
  ...props
}) => {
  const c = children(() => props.children);

  let isActive = false;

  if (getCurrentPath) {
    const pathname = getCurrentPath();
    // const subpath = pathname.match(/[^\/]+/g);
    isActive = trimTrailingSlash(href) === trimTrailingSlash(pathname); // || href === '/' + subpath?.[0];
  }

  if (isActive) {
    return (
      <span class={
        (className ? `${className} ` : '')
        + "font-bold"
      }>
        {c()}
      </span>
    )
  }

  const handleOnClick = () => {
    if (onClick) onClick()
  }

  return (
    <a
      href={href}
      onClick={handleOnClick}
      class={
        (className ? `${className} ` : '')
        + " hover:text-salmon-dark transition duration-300 delay-50"}
    >
      {c()}
    </a>
  )
}

export default NavigationLink
