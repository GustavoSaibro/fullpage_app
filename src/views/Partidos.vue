<template>
  <div class="partidos">
    <div class="titulo">
      <h1>Pagina de partidos</h1>
    </div>
    <Busca />
  </div>

</template>

<script>
import Busca from "@/components/common/Busca.vue"
export default {
  name: "Partidos",
  components: {
    Busca
  }
}
</script>

<style>
</style>