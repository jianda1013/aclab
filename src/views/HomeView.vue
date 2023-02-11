<template>
  <div style="width:100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">AcLab</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">研究團隊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">產學企劃</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              課程資訊
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
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
      <div class="container">
          <div class="row  justify-content-evenly mt-2">
              <div class="card col-4 mt-2" style="width: 18rem;">
                  <img src="../assets/123.png" class="card-img-top " alt="">
                  <div class="card-body mt-1">
                      <h5 class="card-title">Crytography</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              <div class="card col-4 mt-2" style="width: 18rem;">
                  <img src="../assets/istockphoto-1363235380-612s.jpg" class="card-img-top " alt="" style="height:100%
                  ">
                  <div class="card-body">
                      <h5 class="card-title">Signature</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              <div class="card col-4 mt-2" style="width: 18rem;">
                  <img src="../assets/whatis_encryption.png" class="card-img-top mt-3" alt="">
                  <div class="card-body mt-4">
                      <h5 class="card-title">Encryption</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
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
