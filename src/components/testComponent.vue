<template>
  <div>{{ name }}}</div>
  <div>{{ allName }}</div>
  <button @click="">点击改变名称</button>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  computed,
} from 'vue'

export default defineComponent({
  name: 'TestComponent',
  setup(props, ctx) {
    const name = ref('')
    onMounted(() => {
      console.log('this is mounted !')
    })
    const allName = computed(() => {
      return name.value + 'this is a test !'
    })
    const changeName = () => {
      const nameList = ['tey','yur','pofew','ljgr','hgrn','te2y','y2ur','pofe2w','ljgr2','hgrn2']
      const _index = parseInt(Math.random() * 10)
      name.value = nameList[_index]
    }
    return {
      name,
      allName,
      changeName,
    }
  },
})
</script>

<style>

</style>
