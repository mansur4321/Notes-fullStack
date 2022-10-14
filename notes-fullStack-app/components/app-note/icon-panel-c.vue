<template>
  <div class="icon-panel">
    <div class="icon-panel__left-wrapper"
      @click="eventDelegation($event)"
    >
      <img actionName="Big" src="../../static/icon-b.png" class="icon-panel__icon">

      <img actionName="Italic" src="../../static/icon-italics.png" class="icon-panel__icon">

      <img actionName="List" src="../../static/icon-list.png" class="icon-panel__icon">

      <img src="../../static/icon-paper-clip.png" class="icon-panel__icon themes__main-icon">

      <themes-c
        :themeData="themeData"
      ></themes-c>
    </div>

    <div class="icon-panel__right-wrapper">
      <div class="icon-panel__fix-icon-wrapp"
        @click="fixedN"
      >
        <img
        src="../../static/big-icon-office-push-pin-blue.png" class="icon-panel__icon-big _fix-icon__blue">

        <img
          :class="{
            '_opacity-none': fixMode
          }"
        src="../../static/big-icon-office-push-pin.png" class="icon-panel__icon-big _fix-icon">
      </div>

      <img
        @click="closeNote"
      src="../../static/icon-cross.png" class="icon-panel__icon-big">
    </div>
  </div>
</template>

<script>
import themesC from './themes-c.vue';

export default {
  components: {
    themesC,
  },

  props: {
    fixMode: Boolean,
    themeData: Object,
  },

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

      if (actionName !== null) {
        this.$emit('changeText', actionName);
      }
    },
  }

}
</script>

<style>

</style>
