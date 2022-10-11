<template>
  <div class="filters">
    <div class="filters__window">
      <filter-plate
        v-for="note of filterPlates"
        :key="note.index"
        :nameNote="note.nameNote"
        :textNote="note.textNote"
        :filterValue="filterStringValue"
        :index="note.index"
      ></filter-plate>
    </div>
  </div>
</template>

<script>
import filterPlate from './filter-plate.vue';

export default {
  components: {
    filterPlate,
  },

  computed: {
    notes() {
      return this.$store.state.notes;
    },

    filterStringValue() {
      return this.$store.state.filterString;
    },

    filterPlates() {
      if(this.filterStringValue === '') return [];

      return this.notes.filter(note => note.nameNote.includes(this.filterStringValue) || note.textNote.includes(this.filterStringValue));
    }
  },
}
</script>

<style>

</style>
