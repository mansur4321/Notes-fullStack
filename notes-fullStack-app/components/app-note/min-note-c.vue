<template>
  <div class="note-min"
    @click="openNote"
  >
    <div class="note-min__left-wrapper">
      <span class="note-min__text">{{note.minNoteName}}</span>

      <span class="note-min__date">{{note.dateNote}}</span>
    </div>

    <div class="note-min__right-wrapper">
      <a class="note-min__btn"
        @click="deleteNote($event)"
      >
        <img src="../../static/icon-delete-bin-blue.png" class="note-min__image-blue">
        <img src="../../static/icon-delete-bin.png" class="note-min__image">
      </a>

      <a class="note-min__btn"
        @click="fixedN"
      >
        <img src="../../static/icon-office-push-pin-blue.png" class="note-min__image-blue">
        <img
          :class="{
            '_opacity-none': fixMode,
          }"
        src="../../static/icon-office-push-pin.png" class="note-min__image">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: Object,
    indexNote: String,
    fixMode: Boolean,
  },

  methods: {
    deleteNote(e) {
      e.stopPropagation();
      this.$emit('deleteNote');
    },

    fixedN() {
      this.$emit('fixedN');
    },

    openNote() {
      this.$emit('openNote', this.indexNote);
    }
  },

}
</script>

<style>

</style>
