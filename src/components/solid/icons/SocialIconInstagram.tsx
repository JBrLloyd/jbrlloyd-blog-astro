import { type Component } from "solid-js"

import { type IconProps } from './SocialIcon'
import image from '../../../images/social_instagram_icon.webp'

const height: number = 35;
const width: number = 35;

const SocialIconInstagram: Component<IconProps> = ({ link }) => (
  <a href={link}>
    <img
        loading="lazy"
        decoding="async"
        src={image.src}
        alt="Instagram Social Media Icon"
        class="text-transparent"
        height={height}
        width={width}
      />
  </a>
)

export default SocialIconInstagram
