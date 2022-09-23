<template>
  <textarea name="" id="" cols="30" rows="5"></textarea>
</template>

<script>
export default {
  name: "my-text-area",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
textarea {
  border: 3px solid lightblue;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 5px;
  resize: none;
}
</style>
