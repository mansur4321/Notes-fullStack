<template>
  <div class="note-panel">
    <input
      @input="correct('name')"
      ref="name"
    type="text" class="note-panel__name" placeholder="Название">

    <div
      @input="correct('text')"

      @dragenter.prevent="dragElementStyleArea(true)"
      @dragover.prevent="dragElementStyleArea(true)"
      @dragleave.prevent="dragElementStyleArea(false)"
      @drop.prevent="dropFileForDownload($event)"
      @paste.prevent="pasteImgInNote($event)"
      :class="{
        '_drag-elem': dragedCheck
      }"
      ref="text"
    class="note-panel__note" data-placeholder="Заметка" contenteditable="true">

    </div>
  </div>
</template>

<script>
export default {
  name: 'note-panel-c',
  props: {
    name: String,
    text: String,
    changeTextCommand: String,
  },

  data() {
    return {
      timeoutName: null,
      timeoutText: null,

      textContent: '',
      nameContent: '',

      dragedCheck: false,
    }
  },

  watch: {
    changeTextCommand(value) {
      if (value === '') return;

      this.changeText(value);
    },

    text(value) {
      this.$refs.text.innerHTML = '';
      this.$refs.text.innerHTML = value;
    },

    name(value) {
      this.$refs.name.value = '';
      this.$refs.name.value = value;
    }
  },

  mounted() {
    this.$refs.text.innerHTML = this.text;
    this.$refs.name.value = this.name;
  },

  methods: {
    correct(nameInput) {

      switch(nameInput) {
        case 'name':
          clearTimeout(this.timeoutName);

          this.timeoutName = setTimeout(() => {
            this.nameContent = this.$refs.name.value;
            this.correctInput(nameInput);
          }, 500);

          break;


        case 'text':
          clearTimeout(this.timeoutText);

          this.timeoutText = setTimeout(() => {
            this.textContent = this.$refs.text.innerHTML;
            this.correctInput(nameInput);
          }, 500);

          break;
      }
    },

    correctInput(str) {
      this.$emit(str + 'Change', this[str + 'Content']);//Изменяю потому, что ивенты и переменные называются так же но с приставками в виде этих слов
    },


    changeText(name) {
      switch(name) {
        case 'Big':
          this.$refs.text.focus();
          document.execCommand('bold', false, null);

          break;

        case 'Italic':
          this.$refs.text.focus();
          document.execCommand('italic', false, null);

          break;

        case 'List':
          this.$refs.text.focus();
          document.execCommand('insertUnorderedList', false, null);

          break;
      }

      this.changeTextCommand = '';
    },


    dragElementStyleArea(check) {
      if(check) {
        this.dragedCheck = true;
      } else {
        this.dragedCheck = false;
      }
    },

    pasteImgInNote(event) {
      const file = event.clipboardData.files[0];
      let checked = this.checkTypeFile(file);

      if (!checked) return;

      this.dropImageInNote(event.clipboardData);
    },

    dropFileForDownload(event) {
      const file = event.dataTransfer.files[0];
      const checked = this.checkTypeFile(file);

      if (!checked) return;

      this.$refs.text.focus();
      this.dragElementStyleArea(false);
      this.dropImageInNote(event.dataTransfer);
    },

    checkTypeFile(file) {
      if(!file) return false;

      if (!file.type.includes('image')) {
        alert('Загружать можно только картинки!')
        return false;
      }

      return true;
    },

    dropImageInNote(dataTransfer) {
      const file = dataTransfer.files[0];
      const img = this.createImage(file);

      this.insertElement(img);
    },

    createImage(file) {
      const img = document.createElement('img');

      img.src = URL.createObjectURL(file);
      img.classList.add('image-in-note');


      return img
    },

    insertElement(elem) {
      const sel = document.getSelection();
      let start = sel.anchorOffset;
      let end = sel.focusOffset;
      let startNode = sel.anchorNode;
      let endNode = sel.focusNode;


      if (startNode.innerHTML === undefined) {
        let finText = startNode.parentNode.innerHTML.toString().substring(0, start)
          + `<br><${elem.localName} id="img" src="${elem.getAttribute('src')}" class="${elem.getAttribute('class')}"><br>`
          + endNode.parentNode.innerHTML.toString().substring(end);

        sel.deleteFromDocument();
        startNode.parentNode.innerHTML = finText;

      } else {
        let finText = startNode.innerHTML.toString().substring(0, start)
          + `<br><${elem.localName} id="img" src="${elem.getAttribute('src')}" class="${elem.getAttribute('class')}"><br>`
          + endNode.innerHTML.toString().substring(end);

        sel.deleteFromDocument();
        startNode.innerHTML = finText;
      }
      let img = document.getElementById('img');

      img.onload = () => {

        if (img.width <= 150 && img.height <= 150) {
          img.removeAttribute('id');

          return;
        }


        const calc = img.width - img.height;
//Вычисляю примерное отношение сторон у загруженной картинки для правильного отображения
        if (calc > 100) {
          img.classList.add('image-in-note__gorizont');
        } else if (calc < -100) {
          img.classList.add('image-in-note__vertical');
        } else {
          img.classList.add('image-in-note__cub');
        }

        img.removeAttribute('id');
      }

      this.correct('text');
      this.$refs.text.focus();
    },
  }

}
</script>

<style>

</style>
