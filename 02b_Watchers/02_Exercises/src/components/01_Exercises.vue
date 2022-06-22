<template>
  <div class="container">
    <h1>Watcher für einen Discount</h1>
    <div>
      <h4>{{ product.label }}</h4>
      <h5>CHF {{ product.price }} (CHF {{ discount }} off)</h5>
      <a href="#" @click="updatePrice">Reduce price</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discount: 0,
      product: {
        price: 100,
        label: 'Winterjacke',
      },
    }
  },
  methods: {
    updatePrice(){
      if (this.product.price < 91) return;
      this.product.price--;
    }
  },
  watch: {
    'product.price'(newVal,oldVal){
      this.discount++;
      console.log(`actual(CHF ${newVal}) and old(CHF ${oldVal}) price.`);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Avenir', Helvetica, sans-serif;
  margin: 0;
}

a {
  display: inline-block;
  background: rgb(17, 164, 19);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
