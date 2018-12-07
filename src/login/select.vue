<template>
        <option :value="value">{{content}}</option>
</template>
<script>
  export default {
    // 接受父组件的值
    props: {
      value: '',
      content: String,
      required: true
    }
  }
</script>
