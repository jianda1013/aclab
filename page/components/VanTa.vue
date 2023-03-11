<template>
    <div style="overflow: hidden;">
      <div class="vanta_area" ref="Area" style="overflow:hidden">
        <div class="container d-flex">
          <figure class="text-end">
          <blockquote class="blockquote" style="margin-top: 180px; margin-right:10px;">
            <p class="fs-1 text-light">Applied Cryptology Lab </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">National Chengchi University</cite>
          </figcaption>
          </figure>
        </div>
      </div>
    </div>
</template>
<script setup>
// import * as THREE from 'three'
import NET from 'vanta/src/vanta.dots'
import { onMounted, onBeforeUnmount, ref } from 'vue'
const Area = ref(null)
let vantaEffect = null
onMounted(() => {
  vantaEffect = NET({
    el: Area.value,
    // THREE: THREE,
    color: 0xff3f81,
    backgroungColor: 0x23153c,
    points: 9,
    scale: 1,
    mixDistance: 19
  })
})
onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})
</script>
<style lang="less" scoped>
  .vanta_area{
    width: 100vw;
    height: 60vh
  }
</style>
