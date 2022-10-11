<template>
  <div class="filter-plate"
    @click="openNote"
  >
    <div class="filter-plate__item filter-plate__item-name">
      Название: {{nameNote}}
    </div>

    <div class="filter-plate__item filter-plate__item-text">
      Заметка: {{textNote}}
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

  methods: {
    openNote() {
      this.$store.commit('NoteFromFilterChange', this.index);
    },
  }

}
</script>

<style>

</style>
