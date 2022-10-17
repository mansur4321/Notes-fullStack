export const state = () => ({
  notes: [],


  filterString: '',
  noteFromFilter: '',
})

export const mutations = {
  NoteFromFilterChange(state, index) {
    state.noteFromFilter = index;
  },//

  changeFilter(state, filterString) {
    state.filterString = filterString;
  },//

  addNote(state, newNote) {
    state.notes.push(newNote);
  },

  deleteNote(state, index) {
    state.notes = state.notes.filter(note => note.index !== index);
  },

  changeNameNote(state, noteObj) {
    state.notes.find(note => note.index === noteObj.index).nameNote = noteObj.name;
  },

  changeTextNote(state, noteObj) {
    state.notes.find(note => note.index === noteObj.index).textNote = noteObj.text;
  },

  fixedNote(state, indexN) {
    state.notes.forEach(note => {
      if(note.index !== indexN) {
        note.toFix = false;
      }

      if(note.index === indexN) {
        note.toFix = !note.toFix;
      }
    });
  },

  ChangeThemeOfNote(state, noteObj) {
    state.notes.find(note => note.index === noteObj.index).themeNote = noteObj.theme;
  },

  changeFileInNote(state, dataObj) {
    state.notes.find(note => note.index === dataObj.index).file = dataObj.file;
  }
}

export const actions = {

}

export const getters = {

}
