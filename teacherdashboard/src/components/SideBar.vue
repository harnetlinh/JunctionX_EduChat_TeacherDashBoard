<template>
  <div>
        <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
            <template v-slot:footer="{ hide }">
            <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                <strong class="mr-auto">Footer</strong>
                <b-button size="sm" @click="hide">Close</b-button>
            </div>
            </template>
            <div class="px-3 py-2">
                <h3>
                    EduChat
                </h3>
                <!-- <b-img src="" fluid thumbnail></b-img> -->
            </div>
        </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>