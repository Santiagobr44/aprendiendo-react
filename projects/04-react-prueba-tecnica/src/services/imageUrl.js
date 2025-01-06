export const getImageFactURL = async ({ fact }) => {
  const threeFirstWords = fact.split(' ', 3).join(' ')
  console.log(threeFirstWords)

  const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
  const { url } = res
  console.log(url)
  return url
}
