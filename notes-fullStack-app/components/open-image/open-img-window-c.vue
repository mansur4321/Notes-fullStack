<template>
  <div
    @click="closeComponent"
  class="open-img-window">
    <img :src="sorce" class="open-img-window__image">
  </div>
</template>

<script>
export default {
  props: {
    sorce: String,
  },

  methods: {
    closeComponent() {
      this.$store.commit('changeImgFileURL', {
        mode: false,
        src: null,
      });
    }
  },
}
</script>

<style>

</style>
