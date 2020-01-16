<template>
  <div class="container">
    <div class="justify-content-center">

      <div class="text-center">
        <img class="rounded-circle m-3 img-profil" src="./../assets/Profil.png">
        <h1 class="m-3 text-white">{{profil.firstName}} {{profil.lastName}}</h1>
        <h2 class="m-3 text-white">{{profil.age}}</h2>
      </div>

      <div class="row text-center text-black">

        <div class="col m-3 card  bg-card1">
          <h3 class="text-black">Taille</h3>
          <div class="row">
              <div class="col-1">
                <i class="fas fa-ruler-vertical fa-4x"></i>
              </div>
              <div class="col">
                <h1 class="m-4 text-black">{{ taille }} cm</h1>
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
                <h1 class="m-4 text-black">{{ poids }} kg</h1>
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
                <h1 class="m-4 text-black">{{ objectif }} kg</h1>
              </div>
          </div>
        </div>
      </div>

      <trend :data="data" :gradient="['#FF0000', '#00FF0C']" auto-draw stroke-width="2" smooth v-show="data">
      </trend>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

        profil:{
          id:'',
          firstName:'',
          lastName:'',
          age:'',
          imageUrl:'',
          accountID:'',
          plans:''
        },
        traits: [],
        profileTrait: {},
        poids: '',
        taille: '',
        objectif: '',

        // [85, 84.14, 83, 83.65, 86, 81.98, 82.16, 80.16, 84.14, 85]
        data: []

      }
    },

    methods:{
      
      GetProfil(){
        let id = this.$route.params.id

        axios.get('/profiles/' + id)
        .then(response => {
          this.profil = response.data
        })

      },

      GetTraits() {
        let id = this.$route.params.id

        axios.get('/Profiles/' + id + "/Traits")
        .then(response => {
          this.traits = response.data.traits
          response.data.traits.forEach(trait => {
            if (trait.type == 0) {
              this.data.push(trait.value)
            }
          })

          // this.profileTrait = response.data.traits[response.data.traits.length - 1]
          // console.log(response.data.traits)

          response.data.traits.forEach(trait => {
            if (trait.type == 0) {
              this.poids = trait.value
            }

            if (trait.type == 1) {
              this.taille = trait.value
            }

            if (trait.type == 2) {
              this.objectif = trait.value
            }
          })
        })
      }

    },

    mounted() {
        this.GetProfil()
        this.GetTraits()
    }

  }
</script>

