<template>
<div id="app">
<b-container fluid>
  <b-card
      title="About Me"
      img-src="https://picsum.photos/300/150/?image=1027"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 50rem;"
      class="mb-n4"
  >
    <b-card-text>
      <b-row class="my-1">
      <b-col sm="5">
        <label>My name is {{ $store.state.name }} and
          I have {{ $store.state.totalCats }} cats.</label>
      </b-col>
      <b-col sm="2">
        <b-form-input v-model="newName"></b-form-input>
      </b-col>
      <b-col sm="4">
        <b-button variant="primary"
                  @click="setName" :disabled="!newName">Update</b-button>
      </b-col>
      </b-row>
      <Cat/>
    </b-card-text>
  </b-card>
</b-container>
</div>
</template>


<script>
import Cat from './components/Cat.vue'
export default {
  name: 'app',
  components: {
    Cat
  },
  data() {
    return {
      newName:''
    }
  },
  methods: {
    setName() {
      if(this.newName) {
        this.$store.commit('setName', this.newName);
        this.newName = '';
      }
    }
  }
}
</script>
