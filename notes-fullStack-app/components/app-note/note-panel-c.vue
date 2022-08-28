<template>
  <div class="note-panel">
    <input
      v-model="name"
      @input="correct('name')"
    type="text" class="note-panel__name" placeholder="Название заметки">

    <textarea
      v-model="text"
      @input="correct('text')"
    class="note-panel__note" placeholder="Тело заметки">
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'note-panel-c',
  props: {
    name: String,
    text: String,
  },

  data() {
    return {
      timeoutName: null,
      timeoutText: null,
    }
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
            this.correctInput(nameInput);
          }, 500);

          break;
      }
    },

    correctInput(str) {
      this.$emit(str, this[str]);
    }

  }

}
</script>

<style>

</style>
