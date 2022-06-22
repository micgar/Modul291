<template>
  <div id="app">
    <b-container fluid>
      <b-jumbotron>
        <template #header>BZZ Lernende</template>
        <template #lead>
          Informationssystem
        </template>
        <hr class="my-4">
        <p>Kontaktdaten Lehrbetrieb:</p>
        <p>
          Lehrmeister: {{ $store.getters.trainer }}<br/>
          Betrieb: {{ $store.getters.jobPosition }}
        </p>
          <b-button variant="primary" id="tooltip1" v-b-tooltip.hover>
            Telefon
          </b-button>&nbsp;&nbsp;
          <b-tooltip target="tooltip1" triggers="hover">
            {{ $store.state.lehrbetrieb }} 044 xx anrufen !
          </b-tooltip>
        <b-button variant="success" id="tooltip2" v-b-tooltip.hover>Email</b-button>&nbsp;&nbsp;
        <b-tooltip target="tooltip2" triggers="hover">
          an {{ $store.getters.trainerEmail }} schreiben?
        </b-tooltip>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
