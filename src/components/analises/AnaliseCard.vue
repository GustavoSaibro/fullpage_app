<template>
  <div class="container">
    <Titulo>
      <h3>Titulo da analise</h3>
    </Titulo>

    <div class="conteudo">
      <div class="grafico">
        <img
          src="@/assets/graphic.png"
          alt=""
        >
        <div class="legenda">
          <ul>
            <li>Legenda 1</li>
            <li>Legenda 2</li>
            <li>Legenda 3</li>
          </ul>
        </div>
      </div>
      <div class="info">
        <Titulo>
          <h4>
            Titulo da info
          </h4>
        </Titulo>
        <div class="conteudo-info">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, labore.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Titulo from "@/components/common/Titulo.vue"
export default {
  components: {
    Titulo
  }

}
</script>

<style scoped lang="scss">
@import "@/styles/analises/analiseCard.scss"; // .container {
</style>