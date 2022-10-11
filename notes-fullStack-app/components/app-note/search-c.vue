<template>
  <div class="search">
    <input
      v-model="searchString"
      @input="sharedSearchString"
    type="text" class="search__input" placeholder="Найдите заметку">
    <div class="search__svg">
      <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_105_4)">
        <path d="M19.5 10C19.5 14.6263 15.5404 18.5 10.5 18.5C5.45963 18.5 1.5 14.6263 1.5 10C1.5 5.3737 5.45963 1.5 10.5 1.5C15.5404 1.5 19.5 5.3737 19.5 10Z" fill="white" stroke="#1EE5FF" stroke-width="3"/>
        <path d="M16.9482 15.4218L29.035 26.4628" stroke="#1EE5FF" stroke-width="4"/>
        </g>
        <defs>
        <clipPath id="clip0_105_4">
        <rect width="30" height="28" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-c',

  data() {
    return {
      searchString: '',
    }
  },

  computed: {
    changeNote() {
      return this.$store.state.noteFromFilter;
    }
  },

  watch: {
    changeNote(value) {
      if(value === '') return;

      this.closeAction();
    }
  },

  methods: {
    sharedSearchString() {
      this.$store.commit('changeFilter', this.searchString);
    },

    closeAction() {
      this.searchString = '';
      this.sharedSearchString();
    }
  }
}
</script>

<style>

</style>
