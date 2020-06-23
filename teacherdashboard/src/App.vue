<template>
  <div id="app">
    <topnav @language="changeLocale"></topnav>
    <router-view ></router-view>  
  </div>
</template>

<script>
import i18n from './plugins/i18n';
import topnav from "./components/TopNavbar"
export default {
  name: 'app',
  data(){
    return{
      languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'vn', language: 'vn', title: 'Tiếng Việt'},
        ],
    }
  },
  components: {
    topnav
  },
  methods:{
    changeLocale(locale) {
        i18n.locale = locale;
    },
    // trigger(){
    //   this.$$refs.logo.style.visibility = "false";
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
