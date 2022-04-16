<template>
  <div class="noticias">
    <Titulo>
      <h1>Pagina de Noticias</h1>
    </Titulo>
    <Busca />

    <div class="grid-container">
      <Noticia />
      <Noticia />
      <Noticia />
      <Noticia />
      <Noticia />
      <Noticia />
      <Noticia />
    </div>

  </div>
</template>

<script>
import Busca from "@/components/common/Busca.vue"
import Titulo from "@/components/common/Titulo.vue"
import Noticia from "@/components/noticias/Noticia.vue"

export default {
  name: "Noticias",
  components: {
    Busca,
    Titulo,
    Noticia
  }
}
</script>

<style scoped lang="scss">
</style>