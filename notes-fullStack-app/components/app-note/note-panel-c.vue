<template>
  <div class="note-panel">
    <input
      v-model="name"
      @input="correct('name')"
    type="text" class="note-panel__name" placeholder="Название заметки">

    <div
      @input="correct('text')"
      ref="text"
    class="note-panel__note" data-placeholder="Тело заметки" contenteditable="true">

    </div>
  </div>
</template>

<script>
export default {
  name: 'note-panel-c',
  props: {
    name: String,
    text: String,
    changeTextCommand: String,
  },

  data() {
    return {
      timeoutName: null,
      timeoutText: null,
    }
  },

  watch: {
    changeTextCommand(value) {
      this.changeText(value);
    },

    text(value) {
      this.$refs.text.textContent = value;
    }
  },

  mounted() {
    this.$refs.text.textContent = this.text;
  },

  methods: {
    correct(nameInput) {

      switch(nameInput) {
        case 'name':
          clearTimeout(this.timeoutName);

          this.timeoutName = setTimeout(() => {
            this.correctInput(nameInput);
          }, 500);

          break;


        case 'text':
          clearTimeout(this.timeoutText);

          this.timeoutText = setTimeout(() => {
            this.text = this.$refs.text.innerHTML;
            this.correctInput(nameInput);
          }, 500);

          break;
      }
    },

    correctInput(str) {
      this.$emit(str, this[str]);
    },

    changeText(name) {
      switch(name) {
        case 'Big':

          document.execCommand('bold', false, null);

          break;

        case 'Italic':
          document.execCommand('italic', false, null);

          break;

        case 'List':
          document.execCommand('insertUnorderedList', false, null);

          break;
      }
    }
  }

}
</script>

<style>

</style>
