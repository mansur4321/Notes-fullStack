<template>
  <div class="note-panel">
    <input
      @input="correct('name')"
      ref="name"
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

      textContent: '',
      nameContent: '',
    }
  },

  watch: {
    changeTextCommand(value) {
      if (value === '') return;

      this.changeText(value);
    },

    text(value) {
      this.$refs.text.innerHTML = '';
      this.$refs.text.textContent = value;
    },

    name(value) {
      this.$refs.name.value = '';
      this.$refs.name.value = value;
    }
  },

  mounted() {
    this.$refs.text.innerHTML = this.text;
    this.$refs.name.value = this.name;
  },

  methods: {
    correct(nameInput) {

      switch(nameInput) {
        case 'name':
          clearTimeout(this.timeoutName);

          this.timeoutName = setTimeout(() => {
            this.nameContent = this.$refs.name.value;
            this.correctInput(nameInput);
          }, 500);

          break;


        case 'text':
          clearTimeout(this.timeoutText);

          this.timeoutText = setTimeout(() => {
            this.textContent = this.$refs.text.innerHTML;
            this.correctInput(nameInput);
          }, 500);

          break;
      }
    },

    correctInput(str) {
      this.$emit(str + 'Change', this[str + 'Content']);//Изменяю потому, что ивенты и переменные называются так же но с приставками в виде этих слов
    },

    changeText(name) {
      switch(name) {
        case 'Big':
          this.$refs.text.focus();
          document.execCommand('bold', false, null);

          break;

        case 'Italic':
          this.$refs.text.focus();
          document.execCommand('italic', false, null);

          break;

        case 'List':
          this.$refs.text.focus();
          document.execCommand('insertUnorderedList', false, null);

          break;
      }

      this.changeTextCommand = '';
    }
  }

}
</script>

<style>

</style>
