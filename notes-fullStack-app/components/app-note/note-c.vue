<template>
  <div class="wrapper-app-note">
    <header-note-c></header-note-c>
    <main class="wrapper-app-note__main">
      <div class="wrapper-app-note__min-note-wrapper">
        <min-note-c></min-note-c>
      </div>

      <div class="wrapper-app-note__note-wrapper">
        <icon-panel-c></icon-panel-c>
        <note-panel-c></note-panel-c>
      </div>
    </main>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
