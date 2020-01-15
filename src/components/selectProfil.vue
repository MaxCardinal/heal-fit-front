<template>
    <div class="text-center">
        <div class="row">
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
        </div>
        <div class="row">
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
        </div>
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

        }
    },

    methods: {
        
        GetProfils(){
            let idAccouts = 1

            axios.Get('accounts/'+ idAccouts +'/Profiles')
            .then(response => {
                this.profil = response.data
            })
        }

    }

}
</script>

<style>

</style>