export const convertNumberToTimer = (num: number): string => {
  const hours: string | number = Math.floor(num / 3600)
  let minutes: string | number = Math.floor((num - hours * 3600) / 60)
  let seconds: string | number = num - hours * 3600 - minutes * 60

  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${seconds}`
}
