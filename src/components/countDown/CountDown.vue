<!-- -->
<template>
  <div>
    {{ countDownShow }}
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults, onMounted, onBeforeUnmount } from 'vue'
import { getCurrentTimeFormat } from './countdown'

const enum TimeEnum {
  END_TIME = '00:00:00'
}
const props = withDefaults(
  defineProps<{
    endTime?: string
    callback?: (res: string) => void
  }>(),
  {
    endTime: '2023-05-25 20:41:00',
    callback: () => {},
  }
)

const countDownShow = ref<string>('00:00:00')
let timer: NodeJS.Timeout

onMounted(() => {
  console.log('props.endTime', props.endTime)
  countDownShow.value = getCurrentTimeFormat(props.endTime)
  showCountDown()
})

onBeforeUnmount(() => {
  timer && clearInterval(timer)
})

const showCountDown = () => {
  timer && clearInterval(timer)
  timer = setInterval(() => {
    const timeFormat = getCurrentTimeFormat(props.endTime)
    countDownShow.value = timeFormat
    if (timeFormat === TimeEnum.END_TIME) {
      props.callback('end CountTime')
      clearInterval(timer)
      return false
    }
  }, 1000)
}
</script>
<style lang="scss" scoped></style>
