

export const useGetMemoizedFibNumbers = () => {


  interface IFib {
    [key: number | string]: number
  }
   const memoizedNumbers: IFib = {
    1: 1,
    2: 1
  }

   const nThFibNumber = (n: number): number => {

     if (n in memoizedNumbers) {
      return memoizedNumbers[n]
    }

    if (n < 0) {
      return 0
    }
    if (n === 1 || n === 2) {
      return 1
    }

    const num1 = nThFibNumber(n-1)
    const num2 = nThFibNumber(n-2)

    memoizedNumbers[n] = num1 + num2

    return  num1 + num2
  }

  const memoizeFibNumbers = (n: number) => {

    nThFibNumber(n)
  }

  return {memoizeFibNumbers, memoizedNumbers}
}
