<template>
  <div>
      <sidebar></sidebar>
      {{$t("hello")}}
  </div>
</template>

<script>
import sidebar from "./SideBar"
// import topnav from "./TopNavbar"
export default {
    components:{
        sidebar,
        // topnav
    }
}
</script>

<style>

</style>