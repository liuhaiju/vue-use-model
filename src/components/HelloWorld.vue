<template>
  <div class="hello">
    <span>Hello World!</span>
  </div>
</template>

<script>
import { DecimalDown } from "@/commonJs/CheckRule.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted() {
    console.log("向下取整===》", DecimalDown('1.2345', 2))
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .about-event-modifier {
    background-color: blanchedalmond;
  }
  .about-event-modifier span {
    background-color: chartreuse;
  }
</style>
