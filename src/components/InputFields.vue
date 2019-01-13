<template>
  <div>
    <div class="input-wrap">
      <input type="text" v-model="noteTitle" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
      <input type="textarea" v-model="noteVal" @keyup="changeNote" />
    </div>
    <div class="input-wrap">
      <button @click="add">Add note</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputFields',
  data() {
    return {
      noteVal: '',
      noteTitle: '',
    };
  },
  props: {
    addNote: {
      type: Function,
      required: true,
    },
    parentChangeMethod: {
      type: Function,
      required: true,
    },
    noteForUpdate: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  methods: {
    add() {
      this.addNote();
      this.noteVal = '';
      this.noteTitle = '';
    },
    changeNote() {
      this.parentChangeMethod({
        title: this.noteTitle,
        note: this.noteVal,
        date: this.getDate(),
      });
    },
    getDate() {
      const date = new Date();
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.${date.getHours()}.${date.getMinutes()}`;
    },
  },
  watch: {
    noteForUpdate(oldValues, newValues) {
      if (newValues !== {}) {
        this.noteVal = newValues.note;
        this.noteTitle = newValues.title;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .input-wrap {
    padding: 5px;
  }
</style>
