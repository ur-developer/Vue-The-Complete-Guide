<template>
  <base-container title="Vuex">
    <TheCounter></TheCounter>
    <button @click="addOne">Add 1</button>
    <ChangeCount></ChangeCount>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue'
import TheCounter from './components/TheCounter.vue'
import ChangeCount from './components/ChangeCount.vue'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
