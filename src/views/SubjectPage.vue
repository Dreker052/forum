<template>
  <div class="container">
    <h1>{{ $route.params.title }}</h1>
    <post-form @add="addPost"></post-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import postForm from "@/components/postForm.vue";
import postList from "@/components/postList.vue";
export default {
  components: { postForm, postList },
  data() {
    return {
      posts: [
        { id: 1, title: "qwe1", body: "zxc1" },
        { id: 2, title: "qwe2", body: "zxc2" },
        { id: 3, title: "qwe3", body: "zxc3" },
      ],
    };
  },

  methods: {
    addPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style scoped>
.container {
  border: none;
}
</style>
