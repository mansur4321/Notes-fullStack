<template>
  <label
    :title="titleFileComponent"
  for="file" class="file">
    <a
      v-if="checkFile"
      :href="fileURL"
      :download="fileOfNote.name"
    title="Скачать закрепленный файл" class="file__open-file" >Cкачать</a>

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
    },

    fileOfNote() {
      return this.$store.getters.fileOfNote(this.indexMainNote);
    },

    fileURL() {
      return URL.createObjectURL(this.fileOfNote);
    }
  },

  methods: {
    changeFile() {
      let file = this.$refs.fileInput.files[0];

      if (!this.errorCheck(file)) return;


      this.nameFile = file.name;

      this.$store.commit('changeFileInNote', {
        index: this.indexMainNote,
        file: file,
      })
    },

    errorCheck(file) {
      if (!file) {
        alert('Не получилось загрузить файл')

        return false;
      }

      if (file.size > 5000000) {
        alert('Файл не может весить больше 5МБ');

        return false;
      }


      return true;
    },
  }
}
</script>

<style>

</style>
