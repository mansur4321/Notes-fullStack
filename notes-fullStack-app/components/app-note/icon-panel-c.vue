<template>
  <div class="icon-panel">
    <div class="icon-panel__left-wrapper"
      @click="eventDelegation($event)"
    >
      <img title="Жирный текст" actionName="Big" src="../../static/icon-b.png" class="icon-panel__icon">

      <img title="Курсивный текст" actionName="Italic" src="../../static/icon-italics.png" class="icon-panel__icon">

      <img title="Маркированный список" actionName="List" src="../../static/icon-list.png" class="icon-panel__icon">

      <file-icon-c
        :checkFile="checkFile"
        :indexMainNote="indexMainNote"
      ></file-icon-c>

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
import FileIconC from './file-icon-c.vue';
import themesC from './themes-c.vue';

export default {
  components: {
    themesC,
    FileIconC,
  },

  props: {
    fixMode: Boolean,
    themeData: Object,
    indexMainNote: String,
    checkFile: Boolean,
  },

  methods: {
    closeNote() {
      this.$emit('closeNote');
    },

    fixedN() {
      this.$emit('fixedN');
    },

    eventDelegation(input) {
      let target = input.target;
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
