<template>
  <div>
    {{ content }}
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
} from 'vue'

export default defineComponent({
  name: 'MyComponentA',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
})
</script>
