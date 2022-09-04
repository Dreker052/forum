<template>
  <form class="postForm" @submit.prevent>
    <input v-model="post.title" class="input" type="text" placeholder="title" />
    <my-text-area v-model="post.body" placeholder="body"></my-text-area>
    <my-button @click="addPost">Add</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit("add", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.postForm {
  border: 3px solid lightblue;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  box-shadow: 10px 5px 5px lightgray;
}
.input {
  border: 3px solid lightblue;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 5px;
}
</style>
