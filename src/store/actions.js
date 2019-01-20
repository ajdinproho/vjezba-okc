import types from './mutations-types';

export default {
  dodajNote({ commit }, note) {
    commit(types.dodavanje_biljeske, note);
  },
  removeMethod({ commit }, index) {
    commit(types.brisanje_biljeske, index);
  },
};
