export const normalizeDate = (date: string) => {
  const dateSplitted = date.split('T')
  return {
    date: dateSplitted[0],
    time: dateSplitted[1].substring(0,5)
  }
}


