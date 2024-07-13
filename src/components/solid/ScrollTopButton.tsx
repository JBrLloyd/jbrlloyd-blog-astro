import { type Component, onMount, onCleanup } from "solid-js"

const activeBtnAfterPxScrolled = 200

export const ScrollTopButton: Component = () => {
  let btnRef: HTMLButtonElement | undefined;

  const setShowBtn = (display: boolean) => {
    if (!btnRef) return;

    display
      ? btnRef.style.display = 'block'
      : btnRef.style.display = 'none'
  }

  const documentScrolled = () =>
      document.body.scrollTop > activeBtnAfterPxScrolled
    || document.documentElement.scrollTop > activeBtnAfterPxScrolled

  const onScroll = () => {
    if (documentScrolled()) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  onMount(() => {
    window.addEventListener('scroll', onScroll)
  })

  onCleanup(() => {
    window.removeEventListener('scroll', onScroll)
  })

  const onClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <button
      onClick={() => onClick()}
      id="scroll-top-btn"
      title="Go to top"
      ref={btnRef}
      style={{
        display: documentScrolled() ? 'block' : 'none'
      }}
      class="
        p-3 sm:p-3.5
        rounded-full
        drop-shadow-md
        hover:drop-shadow-xl
        active:shadow-inner
        z-30 bg-white
        border-2"
    >

      <svg
        height={25}
        width={25}
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
        class="rotate-90 -mr-2"
      >
        <title/>
        <g data-name="Up Arrow" id="Up_Arrow">
          <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z"/>
        </g>
      </svg>

    </button>
  )
}

export default ScrollTopButton