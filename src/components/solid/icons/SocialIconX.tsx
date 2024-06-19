import { type Component } from "solid-js"

import { type IconProps } from './SocialIcon'
import image from '../../../images/social_x_icon.webp'

const height: number = 35;
const width: number = 35;

const SocialIconX: Component<IconProps> = ({ link }) => (
  <a href={link}>
    <img
        loading="lazy"
        src={image.src}
        alt="X Social Media Icon"
        class="text-transparent"
        height={height}
        width={width}
      />
  </a>
)

export default SocialIconX
