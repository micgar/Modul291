<!--
  Using Computed Setters
-->
<template>
  <div class="container">
    <h3>Inc or decrement by 1</h3>
    <input v-model="incrementOne" type="number" placeholder="" />
    <h3 class="output">Get input: {{ incrementOne }}</h3>
    <h5 class="output">Set division: {{ divideByTwo }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: -1,
      divideByTwo: 0 //divide by 2
    }
  },
  computed: {
    incrementOne: {
      //getter
      get(){
        console.log(`${this.count+2}`);
        return this.count + 2;
      },
      //setter
      set(val){
        this.count = val-1;
        this.divideByTwo = val/2;
        console.log(`${this.count}, ${val}`);
      }
    }
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
  font-size: 16px;
}
</style>
