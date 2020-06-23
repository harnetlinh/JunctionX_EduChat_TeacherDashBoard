<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand v-b-toggle.sidebar-footer href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
    <!-- <div style="padding:1px; position: absolute; top: 0px; right: 0px;">
        <b-button id="buttonid" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
            <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </b-button>
    </div> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item @click="languageChange('en')" href="#">EN</b-dropdown-item>
            <b-dropdown-item @click="languageChange('vn')" href="#">VN</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
methods:{
    languageChange(value){
        this.$emit('language',value)
    }
}
}
</script>

<style>

</style>