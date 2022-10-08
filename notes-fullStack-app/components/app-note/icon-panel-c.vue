<template>
  <div class="icon-panel">
    <div class="icon-panel__left-wrapper"
      @click="eventDelegation($event)"
    >
      <img actionName="Big" src="../../static/icon-b.png" class="icon-panel__icon">
      <img actionName="Italic" src="../../static/icon-italics.png" class="icon-panel__icon">
      <img actionName="List" src="../../static/icon-list.png" class="icon-panel__icon">
      <img src="../../static/icon-paper-clip.png" class="icon-panel__icon">
      <img src="../../static/icon-t-shirt.png" class="icon-panel__icon">
    </div>

    <div class="icon-panel__right-wrapper">
      <img
        @click="fixedN"
      src="../../static/big-icon-office-push-pin.png" class="icon-panel__icon-big">
      <img
        @click="closeNote"
      src="../../static/icon-cross.png" class="icon-panel__icon-big">
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    closeNote() {
      this.$emit('closeNote');
    },

    fixedN() {
      this.$emit('fixedN');
    },

    eventDelegation(e) {
      let target = e.target;
      let actionName = target.getAttribute('actionName');

      if (actionName !== undefined) {
        this.$emit('changeText', actionName);
      }
    }
  }

}
</script>

<style>

</style>
