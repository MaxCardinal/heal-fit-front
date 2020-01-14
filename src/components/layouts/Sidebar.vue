<template>
    <aside class="main-sidebar bg-dark col-12 col-md-3 col-lg-2 px-0">
          <div class="main-navbar">
            <nav class="navbar align-items-stretch  flex-md-nowrap border-bottom p-0">
              <a class="navbar-brand w-100 mr-0" style="line-height: 25px;">
                <div class="d-table m-auto">
                  <span class="d-none d-md-inline ml-1">Heal-Fit</span>
                </div>
              </a>
              <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i class="material-icons">&#xE5C4;</i>
              </a>
            </nav>
          </div>
          <div class="nav-wrapper">
            <ul class="nav flex-column">
                <li class="nav-item" v-for="(nav, key) in navs" :key="key" :class="{ 'active' : nav.name.includes($route.name.split('.')[0]) }">
                    <router-link :to="{name: nav.name}" class="nav-link">
                        <i :class="nav.icon"></i>
                        <b>{{ nav.title }}</b>
                    </router-link>
                </li>
            </ul>
          </div>
        </aside>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {name: 'home', title: 'Profil', icon: 'fas fa-home'},
                {name: 'catalog', title: 'Mes statistiques', icon: 'fas fa-list-ul'},
            ]
        }
    },
}
</script>

<style>

</style>