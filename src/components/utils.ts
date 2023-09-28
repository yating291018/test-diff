export const getFormatTime = (remainTime: number) => {
  // s
  let seconds = Math.floor(remainTime / 1000)
  // minute
  let minute = Math.floor(seconds / 60)
  seconds = seconds - minute * 60

  let hours = Math.floor(minute / 60)
  minute = minute - hours * 60

  return `${hours > 9 ? hours : '0' + hours}:${minute > 9 ? minute : '0' + minute}:${seconds > 9 ? seconds : '0' + seconds}`
}