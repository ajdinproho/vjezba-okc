<template>
  <div>
    <div class="input-wrap">
      <input type="text" id="title" placeholder="Note title" v-model="noteTitle"/>
    </div>
    <div class="input-wrap">
     <textarea id="noteValue" v-model="noteVal" placeholder="Type your note..."></textarea>
    </div>
    <div class="input-wrap">
      <button @click="addNote">Add note</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputFields',
  data() {
    return {
      note: {
        title: '',
        text: '',
        dateTime: '',
      },
      noteVal: '',
      noteTitle: '',
    };
  },
  methods: {
    getDateTime() {
      const date = new Date();
      const hours = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();
      let dd = date.getDate();
      let mm = date.getMonth() + 1;
      const yyyy = date.getFullYear();
      if (dd < 10) {
        dd = `0${dd}`;
      }
      if (mm < 10) {
        mm = `0${mm}`;
      }
      return `${dd}.${mm}.${yyyy}. - ${hours}:${mins}:${secs}`;
    },
    clearValues() {
      this.noteVal = '';
      this.noteTitle = '';
    },
    addNote() {
      this.note.title = this.noteTitle;
      this.note.text = this.noteVal;
      this.note.dateTime = this.getDateTime();
      this.$store.dispatch('dodajNote', {
        title: this.note.title,
        text: this.note.text,
        date: this.note.dateTime,
      });
      this.clearValues();
    },
  },
};
</script>
<style lang="scss" scoped>
  #title{
    background-color: firebrick;
    color: white;
    width: 500px;
    height: 40px;
    font-size: 20px;
    border: 3px solid black;
    outline: none;
    padding: 6px;
    opacity: 0.92;
  }
  #noteValue{
    background-color: firebrick;
    color: white;
    padding: 15px 10px;
    font-size: 20px;
    width: 400px;
    border: 3px solid black;
    height: 200px;
    resize: none;
    outline: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    opacity: 0.92;
  }
  .input-wrap {
    padding: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    opacity: 0.92;
  }
  ::placeholder{
    color: black;
  }
  button{
    font-size: 20px;
    color: black;
    border: 2px solid black;
    background-color: firebrick;
    width: 200px;
    height: 35px;
    outline: none;
    font-weight: bold;
  }
</style>
