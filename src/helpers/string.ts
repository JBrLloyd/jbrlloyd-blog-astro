export const compareStrings = (string1: string, string2: string) =>
    string1.toLowerCase().localeCompare(string2.toLowerCase(), 'en', {sensitivity: 'base'})

export const trimTrailingSlash = (text: string) => {
  const result = text.trim()
  if (result.length <= 1) {
    return text;
  }

  return result.endsWith('/') ? result.slice(0, result.length - 1) : result
}

const avgAdultReadingSpeedWordsPerMin = 225;

export const avgReadingTimeMins = (text: string) => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / avgAdultReadingSpeedWordsPerMin);
}