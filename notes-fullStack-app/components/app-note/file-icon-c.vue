<template>
  <label
    :title="titleFileComponent"
  for="file" class="file">
    <input id="file" ref="fileInput" type="file" class="file__input" @change="changeFile()">

    <img src="../../static/icon-paper-clip.png" class="icon-panel__icon file__img">

    <div
      v-if="checkFile"
    class="file__fileMode"></div>
  </label>
</template>

<script>
export default {

  props: {
    indexMainNote: String,
    checkFile: Boolean,
  },

  data() {
    return {
      nameFile: '',
    }
  },

  computed: {
    titleFileComponent() {
      if (this.nameFile === '') {
        return 'Файл не добавлен';
      } else {
        return 'Файл ' + this.nameFile + ' добавлен';
      }
    }
  },

  methods: {
    changeFile() {
      let file = this.$refs.fileInput.files[0];

      this.nameFile = file.name;

      this.$store.commit('changeFileInNote', {
        index: this.indexMainNote,
        file: file,
      })
    }
  }
}
</script>

<style>

</style>
