<template>
    <div class="container" >
        <div class="justify-content-center">

            <div id="formContent ">
            <div id="container-login" class="row">
                <div id="bloc-left" class="col-sm-3"></div>
                <div id="form" class="card  bg-grey box-shadow-spe text-center col-sm-6 p-4">
                    <form @submit.prevent="connection()">
                        <div class="col align-self-center form-group">
                            <div class="row">
                                <div class="col-sm-6">
                                    <input type="text" id="login" class="form-control" name="login" placeholder="Email" v-model="user.login">
                                </div>
                                <div class="col-sm-6">
                                    <input type="password" id="password" class="form-control" name="password" placeholder="Password" v-model="user.password">
                                </div>
                            </div>
                            <input type="submit" class="form-control mt-3 btn-success" value="Log In">
                            <!-- <router-link :to="{name: navs[0].name}" class="nav-link"> -->
                            <!-- </router-link> -->
                        </div>
                    </form>
                </div>
                <div id="bloc-right" class="col-sm-3"></div>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                { name: 'select', title: '', icon: 'fas fa-home'},
            ],
            accounts: [],
            user: {
                login: '',
                password: '',
            }
        }
    },
    
    methods: {
        connection() {
            axios.get('Auth?login=' + this.user.login + "&password=" + this.user.password)
            .then(response => {
                console.log(response.data)
                if (response.data) {
                    this.$router.push({name: 'select'})            
                }
            })
        }
    },

    mounted() {
        // this.getAccounts()
    }
    
}
</script>

<style>

</style>