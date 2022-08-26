<template>
  <div class="header">
    <div class="header__wrapper-btn">
      <add-btn-c></add-btn-c>
    </div>

    <div class="header__wrapper-search">
      <search-c></search-c>
    </div>
  </div>
</template>

<script>
import addBtnC from './add-btn-c.vue'
import SearchC from './search-c.vue'

export default {
  components: { addBtnC, SearchC },
  name: 'header-note-c',

}
</script>

<style>

</style>
