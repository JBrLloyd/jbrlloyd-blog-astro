import { type Component } from "solid-js"
import profileImage from "../../images/jbrlloyd-profile-pic.jpg";

export const ProfileSummary: Component = () => (
  <div class="flex flex-col items-center justify-center py-8">
    <div class="pb-2 border-solid rounded-full">
      <img
        loading="lazy"
        src={profileImage.src}
        alt="Authour's profile"
        class="rounded-full shadow-2xl border-solid grayscale scale-x-[-1] bg-gray-500 text-transparent"
        height={180}
        width={180}
      />
      {/* <StaticImage
        layout="constrained"
        src="../images/jbrlloyd-profile-pic.jpg"
        width={180}
        height={180}
        alt="Profile picture"
        placeholder="blurred"
        className="rounded-full shadow-2xl"
        imgStyle={{
          transform: "scaleX(-1)"
        }}
        imgClassName="border-solid rounded-full"
        transformOptions={{
          grayscale: true,
        }}
      /> */}
    </div>
    <h3><strong>Jackson Lloyd</strong></h3>
    <h4><pre>Software | Leadership | DevOps</pre></h4>
    <p class="pt-2">
      Talkin' and Bloggin' about adventures through the Tech World 🌐 growing technically
      and personally.
    </p>
    <div class="pt-2">
      <p>🌮 Food Lover 🍕</p>
      <p>📱 Tech Wizard 🧙</p>
      <p>👽 Odd Ball 👾</p>
    </div>
  </div>
)

export default ProfileSummary