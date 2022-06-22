<!--
BASICS
-->
<template>
  <div>
    <h1 v-if="false" v-text="text">Loading...</h1>
    <h2 v-else-if="false" v-html="html" />
    <a
        v-else
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hi there! This site was made with vue.',
      html: 'Sorry</br>the information can not be projected at the moment</b>',
      link: {
        url: 'https://www.google.ch',
        target: '_blank',
        tabindex: '0',
        title: 'Zurück zu google',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 0;
  font-weight: normal;
}
a {
  display: block;
  margin-top: 40px;
}
</style>
