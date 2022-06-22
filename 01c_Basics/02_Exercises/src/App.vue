<template>
  <div>
    <MyComponent1 />
  </div>
</template>

<script>
import Ex01 from './components/01_Exercise'
export default {
  components: {
   MyComponent1: Ex01,
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import 'styles/global';
</style>
