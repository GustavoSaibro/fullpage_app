<template>
  <Titulo>
    <h1>Pagina de Analises</h1>
  </Titulo>
  <Busca />
  <div class="grid-container">
    <AnaliseCard class="item-1" />
    <AnaliseCard class="item-2" />
    <AnaliseCard class="item-3" />
    <AnaliseCard class="item-4" />
    <AnaliseCard class="item-5" />
    <AnaliseCard class="item-6" />
  </div>
</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import AnaliseCard from "@/components/analises/AnaliseCard.vue"
export default {
  name: "Analises",
  components: {
    Titulo,
    Busca,
    AnaliseCard
  }

}
</script>

<style scoped lang="scss">
@import "@/styles/analises/analises.scss";
</style>