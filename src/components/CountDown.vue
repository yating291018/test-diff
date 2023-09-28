<!-- -->
<template>
  <div>
    {{ remainFormTime }}
  </div>
</template>

<script lang='ts' setup>
  import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue'
  import { getFormatTime } from './utils'

  const props = withDefaults(defineProps<{
    sumTime: number; // ms
  }>(), {
    sumTime: 0
  })

  const remainTime = ref<number>(props.sumTime)
  const remainFormTime = ref<string>('00:00:00')
  const timer = ref<NodeJS.Timeout>()

  
  const emits = defineEmits<{
    (event: string, res: any): void
  }>()

  onMounted(() => {
    remainFormTime.value = getFormatTime(remainTime.value)
  })

  watchEffect(() => {
    if (remainTime.value >= 0) {
      timer && clearTimeout(timer.value)
      timer.value = setTimeout(() => {
        remainFormTime.value = getFormatTime(remainTime.value)
        if (remainTime.value <= 0) {
          clearTimeout(timer.value)
          emits('onFinish', {})
        }
        remainTime.value = remainTime.value - 1000
      }, 1000)
    }
  })

  onBeforeUnmount(() => {
    clearTimeout(timer.value)
    timer.value = undefined
  })
</script>
<style lang='scss' scoped></style>