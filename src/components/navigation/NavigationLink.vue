<template>
  <router-link
    :to="to"
    class="link"
  >
    {{linkName}}
  </router-link>
  <!-- <div>
    {{linkName}}
  </div> -->
</template>

<script>

export default {
  props: ['to', 'linkName'],
  setup () {

  }
}
</script>

<style scoped lang="scss">
.link {
  background: var(--sidebar-bg-color);
  text-decoration: none;
  margin-right: 1.3em;
}
</style>