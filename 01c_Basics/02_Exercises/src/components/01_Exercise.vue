<template>
  <div>
    <h1>Mit der Vue Direktive v-for eine Liste erstellen</h1>
    <ul>
      <li v-for="(item, n) in interests" :key="n">
        {{ item }}
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      interests: ['Mallorca', 'Jamaica', 'Tschechien', 'Schweiz'],
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #8575ab;
  margin-top: 10px;
}

h1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #480e98;
  margin-top: 60px;
}

</style>
