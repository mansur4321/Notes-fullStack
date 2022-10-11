<template>
  <div class="filter-plate"
    @click="openNote"
  >
    <div class="filter-plate__item filter-plate__item-name">
      Название: <span>{{stringName.start}}</span><span class="filter-plate__string-highlight">{{stringName.highlight}}</span><span>{{stringName.end}}</span>
    </div>

    <div class="filter-plate__item filter-plate__item-text">
      Заметка: <span>{{stringText.start}}</span><span class="filter-plate__string-highlight">{{stringText.highlight}}</span><span>{{stringText.end}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterValue: String,
    nameNote: String,
    textNote: String,
    index: String,
  },

  data() {
    return {
      stringName: {
        start: '',
        highlight: '',
        end: ''
      },

      stringText: {
        start: '',
        highlight: '',
        end: ''
      }
    }
  },

  mounted() {

    if(this.nameNote.includes(this.filterValue)) {
      this.highlightFilterStringName();
    } else {
      this.stringName.start = this.nameNote;
      this.stringName.highlight = '';
      this.stringName.end = '';
    }

    if(this.textNote.includes(this.filterValue)) {
      this.highlightFilterStringText();
    } else {
      this.stringText.start = this.correctTextNote;
      this.stringText.highlight = '';
      this.stringText.end = '';
    }
  },

  watch: {
    filterValue(value) {

      if(this.nameNote.includes(value)) {
        this.highlightFilterStringName();
      } else {
        this.stringName.start = this.nameNote;
        this.stringName.highlight = '';
        this.stringName.end = '';
      }

      if(this.textNote.includes(value)) {
        this.highlightFilterStringText();
      } else {
        this.stringText.start = this.correctTextNote;
        this.stringText.highlight = '';
        this.stringText.end = '';
      }
    }
  },

  computed: {
    correctTextNote() {
      let regex = /( |<([^>]+)>)/ig,
      result = this.textNote.replace(regex, "");

      return result;
    }
  },

  methods: {
    openNote() {
      this.$store.commit('NoteFromFilterChange', this.index);
    },

    highlightFilterStringText() {
      let leng = this.filterValue.length;
      let indexStr = this.correctTextNote.indexOf(this.filterValue);
      let highlightString = this.correctTextNote.slice(indexStr, indexStr + leng);

      let startString;
      let endString;


      if(indexStr > 10) {
        startString = this.correctTextNote.slice(indexStr - 10, indexStr);
      } else {
        startString = this.correctTextNote.slice(0, indexStr);
      }

      if(this.correctTextNote.length - (indexStr + leng) > 10) {
        endString = this.correctTextNote.slice(indexStr + leng, indexStr + 10);
      } else {
        endString = this.correctTextNote.slice(indexStr + leng);
      }


      this.stringText.start = startString;
      this.stringText.highlight = highlightString;
      this.stringText.end = endString;
    },

    highlightFilterStringName() {
      let leng = this.filterValue.length;
      let indexStr = this.nameNote.indexOf(this.filterValue);
      let highlightString = this.nameNote.slice(indexStr, indexStr + leng);

      let startString;
      let endString;


      if(indexStr > 10) {
        startString = this.nameNote.slice(indexStr - 10, indexStr);
      } else {
        startString = this.nameNote.slice(0, indexStr);
      }

      if(this.nameNote.length - (indexStr + leng) > 10) {
        endString = this.nameNote.slice(indexStr + leng, indexStr + 10);
      } else {
        endString = this.nameNote.slice(indexStr + leng);
      }


      this.stringName.start = startString;
      this.stringName.highlight = highlightString;
      this.stringName.end = endString;
    }
  },

}
</script>

<style>

</style>
