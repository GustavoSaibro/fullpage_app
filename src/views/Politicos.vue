<template>
  <div class="politicos">
    <!-- <div class="titulo">
      <h1>Politicos no exercicio</h1>
    </div> -->
    <Titulo>
      <h1>Pagina de Politicos</h1>
    </Titulo>
    <Busca />

    <div class="grid-container">
      <PoliticoCard class="item-1" />
      <PoliticoCard class="item-2" />
      <PoliticoCard class="item-3" />
      <PoliticoCard class="item-4" />
      <PoliticoCard class="item-5" />
      <PoliticoCard class="item-6" />
      <PoliticoCard class="item-7" />
      <PoliticoCard class="item-8" />
      <PoliticoCard class="item-9" />
    </div>
  </div>
</template>

<script>
import PoliticoCard from "@/components/politicos/PoliticoCard.vue"
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
export default {
  name: "Politicos",
  components: {
    PoliticoCard,
    Busca,
    Titulo,
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/politicos/politicos.scss";
</style>