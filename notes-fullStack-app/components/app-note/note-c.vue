<template>
  <div class="wrapper-app-note">
    <header-note-c
      @createNote="createNewNote"
    ></header-note-c>
    <main class="wrapper-app-note__main">
      <div class="wrapper-app-note__min-note-wrapper">
        <min-note-c
          v-for="note of notes"
          :key="note.index"
          :note="note"
          :indexNote="note.index"
          @deleteNote="deleteNote(note.index)"
          @openNote="openNote"
        ></min-note-c>

      </div>

      <div class="wrapper-app-note__note-wrapper">
        <icon-panel-c></icon-panel-c>
        <note-panel-c></note-panel-c>
      </div>
    </main>
  </div>
</template>

<script>
import Note from '../../API/noteClass';

import headerNoteC from './header-note-c.vue';
import IconPanelC from './icon-panel-c.vue';
import MinNoteC from './min-note-c.vue';
import NotePanelC from './note-panel-c.vue';

export default {
  components: {
    headerNoteC,
    MinNoteC,
    IconPanelC,
    NotePanelC
  },

  data() {
    return {
      notes: [],
      selectedNoteIndex: '',
    }
  },

  computed: {

  },

  methods: {
    createNewNote() {
      let length = this.notes.length;
      let hashKeys = length === 0 ? 0 : this.note[length - 1];
      let noteObj = new Note('','', hashKeys);

      this.notes.push(noteObj);
    },

    deleteNote(index) {
      this.notes = this.notes.filter(note => note.index !== index);
    },

    openNote(i) {
      this.selectedNoteIndex = i;
    }
  }

}
</script>

<style>

</style>
