import { type Component, onMount, onCleanup, createSignal } from "solid-js"

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
      Top
    </button>
  )
}

export default ScrollTopButton