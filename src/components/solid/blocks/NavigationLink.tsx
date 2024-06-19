import { type ParentComponent, children } from "solid-js"

import { trimTrailingSlash } from '../../../helpers/strings'

export type NavigationLinkProps = {
  href: string
  className: string | undefined
  getCurrentPath: (() => string) | undefined
  onClick: (() => void) | undefined
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

  return (
    <a
      href={href}
      onClick={onClick}
      class={
        (className ? `${className} ` : '')
        + " hover:text-salmon-dark transition duration-300 delay-50"}
    >
      {c()}
    </a>
  )
}

export default NavigationLink
