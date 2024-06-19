import { type Component } from "solid-js"

import { type IconProps } from './SocialIcon'
import image from '../../../images/social_linkedin_icon.webp'

const height: number = 35;
const width: number = 35;

const SocialIconLinkedIn: Component<IconProps> = ({ link }) => (
  <a href={link}>
    <img
        loading="lazy"
        decoding="async"
        src={image.src}
        alt="LinkedIn Social Media Icon"
        class="text-transparent"
        height={height}
        width={width}
      />
  </a>
)

export default SocialIconLinkedIn
