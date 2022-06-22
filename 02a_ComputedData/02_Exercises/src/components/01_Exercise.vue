<!--
computed data
-->
<template>
  <div class="container">
    <h3>Bitte Vor- und Nachnamen angeben:</h3>
    <input v-model="firstName" placeholder="Vorname" />
    <input v-model="lastName" placeholder="Nachname" />

    <h3 class="output">{{ fullName }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
.output {
  font-size: 25px;
  color: #003366;
}
</style>
