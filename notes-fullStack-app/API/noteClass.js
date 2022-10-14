export default class Note {
  _themesNote = {
    red: 'rgba(253, 50, 50, 0.85)',
    green: 'rgba(60, 232, 60, 0.76)',
    yellow: 'rgba(252, 228, 49, 0.75)',
    white: 'white',
  };

  toFix = false;
  themeNote = this._themesNote.white;
  imgFile = '';
  dateNote = this._getDate();

  constructor(name, text, keys) {
    this.nameNote = name;
    this.textNote = text;
    this.index = this.toHash((keys + 1).toString()).toString();
  }

  get getThemesNote() {
    let themes = [];

    for (let key in this._themesNote) {
      themes.push(this._themesNote[key]);
    }


    return themes;
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

  _getDate() {
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
