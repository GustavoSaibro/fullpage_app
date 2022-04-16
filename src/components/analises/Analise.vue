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
.container {
  border: 2px solid #000000;
  .conteudo {
    display: flex;
    position: relative;
    .grafico {
      display: flex;
      position: relative;
      flex-direction: column;
      padding: 0.4em;
      box-sizing: border-box;

      .legenda {
        box-sizing: border-box;
        width: 70%;
        border: 1px solid #000000;
      }
    }
    .info {
      margin: 0.3em;
      .conteudo-info {
        box-sizing: border-box;
        padding: 0.3em;
        margin: 0.2em;
        border: 1px solid #000000;
      }
    }
  }
}
</style>