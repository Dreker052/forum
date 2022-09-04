<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
button {
  width: 100%;
  background-color: white;
  border: 3px solid lightblue;
  border-radius: 5px;
  padding: 5px;
}
button:active {
  background-color: rgb(232, 232, 232);
}
</style>
