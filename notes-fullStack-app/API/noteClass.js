export default class Note {
  toFix = false;
  themeNote = '#fff';
  imgFile = '';
  dateNote = this.getDate();

  constructor(name, text, keys) {
    this.nameNote = name;
    this.textNote = text;
    this.index = this.toHash('note' + (keys + 1).toString()).toString();
  }

  toHash(string) {
    var hash = 0;

    if (string.length == 0) return hash;

    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i);

      hash = ((hash << 5) - hash) + char;

      hash = hash & hash;
    }

    return hash;
  }

  getDate() {
    let date = new Date();
    month = date.getMonth() + 1;
    let month = month < 10 ? '0' + month : month;
    return `${date.getDate()}.${month}`;
  }

  get minNoteName() {
    if (this.nameNote.length > 9) {
      return this.nameNote.slice(0, 9) + '...';
    } else {
      return this.nameNote;
    }
  }
}
