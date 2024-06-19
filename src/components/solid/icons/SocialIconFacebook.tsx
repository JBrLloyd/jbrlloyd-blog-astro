import { type Component } from "solid-js"

import { type IconProps } from './SocialIcon'
import image from '../../../images/social_facebook_icon.webp'

const height: number = 35;
const width: number = 35;

const SocialIconFacebook: Component<IconProps> = ({ link }) => (
  <a href={link}>
    <picture>
      <source srcset={image.src} type="image/webp" />
      <img
        loading="lazy"
        decoding="async"
        src={image.src}
        alt="Facebook Social Media Icon"
        class="text-transparent"
        height={height}
        width={width}
      />
    </picture>
  </a>
)

export default SocialIconFacebook
