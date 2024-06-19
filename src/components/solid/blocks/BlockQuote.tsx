import { type Component } from "solid-js"

export type QuoteCiting = {
  literatureName: string
  url: string
}

export type BlockQuoteProps = {
  quote: string
  authour: string
  citing?: QuoteCiting
}

const QuoteIcon: Component = () => (
  <svg class="bi bi-quote" fill="currentColor" height="35" viewBox="0 0 15 15" width="35" xmlns="http://www.w3.org/2000/svg"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/></svg>
)

export const BlockQuote: Component<BlockQuoteProps> = ({ quote, authour, citing }) => {
  return (
    <div class="flex">
      <div class="pr-2">
        <QuoteIcon />
      </div>
      <blockquote cite={citing?.url} class="py-2">
        <p class="italic">{quote}</p>
        <footer>
          <p class="font-bold">- {authour}</p>
          {citing && (<>, <cite class="italic">{citing.literatureName}</cite></>)}
        </footer>
      </blockquote>
    </div>
  )
}

export default BlockQuote
