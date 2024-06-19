import { type Component, Suspense, lazy } from "solid-js"

const SocialIconGithub = lazy(() => import("./SocialIconGithub"))
const SocialIconLinkedIn = lazy(() => import("./SocialIconLinkedIn"))
const SocialIconFacebook = lazy(() => import("./SocialIconFacebook"))
const SocialIconX = lazy(() => import("./SocialIconX"))
const SocialIconInstagram = lazy(() => import("./SocialIconInstagram"))

export const socialIcons = ['github', 'linkedIn', 'facebook', 'x', 'instagram'] as const;
export type SocialIconType = typeof socialIcons[number];

const socialIconPicker = (socialType: SocialIconType) => {
  switch (socialType) {
    case 'github':
      return <SocialIconGithub link="https://github.com/jbrlloyd" />
    case 'linkedIn':
      return <SocialIconLinkedIn link="http://www.linkedin.com/in/jbrlloyd" />
    case 'facebook':
      return <SocialIconFacebook link="https://www.facebook.com/broodustech" />
    case 'x':
      return <SocialIconX link="https://twitter.com/jbrlloyd" />
    case 'instagram':
      return <SocialIconInstagram link="https://www.instagram.com/jbrlloyd" />
  }

  assertUnreachable(socialType);
}

export type IconProps = {
  link: string
}

type SocialIconProps = {
  socialType: SocialIconType
  className: string
}

const SocialIcon: Component<SocialIconProps> = ({ socialType, className }) => {
  return (
    <div class={className}>
      <Suspense fallback={<div>Loading...</div>}>
        {socialIconPicker(socialType)}
      </Suspense>
    </div>
  )
}

export default SocialIcon
