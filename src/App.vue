<template>
  <div class="container-fluid" id="app">
        <div class="row">
            <Sidebar></Sidebar>

            <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                <NavBar></NavBar>
                <div class="main-content-container container-fluid px-4 mt-4">
                    <transition name="slide-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </main>
        </div>
    </div>
</template>


<script>
  import NavBar from '@/components/layouts/Navbar.vue'
  import Sidebar from '@/components/layouts/Sidebar.vue'

  export default {
    components: {
      NavBar,
      Sidebar
    }
  }
</script>