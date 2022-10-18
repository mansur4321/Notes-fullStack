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
          @deleteNote="deleteNote(note.index)"
          @openNote="openNote"
          @fixedN="fixedNote(note.index)"
          :class="{
            '_fixed-note': note.toFix,
            '_selected-min-note': note.index === selectedNoteIndex,
          }"
        ></min-note-c>

      </div>

      <div class="wrapper-app-note__note-wrapper">
        <icon-panel-c
          @closeNote="closeNotePanel"
          @changeText="changeText"
          @fixedN="fixedNote('-')"
          :fixMode="selectedNotefixMode"
          :themeData="themesData"
          :indexMainNote="selectedNoteIndex"
          :checkFile="checkFile"
          v-if="notePanel"
        ></icon-panel-c>
        <note-panel-c
          @nameChange="changeNameNote"
          @textChange="changeTextNote"
          v-if="notePanel"
          :name="mainName"
          :text="mainText"
          :changeTextCommand="changeTextCommand"
          :theme="themesData.themeNote"
        ></note-panel-c>
        <img src="../../static/click_fon.png" class="wrapper-app-note__image-fon"
          :class="{
            '_opacity-none': notePanel,
          }"
        >
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
      selectedNoteIndex: '',
      selectedNotefixMode: false,

      notePanel: false,
      mainName: '',
      mainText: '',

      changeTextCommand: '',
    }
  },

  computed: {
    notes() {
      return this.$store.state.notes;
    },

    indexNoteFromFilter() {
      return this.$store.state.noteFromFilter;
    },

    themesData() {
      return this.notes.find(note => note.index === this.selectedNoteIndex);
    },

    checkFile() {
      if (this.notes.find(note => note.index === this.selectedNoteIndex).file === null) return false;

      return true;
    }
  },

  watch: {
    indexNoteFromFilter(value) {
      this.openNote(value);
    }
  },

  methods: {
    createNewNote() {
      let length = this.notes.length;
      let hashKeys = length === 0 ? 0 : this.notes[length - 1].index;
      let noteObj = new Note('','', hashKeys);


      this.$store.commit('addNote', noteObj);

      this.closeNotePanel();
      this.openNote(noteObj.index);
    },

    deleteNote(index) {
      if (this.selectedNoteIndex === index) {
        this.closeNotePanel();
      }

      this.$store.commit('deleteNote', index);
    },


    openNote(i) {
      this.selectedNoteIndex = i;

      this.notes.forEach(note => {
        if (this.selectedNoteIndex === note.index) {
          this.selectedNotefixMode = note.toFix;
          this.mainName = note.nameNote;
          this.mainText = note.textNote;
        }
      });


      function open() {
        this.notePanel = true;
      }
      setTimeout(open.bind(this), 1)
    },

    closeNotePanel() {
      this.notePanel = false;
      this.mainName = '';
      this.mainText = '';
      this.selectedNoteIndex = '';
    },


    changeNameNote(name) {
      this.$store.commit('changeNameNote', {name: name, index: this.selectedNoteIndex});
    },

    changeTextNote(text) {
      this.$store.commit('changeTextNote', {text: text, index: this.selectedNoteIndex});
    },


    changeText(name) {
      this.changeTextCommand = name;


      function nullChange() {
        this.changeTextCommand = '';
      }
      setTimeout(nullChange.bind(this), 1)
    },


    fixedNote(indexN) {
      if (indexN === '-'){
        indexN = this.selectedNoteIndex;
      }

      this.$store.commit('fixedNote', indexN);

      this.notes.forEach(note => {
        if (note.index !== indexN) return;
        this.selectedNotefixMode = note.toFix;
      });
    },
  }

}
</script>

<style>

</style>
