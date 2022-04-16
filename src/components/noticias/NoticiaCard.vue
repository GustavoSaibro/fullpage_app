<template>
  <div class="container">
    <div class="titulo-noticia">
      <h2>Titulo da noticia</h2>
    </div>
    <div class="corpo-noticia">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis laborum nesciunt cupiditate, aperiam ab dignissimos pariatur numquam blanditiis hic est dolore culpa tempora perspiciatis atque repellendus illo facere ullam maxime excepturi iure architecto cumque dicta aliquid? Soluta magni nesciunt iste!
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.container {
  border: 2px solid #000000;

  .titulo-noticia {
    text-align: center;
    margin: 0;
    padding-top: 1.2em;
  }

  .corpo-noticia {
    box-sizing: border-box;
    padding: 0.5em 1.2em;
  }
}
</style>