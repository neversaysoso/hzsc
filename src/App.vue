<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Microsoft YaHei', sans-serif;
}
body {
  color: #333;
  line-height: 1.6;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>