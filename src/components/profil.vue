<template>
  <div class="container">
    <div class="justify-content-center">

      <div class="text-center">
        <img class="rounded-circle m-3 img-profil" src="./../assets/Profil.png">
        <h1 class="m-3 text-white">Jeff Bezos</h1>
        <h2 class="m-3 text-white">28 ans</h2>
      </div>

      <div class="row text-center text-black">

        <div class="col m-3 card  bg-card1">
          <h3 class="text-black">Taille</h3>
          <div class="row">
              <div class="col-1">
                <i class="fas fa-ruler-vertical fa-4x"></i>
              </div>
              <div class="col">
                <h1 class="m-4 text-black">185 cm</h1>
              </div>
          </div>
        </div>

        <div class="col m-3 card bg-card2">
          <h3 class="text-black">Poids actuelle</h3>
          <div class="row">
              <div class="col-1">
                <i class="fas fa-weight fa-4x"></i>
              </div>
              <div class="col">
                <h1 class="m-4 text-black">80.16 kg</h1>
              </div>
          </div>
        </div>


        <div class="col m-3 card bg-card3">
          <h3 class="text-black">Obectif</h3>
          <div class="row">
              <div class="col-1">
                <i class="fas fa-weight fa-4x"></i>
              </div>
              <div class="col">
                <h1 class="m-4 text-black">75 kg</h1>
              </div>
          </div>
        </div>
      </div>

      <trend
          :data="data"
          :gradient="['#FF0000', '#00FF0C']"
          auto-draw
          stroke-width="2"
          smooth>
      </trend>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        data: [85, 84.14, 83, 83.65, 82.19, 81.98, 82.16, 80.16, 84.14, 85]
      }
    }
  }
</script>

