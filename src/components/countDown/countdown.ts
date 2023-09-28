export const getCurrentTimeFormat = (endTimeStr: string) => {
  if (!endTimeStr) {
    return '00:00:00'
  }
  const curretTimeStamp = Date.now()
  const endTimeStamp = new Date(endTimeStr.replace(/\-/g, '/')).getTime()

  if (curretTimeStamp > endTimeStamp) {
    return '00:00:00'
  }

  const remainTimeStamp = endTimeStamp - curretTimeStamp

  const sumSeconds = Math.floor(remainTimeStamp / 1000)

  const second = sumSeconds % 60

  let minute = Math.floor(sumSeconds / 60)

  let hour = Math.floor(minute / 60)
  minute = minute % 60

  return `${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}`
}