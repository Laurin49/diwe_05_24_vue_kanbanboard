<template>
  <div>
    <input
      type="text"
      class="form-control"
      placeholder="Neue Aufgabe"
      v-model="content"
      v-focus="{ color: 'green' }"
    />
    <small>Noch {{ numberOfCharsLeft }} Zeichen erlaubt.</small>
    <div class="d-grid my-2">
      <button class="btn btn-secondary" @click="submitTask()">Eintragen</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewTask",
  inject: [
    "maxNumberOfChars"
  ],
  emits: {
    "new-task": (task) => {
      if(task.content === "") {
        console.log("NewTaskComponent: Der Content sollte nicht leer sein.");
        return false;
      }
      return true;
    },
  },
  data() {
    return {
      content: "",
    };
  },
  computed: {
    numberOfCharsLeft() {
      return this.maxNumberOfChars - this.content.length;
    }
  },
  methods: {
    submitTask() {
      this.$emit("new-task", {
        content: this.content,
      });
      this.content = "";
    }
  },
};
</script>
<style scoped></style>
