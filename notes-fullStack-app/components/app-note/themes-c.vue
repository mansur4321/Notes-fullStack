<template>
  <div class="themes">
    <img src="../../static/icon-t-shirt.png" class="icon-panel__icon themes__icon">

    <div class="themes__wrapper-list">
      <div
        v-for="theme, index of themeData.getThemesNote"
        @click="selectTheme(theme)"
        :key="index"
        :style="{
          'background': theme
        }"
      class="themes__theme"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    themeData: Object,
  },

  methods: {
    selectTheme(theme) {
      this.$store.commit('ChangeThemeOfNote', {
        index: this.themeData.index,
        theme: theme
      })
    }
  }
}
</script>

<style>

</style>
