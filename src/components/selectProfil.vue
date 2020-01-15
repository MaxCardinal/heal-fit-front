<template>
    <div class="text-center">
        <div class="row">
            <div class="col" v-for="(profil, key) in profiles" :key="key">
                <router-link :to="{name: navs[0].name,  params: {id: profil.id}}" class="nav-link selectProfils">
                    <img class="rounded-circle w-25 m-3 img-profil" src="./../assets/Profil.png">
                    <h1 class="m-3 text-white"> {{ profil.firstName }} {{ profil.lastName }} </h1>
                </router-link>
            </div>
            <!-- <div class="col">
                <router-link :to="{name: navs[0].name}" class="nav-link selectProfils">
                    <img class="rounded-circle w-25 m-3 img-profil" src="./../assets/Profil.png">
                    <h1 class="m-3 text-white">Jeff Bezos</h1>
                </router-link>
            </div> -->
        </div>
        <!-- <div class="row">
            <div class="col">
                <router-link :to="{name: navs[0].name}" class="nav-link selectProfils">
                    <img class="rounded-circle w-25 m-3 img-profil" src="./../assets/Profil.png">
                    <h1 class="m-3 text-white">Jeff Bezos</h1>
                </router-link>
            </div>
            <div class="col">
                <router-link :to="{name: navs[0].name}" class="nav-link selectProfils">
                    <img class="rounded-circle w-25 m-3 img-profil" src="./../assets/Profil.png">
                    <h1 class="m-3 text-white">Jeff Bezos</h1>
                    </router-link>
            </div>       
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                { name: 'profil', title: '', icon: 'fas fa-home'},
            ],

            profil:{
                id:'',
                firstName:'',
                lastName:'',
                age:'',
                imageUrl:'',
                accountID:'',
                plans:''
            },
            profiles: [],

        }
    },

    methods: {
        
        GetProfiles(){
            let idAccount =  this.$route.params.id

            axios.get('accounts/'+ idAccount +'/Profiles')
            .then(response => {
                console.log(response.data.profiles)
                this.profiles = response.data.profiles
            })
        },

        selectProfil(id) {
            console.log(id)
        }
    },

    mounted() {
        this.GetProfiles()
    }

}
</script>

<style>

</style>