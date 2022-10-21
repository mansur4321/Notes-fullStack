<template>
  <div class="container">
    <note-c></note-c>
    <open-img-window-c
      v-if="modeWindow"
      :sorce="imgFileUrl"
    ></open-img-window-c>
  </div>
</template>

<script>
import noteC from '../components/app-note/note-c.vue';
import openImgWindowC from '../components/open-image/open-img-window-c'

export default {
  name: 'IndexPage',
  components: {
    noteC,
    openImgWindowC,
  },

  computed: {
    modeWindow() {
      return this.$store.state.openModeWindow;
    },

    imgFileUrl() {
      return this.$store.state.imgFileUrl;
    },
  }
}
</script>
