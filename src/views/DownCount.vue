
<!-- -->
<template>
  <div :class="halfhour ? 'halfhour' : ''">
    {{ showRemainTime }}
  </div>
</template>

<script lang='ts' setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const timer = ref<NodeJS.Timeout | null>()
  const showRemainTime = ref<string>('')
  const halfhour = ref<boolean>(false)

  const calculate = (stamp: number) => {
    if (stamp <= 0) {
      return '00:00:00'
    }

    const sumSeconds = Math.floor(stamp / 1000)

    let minutes = Math.floor(sumSeconds / 60)
    const seconds = Math.floor(sumSeconds % 60)

    let hours = Math.floor(minutes / 60)
    minutes = Math.floor(minutes % 60)

    // console.log('hours', hours, minutes, seconds)

    return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
  }

  const showTime = (endTime: number) => {
    // 当前时间
    const currentStamp = new Date().getTime()
    showRemainTime.value = calculate(endTime - currentStamp)
  }

  const loop = (endTime: number) => {
    showTime(endTime)
    timer.value = setInterval(() => {
      showTime(endTime)
      if (showRemainTime.value === '00:28:00') {
        halfhour.value = true
      }
      if (showRemainTime.value === '00:00:00') {
        clearInterval(Number(timer.value))
        return false
      }
    }, 1000)
  }

  onMounted(() => {
    // 指定时间
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()
    const endStamp = new Date(`${year}/${month}/${date} 17:00:00`).getTime()
    loop(endStamp)
  })

  onBeforeUnmount(() => {
    clearInterval(Number(timer.value))
  })
</script>
<style lang='less' scoped>
  .halfhour {
    color: red;
  }
</style>