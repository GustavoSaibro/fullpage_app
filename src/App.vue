<template>
  <div class="app">
    <div>
      <Navbar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  setup () {

  },
  components: {
    Navbar
  }
}
</script>

<style  lang="scss">
:root {
  --sidebar-bg-color: rgb(185, 162, 18);
  --bg-color: rgb(224, 224, 224);
}
* {
  margin-top: 0.4em;
  background-color: var(--bg-color);

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 80vw;
    height: 100vh;
    margin-right: 10vw;
    margin-left: 10vw;

    .app {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
