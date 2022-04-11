<template>
  <nav class="nav">
    <img
      src="@/assets/logo.png"
      alt=""
    >
    <div class="navigation">
      <NavigationLink
        v-for="(item,i) in container"
        :Key="i"
        :linkName="item.linkName"
        :to="item.to"
      />

    </div>
  </nav>
</template>

<script>
import NavigationLink from './NavigationLink.vue'

export default {

  components: {
    NavigationLink
  },
  setup () {

    // const container = ['Home', 'Politicos', 'Partidos', 'Noticias', 'Analsies']
    const container = [
      { linkName: "Home", to: "/" },
      { linkName: "Politicos", to: "/politicos" },
      { linkName: "Partidos", to: "/partidos" },
      { linkName: "Noticias", to: "/noticias" },
      { linkName: "Analises", to: "/analises" }
    ]
    return {
      container
    }
  }

}
</script>

<style>
</style>

<style scoped lang="scss">
nav {
  display: flex;
  position: sticky;
  width: 80vw;
  padding: 0;
  margin: 0;
  background: var(--sidebar-bg-color);
  justify-content: space-between;
  z-index: 999;

  img {
    margin: 1.1em;
    width: 4em;
    height: 4em;
    object-fit: cover;
    background: var(--sidebar-bg-color);
  }

  .navigation {
    display: flex;
    position: relative;
    margin-top: 2em;
    background: var(--sidebar-bg-color);

    ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      background: var(--sidebar-bg-color);

      li {
        background: var(--sidebar-bg-color);

        margin: 0;
        padding: 0;
        margin-right: 0.2em;
        a {
          background: var(--sidebar-bg-color);

          text-decoration: none;
        }
      }
    }
  }
}
</style>