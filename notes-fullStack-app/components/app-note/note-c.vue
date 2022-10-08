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
          @fixedN="fixedNote(note.index)"
          :class="{
            '_fixed-note': note.toFix
          }"
        ></min-note-c>

      </div>

      <div class="wrapper-app-note__note-wrapper">
        <icon-panel-c
          @closeNote="closeNotePanel"
          @changeText="changeText"
          @fixedN="fixedNote('-')"
          :fixMode="selectedNotefixMode"
          v-if="notePanel"
        ></icon-panel-c>
        <note-panel-c
          @nameChange="changeNameNote"
          @textChange="changeTextNote"
          v-if="notePanel"
          :name="mainName"
          :text="mainText"
          :changeTextCommand="changeTextCommand"
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
      notes: [],

      selectedNoteIndex: '',
      selectedNotefixMode: false,

      notePanel: false,
      mainName: '',
      mainText: '',

      changeTextCommand: '',
    }
  },

  methods: {
    createNewNote() {
      let length = this.notes.length;
      let hashKeys = length === 0 ? 0 : this.notes[length - 1].index;
      let noteObj = new Note('','', hashKeys);


      this.notes.push(noteObj);

      this.openNote(noteObj.index);
    },

    deleteNote(index) {
      if (this.selectedNoteIndex === index) {
        this.closeNotePanel();
      }

      this.notes = this.notes.filter(note => note.index !== index);
    },


    openNote(i) {
      this.closeNotePanel();

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
      this.notes.find(note => note.index === this.selectedNoteIndex).nameNote = name;
    },

    changeTextNote(text) {
      this.notes.find(note => note.index === this.selectedNoteIndex).textNote = text;
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

      this.notes.forEach(note => {
        if(note.index !== indexN) {
          note.toFix = false;
        }

        if(note.index === indexN) {
          note.toFix = !note.toFix;
          this.selectedNotefixMode = note.toFix;
        }
      });
    }
  }

}
</script>

<style>

</style>
