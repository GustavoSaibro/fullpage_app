<template>
  <div class="partidos">
    <Titulo>
      <h1>Pagina de Partidos</h1>
    </Titulo>

    <Busca />
    <div class="grid-container">
      <PartidoCard class="item-1" />
      <PartidoCard class="item-2" />
      <PartidoCard class="item-3" />
      <PartidoCard class="item-4" />
      <PartidoCard class="item-5" />
      <PartidoCard class="item-6" />
      <PartidoCard class="item-7" />
      <PartidoCard class="item-8" />
      <PartidoCard class="item-9" />
    </div>

  </div>

</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import PartidoCard from "@/components/partidos/PartidoCard.vue"
export default {
  name: "Partidos",
  components: {
    Busca,
    Titulo,
    PartidoCard
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/partidos/partidos.scss";
</style>