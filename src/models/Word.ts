export interface Word {
  term: string
  audioUrls: string[]
  meanings: string[]
}

export interface WordNotFound {
  title: string
  message: string
  resolution: string
}

export const isInstanceOfWordNotFound = (
  obj: Word | Word[] | WordNotFound
): obj is WordNotFound => {
  return (<WordNotFound>obj).title != undefined
}

export const getWords = (jsonObj: any): Word[] | WordNotFound => {
  const { title, message, resolution } = jsonObj

  if (!title) {
    const words: Word[] = []

    jsonObj.forEach((obj: any) => {
      const { word, phonetics, meanings } = obj

      const audioUrls: string[] = []
      if (phonetics && phonetics.length > 0) {
        phonetics.forEach((p: any) => {
          const { audio } = p
          if (audio) {
            audioUrls.push(audio)
          }
        })
      }

      const meaningsArr: string[] = []
      if (meanings && meanings.length > 0) {
        meanings.forEach((m: any) => {
          const { definitions } = m
          if (definitions && definitions.length > 0) {
            definitions.forEach((d: any) => {
              const { definition } = d
              meaningsArr.push(definition)
            })
          }
        })
      }

      const wordObj: Word = { term: word, meanings: meaningsArr, audioUrls }
      words.push(wordObj)
    })

    return words
  }

  const notFound: WordNotFound = { title, message, resolution }
  return notFound
}
