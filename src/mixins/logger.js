export default {
  mounted() {
    this.writeLogEntry(this.$options.name + " ist nun vollständig geladen");
  },
  methods: {
    writeLogEntry(text) {
      console.log(text);
    }
  },
}