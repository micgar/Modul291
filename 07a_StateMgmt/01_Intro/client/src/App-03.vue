<template>
  <div id="app">
    <b-container fluid>
      <h2>Module</h2>
      <div>
        <b-table striped hover :items="$store.getters.module"></b-table>
      </div>
      <h2>Allgemein Bildung</h2>
      <ul>
        <li v-for="subject in $store.getters.abu" :key="subject.title">
          {{ subject.title }}
        </li>
      </ul>
      <h2>Erweiterte Grundkompetenzen</h2>
      <div>
        <b-table striped hover :items="$store.getters.egk"></b-table>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
