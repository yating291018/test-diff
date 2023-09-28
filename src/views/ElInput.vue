<!-- -->
<template>
  <!-- <el-input :model-value="inputModelValue" @input.lazy="input"></el-input> -->
  <input type="text" :value="inputModelValue" @input.lazy="input">
</template>

<script lang='ts' setup>
  import { ref, onMounted, watch } from 'vue'

  const inputModelValue = ref('')
  const props = defineProps(['modelValue'])
  const emits = defineEmits(['update:modelValue', 'showForm'])

  onMounted(() => {
    inputModelValue.value = props.modelValue
  })

  watch(() => props.modelValue, (nv) => {
    inputModelValue.value = nv
  })

  const input = (e: any) => {
    console.log('value', e.target.value)
    emits('update:modelValue', e.target.value)
    // emits('showForm')
  }

</script>
<style lang='scss' scoped></style>