export default {
  mounted(el, bindings) {
    // console.log(bindings);
    if ("color" in bindings.value) {
      el.addEventListener("focus", function() {
        this.style.borderColor = bindings.value.color;
        this.style.borderWidth = "4px";
      });
      el.addEventListener("focusout", function() {
        this.style.borderColor = "";
        this.style.borderWidth = "1px";
      });
    }
    el.focus();
  },
}