import { type Component } from "solid-js"

import { type IconProps } from './SocialIcon'
import image from '../../../images/social_github_icon.webp'

const height: number = 35;
const width: number = 35;

const SocialIconGithub: Component<IconProps> = ({ link }) => (
  <a href={link}>
    <img
        loading="lazy"
        src={image.src}
        alt="Github Social Media Icon"
        class="text-transparent"
        height={height}
        width={width}
      />
  </a>
)

export default SocialIconGithub
