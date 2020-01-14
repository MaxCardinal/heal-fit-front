<template>
    <div class="main-navbar sticky-top ">
        <nav class="navbar bg-dark align-items-stretch flex-md-nowrap p-0">  
            <div class="main-navbar w-100  d-md-flex d-lg-flex"></div>
            <router-link :to="{name: navs[0].name}" class="nav-link">
                    <i class="fas fa-sign-out-alt hover-logout fa-3x"></i>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {},
            isUser: false,
            navs: [
                { name: 'login', title: 'Paramètre', icon: 'fas fa-home'},
            ]
        }
    },
}
</script>

<style>

</style>