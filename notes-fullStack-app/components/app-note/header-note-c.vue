<template>
  <div class="header">
    <div class="header__wrapper-btn"
      @click="createNote"
    >
      <add-btn-c></add-btn-c>
    </div>

    <div class="header__wrapper-search">
      <search-c></search-c>

      <filters-window-c
        :class="{
          '_opacity-none': !filterWindowOpen
        }"
      ></filters-window-c>
    </div>
  </div>
</template>

<script>
import addBtnC from './add-btn-c.vue'
import SearchC from './search-c.vue'
import filtersWindowC from './filters-window-c.vue'

export default {
  components: { addBtnC, SearchC, filtersWindowC },
  name: 'header-note-c',

  data() {
    return {
      filterWindowOpen: false,
    }
  },

  computed: {
    filterStringValue() {
      return this.$store.state.filterString;
    }
  },

  watch: {
    filterStringValue(value) {
      if (value === '') {
        this.actionsFocus('close');
      } else {
        this.actionsFocus('open');
      }
    }
  },

  methods: {
    createNote() {
      this.$emit('createNote')
    },

    actionsFocus(mode) {
      if (mode === 'open') {
        this.filterWindowOpen = true;
      } else if (mode === 'close') {
        this.filterWindowOpen = false;
      }
    }
  }
}
</script>

<style>

</style>
