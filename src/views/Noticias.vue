<template>
  <div class="noticias">
    <Titulo>
      <h1>Pagina de Noticias</h1>
    </Titulo>
    <Busca />
    <div class="grid-container">
      <NoticiaCard />
      <NoticiaCard />
      <NoticiaCard />
      <NoticiaCard />
      <NoticiaCard />
      <NoticiaCard />
      <NoticiaCard />
    </div>
  </div>
</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import NoticiaCard from "@/components/noticias/NoticiaCard.vue"

export default {
  name: "Noticias",
  components: {
    Busca,
    Titulo,
    NoticiaCard
  }
}
</script>

<style scoped lang="scss">
</style>