<template>
  <div id="app">
    <b-container fluid>
      <b-form-group
          horizontal
          :label-cols="1"
          :label="this.info(this.student1)"
      ><h4>Module</h4>
      <div>
        <b-table striped hover :items="$store.getters.getByStudentId(this.student1)"></b-table>
        <h5>Durchschnitt {{ $store.getters.getAvg(this.student1) }}</h5>
      </div>
      </b-form-group>

      <div style="margin-top: 10rem"></div>
      <b-card
          :title="this.infocard(this.student2)"
          img-src="https://picsum.photos/300/150/?image=1027"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 40rem;"
          class="mb-n4"
      >
        <b-card-text>
          <div>
            <b-table striped hover :items="$store.getters.getByStudentId(this.student2)"></b-table>
            <h5>Durchschnitt {{ $store.getters.getAvg(this.student2) }}</h5>
          </div>
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      student1: 100,
      student2: 101
    }
  },
  methods: {
    info(sid){
      return `Student id=${sid}`
    },
    infocard(sid){
      return `Module Student id=${sid}`
    }
  }

}
</script>
