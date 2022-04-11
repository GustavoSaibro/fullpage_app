<template>
  <div
    class="info-card"
    :style="{'width': width, 'height': height, 'margin-right':margin, 'margin-left':margin}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ['width', 'height', 'margin']

}
</script>

<style scoped lang="scss">
.info-card {
  display: flex;
  position: relative;
  //   width: 80vw;
  flex-wrap: wrap;
  flex-flow: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}
</style>