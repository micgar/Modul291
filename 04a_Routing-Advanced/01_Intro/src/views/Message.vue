<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div>
    <h1>Updates</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'New autumn collection coming soon',
        '50% on summer collection and hats until 30.6.22',
        'Join our membership for 10% discount',
        'Donate your clothes and get 2 Franks back for every clothing piece'
      ]
    }
  }
}
</script>
