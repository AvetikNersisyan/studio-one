import { IUtilTypes } from '../types/utilTypes'


export const normalizeDate = (date: string): IUtilTypes => {
  const dateSplitted = date.split('T')
  return {
    date: dateSplitted[0],
    time: dateSplitted[1].substring(0, 5),
  }
}

export const isPrime = (n: number): boolean => {
  const sqrt = Math.ceil(Math.sqrt(n))
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}
